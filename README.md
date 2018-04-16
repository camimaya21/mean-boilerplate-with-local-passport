# MEAN - BoilerPlate with Local Passport Authentication

This project pretends to be use as initial boilerplate for a MEAN WebApp (MongoDB, ExpressJS, Angular4^, NodeJS).

## Server

First you need to install [Node](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/).
Then Run `npm install` into the server folder.

###Development server

Run `npm run dev` for a dev server that includes nodemon and Debug. Navigate to or use this url in order to call the API REST `http://localhost:3000`.

If you are **working on Windows**, you have to change the script.dev in the package.json in order to DEBUG works:
```
"scripts": {
    "start": "node ./bin/www",
    "dev": "set DEBUG=server:* & nodemon ./bin/www"
  }
```

If you're **working on Linux or MAC OS**, define the follow in the script.dev of the package.json:
```
"scripts": {
    "start": "node ./bin/www",
    "dev": "DEBUG=server:* nodemon ./bin/www"
  }
```

## Client

The client part of the project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

First of all Run `npm install` into the client folder.

### Development server

Run `ng serve` for a dev server in the client folder. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory of the serve folder. Use the `-prod` flag for a production build.

**Created with <3 by @camimaya21**
