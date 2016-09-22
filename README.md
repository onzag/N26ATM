# N26ATM

N26 ATM Challenge, see this repository result at https://onzag.github.io/N26ATM

The documentation is avaliable at https://onzag.github.io/N26ATM/docs

Github pages can be caching, if there's missing functionability be aware of caching.

## Description

1. You have only 3 attempts to introduce the right PIN.
2. The right pin is 1234.
3. The ATM contains an static amount of money for your user, it doesn't matter how much you withdraw; it always contains 1200 EUR as funds, if you set a bigger value (but less or equal to 2000) it will abort as a funds error.
4. Your user has a limit of 2000 per transaction, this limits superseeds the the funds limit, that means this error takes priority, if you set an amount bigger than 2000 it'll abort as a limit error.
5. The version at https://onzag.github.io/N26ATM is a development version, and you can use the dev tools to see the redux logger in action and how the state of the application changes, the log messages
will appear in the console as you interact with it.

## Details 

1. The documentation is autogenerated with esdoc, and the coverage is 100%;
2. The app is written in ES6 with some ES7 features.
3. It uses the redux paradigm with some MVC flavour.
4. It is highly modular, every module does a little thing.
5. It was developed on iterations.

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
