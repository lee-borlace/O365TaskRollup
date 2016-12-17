# Office 365 Task Rollup
In Office 365, your tasks can be all over the place and there's no way to get an easy view across all of them. 

This project lets you roll up your assorted tasks from the following locations into one easy view:
* Team Planners
* Group Planners
* Outlook / Exchange
* SharePoint tasks lists

This project was started based on Scot Hillier's article [Build a SharePoint Add-In with Angular2 and TypeScript](https://www.itunity.com/article/build-sharepoint-addin-angular2-typescript-3059) so see that for info on getting started with a project like this one.

## Prerequisites
* Visual Studio with Microsoft Office Developer Tools for Visual Studio installed.
* Node
* NPM
  * Golbal packages
    * gulp
    * typescript
    * gulp-typescript
* Visual Studio add-ins :
  * 2015 Node.js Tools
  * NPM Task Runner
  * Typescript 2.0

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

