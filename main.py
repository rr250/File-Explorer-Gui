import eel
import os
import sys

eel.init('front-end')

@eel.expose
def main():
    try:
        folderName=(sys.argv[1])
        l=os.listdir(folderName)
    except Exception as e:
        l=['Error in Folder Name']
    return l

eel.start('index.html', size=(1000, 600))



