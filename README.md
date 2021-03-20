# Moment 5.2 as part of course DT173G
This repo contains the code for the webbapplikation which is consuming the REST API from https://github.com/kiwiguard/DT173G_m5-1.
The calls are made with JavaScript and Fetch.

A live version of the applikation can be found at: https://dt173g.susanne-nilsson.se

## Usage
For use of this code locally, please clone from:
https://github.com/kiwiguard/DT173G_m5-2.git

sourcecode is found under /src, and is supported by gulp for an automated build pipeline.
Run with

## Installation
To install and use this automated environment locally, follow these steps:
1. Make sure you've got node.js and npm installed.
2. Clone project from repository
```
git clone https://github.com/kiwiguard/DT173G_m5-2.git
```
3. From the directory of your local files run
```
(sudo) npm install
```
4. Start Gulp

Start by running the ```gulp``` command. This will run all *tasks* in predetermined order, create the 'pub'-files and start Browsersync for livereload.

5. Edit files in /src

## Automated tasks are:
* Concatenating CSS files into one single .css-file and minimizing files for faster loading. Added sourcemaps for tracking.
* Concatenating SASS files into one single .css-file and minimizing files for faster loading. Added sourcemaps for tracking.
* Concatenating JavaScript files into one single .js-file and minimizing files for faster loading. Added sourcemaps for tracking.
* Compressing images from 'src/image'-folder. Creating smaller filesizes for faster loading.
* Browsersync - realtime updates of changes to project during development. Displays in browser.
* Moving all files to 'pub'-folder structure for easy deployment on webserver.
