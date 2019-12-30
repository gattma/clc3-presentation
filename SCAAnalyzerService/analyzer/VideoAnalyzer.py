from analyzer.workflowBuilder.workflow_builder import WorkflowBuilder
from analyzer.clickDetector.ClickDetector import ClickDetector
from analyzer.clickDetector.ClickDetectorUtil import apply_region_filter
from analyzer.VideoAnalyzerUtil import *
import cv2
import datetime

CURSOR_TEMPLATE = "resources/cursor-own-white.png"


class VideoAnalyzerProcessError(Exception):
    """ Raised when VideoAnalyzer is not able to process the current video. """
    pass


class VideoAnalyzer:

    def __init__(self, weights_path, debug=False):
        self.debug = debug
        self.click_detector = ClickDetector()
        self.click_detector.load_weights(weights_path)

    def process(self, video_path):
        vid = cv2.VideoCapture(video_path)
        if vid.isOpened() is False:
            if self.debug:
                print(f"not able to open '{video_path}'")
            raise VideoAnalyzerProcessError(f"not able to open '{video_path}'")

        cursor_template = cv2.imread("analyzer/resources/cursor-own-white.png")

        ret, before = vid.read()
        curr_pos_ms = vid.get(cv2.CAP_PROP_POS_MSEC)
        last_click_pos_ms = curr_pos_ms

        _, after = vid.read()

        reference_img = None
        if ret is True:
            reference_img = before

        workflow_builder = WorkflowBuilder()
        action_cnt, frame_nr = 0, 0

        images = []
        file_names = []
        while vid.isOpened():
            ret, frame = vid.read()
            if ret is True:
                start = datetime.datetime.now()
                before = cv2.resize(before, (480, 584))
                after = cv2.resize(after, (480, 584))

                before_region, after_region = apply_region_filter(before, after)
                before_region, after_region = reshape(before_region, after_region)

                click_detected = self.click_detector.predict(before_region, after_region)
                end = datetime.datetime.now()
                if self.debug:
                    print("RUNTIME (detection): {}".format(end - start))

                if click_detected:
                    if self.debug:
                        print(f"CLICK detected at frame {frame_nr}, time between two clicks: {curr_pos_ms - last_click_pos_ms}")

                    workflow_builder.append("delay", (curr_pos_ms - last_click_pos_ms))
                    last_click_pos_ms = curr_pos_ms

                    cursor_x1, cursor_y1, cursor_x2, cursor_y2 = find_cursor(after, cursor_template)

                    action_img = extract_action_img(reference_img, cursor_x1, cursor_y1, cursor_x2, cursor_y2)
                    action_img_filename = "ACTION{}.png".format(action_cnt)
                    images.append(action_img.tolist())
                    file_names.append(action_img_filename)
                    workflow_builder.append("click", action_img_filename)
                    action_cnt = action_cnt + 1

                curr_pos_ms = vid.get(cv2.CAP_PROP_POS_MSEC)
                before = after
                ret, after = vid.read()
                if ret is False:
                    break

                frame_nr = frame_nr + 1

            else:
                break

        print(f"ACTION-CNT: {action_cnt}")
        vid.release()
        cv2.destroyAllWindows()

        return workflow_builder.build(), images, file_names
