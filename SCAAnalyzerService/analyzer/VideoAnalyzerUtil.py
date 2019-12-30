import numpy as np
import imutils
import cv2


def extract_action_img(frame, x1, y1, x2, y2):
    """Use coordinates of detected click and extract the region around the image."""
    height, width, _ = frame.shape

    y1_new = y1 - 40
    if y1_new < 0:
        y1_new = 0

    x1_new = x1 - 40
    if x1_new < 0:
        x1_new = 0

    y2_new = y2 + 40
    if y2_new > height:
        y2_new = height

    x2_new = x2 + 40
    if x2_new > width:
        x2_new = width

    return frame[y1_new:y2_new, x1_new:x2_new, :]


def transform(img, threshold1, threshold2=200):
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return cv2.Canny(img, threshold1, threshold2)


def find_cursor(frame, cursor_template):
    found = None

    frame = transform(frame, 50)
    cursor_template = transform(cursor_template, 150)

    (tH, tW) = cursor_template.shape[:2]
    for scale in np.linspace(0.5, 1.0, 50)[::-1]:
        resized_cursor = imutils.resize(cursor_template, width=int(cursor_template.shape[1] * scale))
        result = cv2.matchTemplate(frame, resized_cursor, cv2.TM_CCOEFF)
        (_, maxVal, _, maxLoc) = cv2.minMaxLoc(result)

        if found is None or maxVal > found[0]:
            (tW, tH) = resized_cursor.shape[:2]
            found = (maxVal, maxLoc)
            # found_cursor = resized_cursor

    (_, maxLoc) = found
    (startX, startY) = (int(maxLoc[0]), int(maxLoc[1]))
    (endX, endY) = (int((maxLoc[0] + tH)), int((maxLoc[1] + tW)))

    return startX, startY, endX, endY


def reshape(before_frame, after_frame):
    before_region = np.expand_dims(before_frame, axis=0)
    before_region = before_region.astype('float32')
    after_region = np.expand_dims(after_frame, axis=0)
    after_region = after_region.astype('float32')
    return before_region, after_region
