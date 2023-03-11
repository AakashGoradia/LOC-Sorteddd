import cv2
import pytesseract
import numpy as np
import warnings
warnings.filterwarnings("ignore")

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

import urllib.request

class AppURLopener(urllib.request.FancyURLopener):
    version = "Mozilla/5.0"

opener = AppURLopener()
response = opener.open('http://httpbin.org/user-agent')

from urllib.request import urlopen
def url_to_image(url, readFlag=cv2.IMREAD_COLOR):
    # download the image, convert it to a NumPy array, and then read
    # it into OpenCV format
    resp = opener.open(url)
    image = np.asarray(bytearray(resp.read()), dtype="uint8")
    image = cv2.imdecode(image, readFlag)

    # return the image
    return image

img = url_to_image('https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/6284efbfffc3d519e87ad616_positive-quotes-1.jpg')

alpha = pytesseract.image_to_string(img)
print(alpha)