# INSTALL.MD
**File contains the dependencies needed to run everything in the repository**

# Step 1: Purchase a VPS & Install Nginx
- To begin, you must purchase a VPS
- To install nginx, run "**sudo apt-get install nginx**"

# Step 2: Installing Ruby
- You will be required to have a the ruby package installed in order to build the Jekyll website
- To install ruby, run "**sudo apt-get install ruby-full build-essential**"
- If you have any missing gems, you must install **sudo bundle install**

# Step 4: To build a website using nginx:
- You must copy the folder with the website into the directory called `/var/www/html/`
- To copy folder, run "**sudo cp -r  websiteDirectory /var/www/html/**"

# Step 5: Auto-Deploy (Incomplete)
- Steps if it worked:
  - You must copy the script file into the directory called `/usr/bin`
  - To copy folder, run "**sudo cp auto-deploy.py /usr/bin**"
  - You must copy the service file into the directory called `/etc/systemd/system`
  - To copy folder, run "**sudo cp auto-deploy.service /etc/systemd/system**"
  - To enable & start auto-deploying, you must enable the service by running: "**sudo systemctl start auto-deploy.service**" & you must enable the service by running: "**sudo systemctl enable auto-deploy.service**"
    - If service file is changed, then you must run "**sudo systemctl daemon-reload**"
    - If python file is changed, then you must run "**sudo systemctl restart auto-deploy.py**"