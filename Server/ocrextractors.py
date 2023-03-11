import json
import pytesseract
import cv2
import numpy as np
import sys
import re
import os
from PIL import Image
import ftfy
import pan_read           
import aadhaar_read
import io
import warnings
warnings.filterwarnings("ignore")

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Extract text from the scanned document using OCR
text = pytesseract.image_to_string('D:\pyth\python\LOC-Sorteddd\LOC-Sorteddd\Server\image4.jpg')

import re
def id_read_data(text):
    name = None
    address = None
    nameline = []
    text0 = []
    text1 = []
    text2 = []
    lines = text.split('\n')
    for lin in lines:
        s = lin.strip()
        s = lin.replace('\n','')
        s = s.rstrip()
        s = s.lstrip()
        text1.append(s)
    text1 = list(filter(None, text1))
    lineno = 0

    for wordline in text1:
            xx = wordline.split('\n')
            if ([w for w in xx if re.search('(INCOMETAXDEPARWENT|INCOME|TAX|GOW|GOVT|GOVERNMENT|OVERNMENT|VERNMENT|DEPARTMENT|EPARTMENT|PARTMENT|ARTMENT|INDIA|NDIA)$', w)]):
                text1 = list(text1)
                lineno = text1.index(wordline)
                break
    text0 = text1[lineno+1:]
    try:
    # Cleaning first names
            name = text0[2]
            name = name.rstrip()
            name = name.lstrip()
            name = name.replace("8", "B")
            name = name.replace("0", "D")
            name = name.replace("6", "G")
            name = name.replace("1", "I")
            name = re.sub('[^a-zA-Z] +', ' ', name)
    # Cleaning Father's name
            address = text0[3]
            address = address.rstrip()
            address = address.lstrip()
            address = address.replace("8", "S")
            address = address.replace("0", "O")
            address = address.replace("6", "G")
            address = address.replace("1", "I")
            address = address.replace("\"", "A")
            address = re.sub('[^a-zA-Z] +', ' ', address)

    except:
            pass
    data = {}
    data['Name'] = name
    data['Address'] = address
    return data

def findword(textlist, wordstring):
    lineno = -1
    for wordline in textlist:
        xx = wordline.split( )
        if ([w for w in xx if re.search(wordstring, w)]):
            lineno = textlist.index(wordline)
            textlist = textlist[lineno+1:]
            return textlist
    return textlist

print(id_read_data(text))