# Web OSC Control

Send OSC messages from a web frontend.

## Requirements ##

Needs [NodeJS](https://nodejs.org/) and [Bower](https://bower.io/) installed.

## Setup ##

```bash
npm install
bower install
```

### Running on port 80 ###

Install [NGINX](http://nginx.org/en/docs/install.html).

To run the frontend on port 80 without other services:
```bash
sudo mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.bak
sudo cp nginx/web-osc-control-proxy-default /etc/nginx/sites-available/default
sudo service nginx reload
```

If you already have other hosts configured:
```bash
sudo cp nginx/web-osc-control-proxy-named /etc/nginx/sites-available/
sudo nano /etc/nginx/sites-available/web-osc-control-proxy-named
sudo ln -s /etc/nginx/sites-available/web-osc-control-proxy-named /etc/nginx/sites-enabled/
sudo service nginx reload
```

## Run ##

```bash
./bin/www
```

Use something like [PM2](http://pm2.keymetrics.io/docs/usage/quick-start/) or [Forever](https://github.com/foreverjs/forever) to daemonize/autostart the server.
