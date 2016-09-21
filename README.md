# N26ATM

N26 ATM Challenge, see this repository result at https://onzag.github.io/N26ATM

The documentation is avaliable at https://onzag.github.io/N26ATM/docs

## Requeriments
For this project you need an up to date `Node.js` as well as to have `webpack` installed, webpack is a module bundler for the next generation web, it resides at `https://webpack.github.io/`

To install it (after having `Node.js` and `npm`) you should run `npm install -g webpack`

To generate the documentation you need `esdoc` installed so you should run `npm install -g esdoc`

## How to develop

Modify the contents of the folder `src` as you wish in order to modify the application details.

run `npm run server` to start a local development server at port `3000`.

generate the source code with `webpack` (development only).

## How to generate the final result.

You can utilize commands `npm run generate-production` which is roughtly equivalent to have the `NODE_ENV` variable set to production.

This will generate an `app/app.js` file that is optimized for production purposes.

## What to deploy.

For the browser the result is standalone, and only the folders `img` `app` and the file `index.html` are required for the application, all other files can be ignored in order to deploy into a
static server. For the reasons of this test, on github just generating the application makes it run on your github `http(s)://<username>.github.io/<projectname>` in the case of this specific project
it is `https://onzag.github.io/N26ATM`

## Generate documentation

The documentation is generated using esdoc in order to do so run `npm run docs` the documentation is avaliable under the `docs` directory.
