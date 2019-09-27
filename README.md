# EventViewerWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Editing the code

You can choose any code editor to work with this project. Or you can use the Visual Studio Code workspace committed in this repo: `vscode.code-workspace`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Docker build/run

1. Open terminal and navigate to project directory, then run: `ng build --prod`
2. Run docker build command: `docker build -t event-viewer-web -f Dockerfile_ev_web .`
3. Once the Docker build completes (might take a few minutes due to downloading dependencies etc.), you can run the container using `docker run -p 3000:80 event-viewer-web`
4. You can then browse the application through <http://localhost:3000>

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
