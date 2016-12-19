# Office 365 Task Rollup
In Office 365, your tasks can be all over the place and there's no way to get an easy view across all of them. 

This project lets you roll up your assorted tasks from the following locations into one easy view:
* Team Planners
* Group Planners
* Outlook / Exchange
* SharePoint tasks lists

This project was started based on the following, so see those for info on getting started with a project like this one.
* Scot Hillier's article [Build a SharePoint Add-In with Angular2 and TypeScript](https://www.itunity.com/article/build-sharepoint-addin-angular2-typescript-3059) .
* Amal's article [Develop SharePoint Addins with Angular 2](https://amalzblog.wordpress.com/2016/05/30/develop-sharepoint-addin-with-angular-2/)

## Prerequisites
* Visual Studio with Microsoft Office Developer Tools for Visual Studio installed.
* Node
* NPM
  * Globally-installed packages
    * gulp
    * webpack
* Visual Studio add-ins :
  * 2015 Node.js Tools. Can be downloaded [here](https://www.visualstudio.com/vs/node-js/)
  * NPM Task Runner. Can be downloaded [here](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner)
  * Typescript 2.0 (can be downloaded from [here](http://download.microsoft.com/download/6/D/8/6D8381B0-03C1-4BD2-AE65-30FF0A4C62DA/TS2.0.3-TS-release20-nightly-20160921.1/TypeScript_Dev14Full.exe))
* Typescript 2.0 installed on dev machine.

`npm install -g typescript@2.0`

* v2.0 of tsc.exe is in PATH environment variable (e.g. C:\Program Files (x86)\Microsoft SDKs\TypeScript\2.0\).
* From the command line of the O365TaskRollupApp project, run `npm install` before trying to build the solution.

## Architecture
This is a SharePoint-hosted add-in which uses Angular 2.

## node / npm
This project uses npm for its various Javascript packages. 

To download them all, open a Node command prompt in the project folder and run `npm install`

### Adding Further Packages
To add new packages to the solution later, run the following from the node command line. For packages only required in production build:

`npm install packageName --save`.

For packages required in dev build too:

`npm install packageName --save-dev`

