# MyFlixAngularClient

## Project description

In this project I created the client-side using Angular from my movie-api database. In it you can register as a user and navigate through the app. You can add movies to your favorites list as well as remove them, and update your user. The app shows you important information about each movie when you click on it.
By this project, I complete a web application (client-side and server-side [movie-api](https://github.com/wichofly/movie-api.git)) known as MEAN (MongoDB, Express, Angular and Node.js).

## Objective

Using Angular, build the client-side for an application called myFlix based on its existing server-side code (REST API and database), with supporting documentation.

## General notes on this Angular project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## User Stories

- As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.
- As a user, I want to be able to create a profile so I can save data about my favorite movies.

## Key Features

- Welcome view where users are able to either log in or register an account
- Upon authentication, display a view of all Movies
- Upon clicking on a particular movie, users will be taken to a single movie view, where
  additional movie details will be displayed. The single movie view will contain the following additional features:
  - A button that when clicked takes a user to the ​director view,​ where details about the director of that particular movie will be displayed.
  - A button that when clicked takes a user to the ​genre view,​ where details about that particular genre of the movie will be displayed.

## Tech used

- Angular
- Angular Material
- TypeScript
- Typedoc
- Sccs
- Gh-pages

## Getting started

Download the project code or clone the repository. Once you have it, run in the terminal `npm install` to download all the dependencies. Once the dependencies are downloaded run `ng serve --open` script which will open the page at `http://localhost:4200/myFlix-Angular-client/welcome`.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Install Angular

Make sure you already have angular installed if not fallow the next steps:

1. Check if Angular is already installed on device

```bash
ng --version
```

2. If not, install Angular

```bash
npm install -g @angular/cli
```

### Create a new Angular project

1. Navigate to folder and create project

```bash
ng new my-project-name
```

2. Navigate to project folder to run project

```bash
ng serve --open
```

### Deploy application on github pages

1. If not done yet: Create github repository for application

2. In `angular.json` file change:
```bash
"options": {
  "baseHref": "/Repository-Name/",
  "outputPath": "docs/",
  ...
}
```
3. On the github.com page navigate to your repository by settings and then to pages. Change select branch to `master` and select folder to `/docs`.

4. To deploy the page run `ng build`

5. In docs folder go to `index.html` file  and add this code  below title:

``` bash
 <base href="/Repository-Name/"> 
```

### Add TypeDoc Documentation

1. Install typedoc (if not yet installed):

```bash
npm install typedoc
```

2. Create a `typedoc.json` file and add entryPoints.

3. Run typedoc to create documentation:

```bash
typedoc --entryPointStrategy expand ./src 
```

## Link
- App hosted on [github](https://wichofly.github.io/myFlix-Angular-client/)