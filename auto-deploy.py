import time
import os

path = '/home/arsh/staticWebsite'
cmd = 'cd /home/arsh/staticWebsite; sudo bundle exec jekyll serve'
while os.path.isdir(path):
    os.system(cmd)
    time.sleep(300)
