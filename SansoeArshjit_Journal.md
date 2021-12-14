# Journal
Author: **Arshjit Sansoe**<br/>
Group: **Arshjit Sansoe**, **Kofi Osel**, and **George Aziz**<br>

Date: **11/26/2021**
## Setting up the VPS
We bought the **Debian version for VPS** from the **OVHcloud** website. It was $6 in the **OVHcloud** website. Afterwards, we got a confirmation email with our VPS name, IPv4 address, username, and password. I updated and upgraded the VPS. After I changed the password for the VPS so it would be more secure.
## GitHub Repository
Once we bought the VPS, we made a **GitHub** to put all of our work in there.
## Adding users
I added all the users, **Kofi George, and me** with a password each. I added them to the **sudo group**, so they don't need to use the root user.
## Images & Resources
### Setting up the VPS
- Connecting to VPS: <br/>![Connecting to VPS](https://github.com/jojo0105/UnixFinalProject/blob/main/Images/Connecting%20to%20VPS.png?raw=true)
- Apt update:<br/>![Apt update](https://github.com/jojo0105/UnixFinalProject/blob/main/Images/apt%20update.png?raw=true)
- Apt upgrade:<br/>![Apt upgrade](https://github.com/jojo0105/UnixFinalProject/blob/main/Images/apt%20upgrade.png?raw=true)
- Change root password:<br/>![Change root password](https://github.com/jojo0105/UnixFinalProject/blob/main/Images/root%20password%20changed.png?raw=true)
### GitHub Repository
- https://github.com/jojo0105/UnixFinalProject
### Adding users
- Adduser arsh:<br/>![Adduser arsh](https://github.com/jojo0105/UnixFinalProject/blob/main/Images/Adduser%20arsh.png?raw=true)
- Adduser kofi:<br/>![Adduser kofi](https://github.com/jojo0105/UnixFinalProject/blob/main/Images/Adduser%20kofi.png?raw=true)
- Adduser george:<br/>![Adduser george](https://github.com/jojo0105/UnixFinalProject/blob/main/Images/Adduser%20george.png?raw=true)
- Adduser arsh to sudo group:<br/>![Adduser arsh to sudo group](https://github.com/jojo0105/UnixFinalProject/blob/main/Images/Adduser%20arsh%20to%20sudo.png?raw=true)
- Adduser kofi to sudo group:<br/>![Adduser kofi to sudo group](https://github.com/jojo0105/UnixFinalProject/blob/main/Images/Adduser%20kofi%20to%20sudo.png?raw=true)
- Adduser george to sudo group:<br/>![Adduser george to sudo group](https://github.com/jojo0105/UnixFinalProject/blob/main/Images/Adduser%20george%20to%20sudo.png?raw=true)

Date: **12/03/2021**
## Setting up the Nginx
We started off by installing **nginx** on the VPS. 
Once installed, we checked and made sure if the server was running with systemctl commands. 
After we open the website on browser to see if it also works on the web.
## Configure our website with Nginx
We made a directory for our team website. The path is called **"/var/www/html"** where you are suppose to make the directory. Afterwards, we tranferred all the files including html files and css files, and a few images into that directory.
## Images & Resources
### Setting up the Nginx
- Installing Nginx & update packages:<br/>![install nginx & update packages](https://github.com/KofiOsel/gittest2/blob/master/Images/Install%20Nginx.png?raw=true)
- Check the status of Nginx server to see if its running or not:<br/>![Check nginx status](https://github.com/KofiOsel/gittest2/blob/master/Images/Check%20status%20to%20see%20if%20its%20running.png?raw=true)
- Check the status of Nginx on browser:<br/>![Check status on browser](https://github.com/KofiOsel/gittest2/blob/master/Images/Check%20on%20browser.png?raw=true)
- Go to Nginx directory:<br/>![Go to Nginx directory](https://github.com/KofiOsel/gittest2/blob/master/Images/Go%20to%20Nginx%20directory.png?raw=true)
- Make team website directory:<br/>![Make team website directory](https://github.com/KofiOsel/gittest2/blob/master/Images/Make%20team%20website%20directory.png?raw=true) 
- Transfer html code from computer to VPS:<br/>![Transfer html code](https://github.com/KofiOsel/gittest2/blob/master/Images/Transferring%20our%20html%20code%20from%20computer%20to%20VPS.png?raw=true)
- Rename the index file:<br/>![rename index file](https://github.com/KofiOsel/gittest2/blob/master/Images/renaming%20html%20file%20to%20index.png?raw=true)
- Add css files to the team website:<br/>![Add files css to the team website](https://github.com/KofiOsel/gittest2/blob/master/Images/adding%20css%20file.png?raw=true)
- Team website link:<br/>http://149.56.14.211/team/
- Git Repository:<br/>https://github.com/jojo0105/UnixFinalProject

Date: **12/10/2021**
## Completed the process of deploying our website on Nginx
It took a long process to make files with touch and copy and paste our website code for each file into our new files.
We decided to delete the old files from the path **"/var/www/html"** for each team members folder and replace them with 
all the files. We used the command **scp** which does a secure copy of our files. Firstly, we had to copy the folder
into the vps main directory, then copy the files to the **"/var/www/html"** path. For both of these tasks we had to use
**scp** command. Once done, we just had to change the main html file names to **index.html**. Afterwards, we just opened
our websites on the Google Chrome browser. 
## Setting up Jekyll Website on our systems
Before anything, we had to install **Ruby** and **Bundle** on our systems. We used the commands
**sudo apt-get install ruby-full build-essential**, **bundle install**, & **sudo gem install jekyll bundler**. Once we
were done installing all the Jekyll dependencies, we made a new directory with static website inside it. We created the 
directory and installed Jekyll inside the new directory with the command **"sudo jekyll new myblog"** and named the
directory **"myblog"**. After we went into the new directory called **"myblog"** with the command**cd myblog**. We ran
the Jekyll website we generated with **sudo bundle exec jekyll serve** Once the command **sudo bundle exec jekyll
serve** successfully ran, we opened it with the link **http://localhost:4000/**.
## Images & Resources
### Completed the process of deploying our website on Nginx
- ![](https://github.com/KofiOsel/gittest2/blob/master/test/Screenshot%202021-12-07%20230920.png?raw=true)
- ![](https://github.com/KofiOsel/gittest2/blob/master/test/Screenshot%202021-12-07%20231005.png?raw=true)
- ![](https://github.com/KofiOsel/gittest2/blob/master/test/Screenshot%202021-12-07%20231056.png?raw=true)
- ![](https://github.com/KofiOsel/gittest2/blob/master/test/Screenshot%202021-12-07%20231216.png?raw=true)
- ![](https://github.com/KofiOsel/gittest2/blob/master/test/Screenshot%202021-12-07%20231440.png?raw=true)
- ![](https://github.com/KofiOsel/gittest2/blob/master/test/Screenshot%202021-12-10%20204018.png?raw=true)
- ![](https://github.com/KofiOsel/gittest2/blob/master/test/Capture.JPG?raw=true)
- Git Repository:<br/>https://github.com/jojo0105/UnixFinalProject
- Git Repository:<br/>https://github.com/KofiOsel/gittest2