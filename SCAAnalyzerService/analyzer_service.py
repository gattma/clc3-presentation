import glob
import cv2
import os


class VideoAnalyzer:

    def process(self, video_path):
        file1 = open("resources/workflow.xml", "r+")
        workflow_xml = file1.readlines()

        images = []
        filenames = []
        for filename in glob.glob('resources/*.png'):
            filenames.append(os.path.basename(os.path.splitext(filename)[0]))
            images.append(cv2.imread(filename, cv2.IMREAD_COLOR).tolist())

        return workflow_xml, images, filenames
