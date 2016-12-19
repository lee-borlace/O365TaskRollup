# Office 365 Task Rollup
In Office 365, your tasks can be all over the place and there's no way to get an easy view across all of them. 

This project lets you roll up your assorted tasks from the following locations into one view:
* Team Planners
* Group Planners
* Outlook / Exchange
* SharePoint tasks lists

It is a SharePoint-hosted add-in which uses Angular 2.

This project was started based on the following, so see those for info on getting started with a project like this one.
* Scot Hillier's article [Build a SharePoint Add-In with Angular2 and TypeScript](https://www.itunity.com/article/build-sharepoint-addin-angular2-typescript-3059) .
* Amal's article [Develop SharePoint Addins with Angular 2](https://amalzblog.wordpress.com/2016/05/30/develop-sharepoint-addin-with-angular-2/).

## Prerequisites
* Visual Studio with Microsoft Office Developer Tools for Visual Studio installed.
* Node
* NPM
  * Globally-installed packages
    * gulp
    * webpack
    * typescript@2.0
* Visual Studio add-ins :
  * 2015 Node.js Tools. Can be downloaded [here](https://www.visualstudio.com/vs/node-js/)
  * NPM Task Runner. Can be downloaded [here](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner)
  * Typescript 2.0. Ccan be downloaded from [here](http://download.microsoft.com/download/6/D/8/6D8381B0-03C1-4BD2-AE65-30FF0A4C62DA/TS2.0.3-TS-release20-nightly-20160921.1/TypeScript_Dev14Full.exe)
* From the command line of the O365TaskRollupApp project, run `npm install` before trying to build the solution.

## Zone.js Workaround
There is currently an issue where one of the required packages **zone.js** has a conflict with SharePoint. It throws an error if **global.Zone** is already defined. SharePoint itself defines global.Zone as well, so zone.js throws the error.

To get around this, the following must be manually commented out in **node_modules\zone.js\dist\zone.js**.

```javascript
if (global.Zone) {
        // Need to comment out the throwing of the Error : 
        // throw new Error('Zone already loaded.');
}
```

When there is time this will be automated with a gulp task.

## Building and Packaging
Webpack is responsible for compiling typescript and assembling JS / CSS / HTML resources. To see any compilation errors, you need to look at the **Task Runner Explorer** window after building to see if Webpack has generated any red error messages.

This various files are generated in **Scripts** folder :
* polyfill.js
* polyfill.js.map
* vendor.js
* vendor.js.map
* app.js
* app.js.map

These are deployed to SharePoint and are included in Scripts/Elements.xml. Content in the app directly references these files.

They are included in the csproj, but are excluded from source control. They are re-built every time the project is built.