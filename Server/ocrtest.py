import cv2 as cv
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

img = cv.imread('6284efbfffc3d519e87ad616_positive-quotes-1.jpg')

roi = img

alpha = pytesseract.image_to_string(roi)
print(alpha)

