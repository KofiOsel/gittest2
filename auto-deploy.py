import time
import os

path = '/home/arsh/my_website2'
cmd = 'cd /home/arsh/my_website2; sudo bundle exec jekyll serve'
while os.path.isdir(path):
    os.system(cmd)
    time.sleep(300)
