import os
import cv2
import numpy as np
from skimage.metrics import structural_similarity as ssim


def apply_region_filter(before, after):
    before_gray = cv2.cvtColor(before, cv2.COLOR_BGR2GRAY)
    after_gray = cv2.cvtColor(after, cv2.COLOR_BGR2GRAY)
    (score, diff) = ssim(before_gray, after_gray, full=True)
    diff = (diff * 255).astype("uint8")
    thresh = cv2.threshold(diff, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]

    contours = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    contours = contours[0] if len(contours) == 2 else contours[1]

    before_region = np.zeros(before.shape, np.uint8)
    after_region = np.zeros(after.shape, np.uint8)

    for c in contours:
        area = cv2.contourArea(c)
        if area > 40:
            x, y, w, h = cv2.boundingRect(c)
            before_region[y:y + h, x:x + w] = before[y:y + h, x:x + w]
            after_region[y:y + h, x:x + w] = after[y:y + h, x:x + w]

    return before_region, after_region


def count_files_in_dir(before_dir):
    return len([name for name in os.listdir(before_dir) if os.path.isfile(os.path.join(before_dir, name))])
