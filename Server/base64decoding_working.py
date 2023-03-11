import base64
from PIL import Image
import cv2
import io
import numpy as np

# Open image file
with open('image.jpg', 'rb') as image_file:
    image_data = image_file.read()

# Encode image data as a base64 string
encoded_image = base64.b64encode(image_data).decode('utf-8')

def stringToRGB(base64_string):
    imgdata = base64.b64decode(str(base64_string))
    img = Image.open(io.BytesIO(imgdata))
    opencv_img= cv2.cvtColor(np.array(img), cv2.COLOR_BGR2RGB)
    return opencv_img 

imgdata = stringToRGB(encoded_image)

# Window name in which image is displayed
window_name = 'image'
  
# Using cv2.imshow() method
# Displaying the image
cv2.imshow(window_name, imgdata)
  
# waits for user to press any key
# (this is necessary to avoid Python kernel form crashing)
cv2.waitKey(0)
  
# closing all open windows
cv2.destroyAllWindows()