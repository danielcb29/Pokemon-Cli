# PokemonCli

This project was developed for PSL Company Test. It request and show pokemons from pokeapi.co API. 

## By 

Daniel Correa Barrios 

Universidad del Valle 

## Deploy URL

https://danielcb29.github.io/Pokemon-Cli/

## Implementation

This project implements 6 components: 
* App Component: Main component
* Header Component: Header of the web site, banner, menu , title
* Pokemon Component: Control pokemons requests and visualization
* Footer Component: Footer of the web site. 
* AboutMe Component: Information about Daniel 
* NotFound Component: Control otherwise url and 404 endpoints 

1 Service: 
*  Pokemon Service: Make pokemons requests and format image urls 

1 Pipe:
* Capitalize Pipe: Capitalize the first letter of text. Is used to capitalize pokemons name. 

Routing: Control navigation in web site. 

### Technologies

* Angular JS 2.0
* Bootstrap 3.3.3

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.


## Development server (Run it locally)

* Install npm dependencies runing `npm install`. 
* Install [angular-cli](https://github.com/angular/angular-cli)  `npm install -g angular-cli`
* Run `ng serve` or `npm start` for a dev server. 
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
