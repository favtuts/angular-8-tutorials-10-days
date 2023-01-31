# angular-8-tutorials-10-days
Learn Angular 8 Step By Step in 10 Days blog series, it all starts here: https://www.favtuts.com/learn-angular-8-step-by-step-in-10-days-day-1/

# install Node.js

```
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
nvm --version
nvm list-remote
nvm install 14.21.2
```

# install Angular 8

```
npm install -g @angular/cli@8
ng --version
```

# create new Application

```
ng new hello-world
cd hello-world
ng serve
ng serve --host 0.0.0.0 --port 8080
```

Fixing for live load not working:

```
ng serve --live-reload -o

# On Linux OS run your app with administrative controls using sudo
sudo ng serve
```