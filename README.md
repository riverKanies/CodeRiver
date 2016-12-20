# Thrive Marketing Site

[![CircleCI](https://circleci.com/gh/spartansystems/thrive-marketing/tree/master.svg?style=svg&circle-token=2c246cc4762c9c906be9a4df6a9617388ce6c682)](https://circleci.com/gh/spartansystems/thrive-marketing/tree/master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/781f339d8db24526893414ffbdeccdcf)](https://www.codacy.com/app/Spartan/thrive-marketing/dashboard)
[![Codacy Badge Coverage](https://api.codacy.com/project/badge/Coverage/781f339d8db24526893414ffbdeccdcf)](https://www.codacy.com/app/Spartan/thrive-marketing/dashboard)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Table of Contents
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Development](#development)
  1. [Developer Tools](#developer-tools)
  1. [Routing](#routing)
1. [Testing](#testing)
1. [Deployment](#deployment)
    1. [Static Deployments With Surge](#static-deployments)
1. [Production Optimization](#production-optimization)
1. [Build System](#build-system)
  1. [Configuration](#configuration)
  1. [Root Resolve](#root-resolve)
  1. [Globals](#globals)
  1. [Styles](#styles)
  1. [Server](#server)
1. [Learning Resources](#learning-resources)
1. [Contributing](#contributing)

## Requirements
* node `^6.7.0`
* npm `^3.10.6`
* want to run Nightmare feature tests using selenium? You'll need the JDK. Try here:
 http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html


## Getting Started

After confirming that your development environment meets the specified
[requirements](#requirements), you can follow these steps to get the project up
and running:

```bash
$ git clone https://github.com/spartansystems/thrive-marketing.git
$ cd thrive-marketing
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

If everything works, you should see the following:

<img src="http://i.imgur.com/zR7VRG6.png?2" />

While developing, you will probably rely mostly on `npm start`; however, there
are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`clean:project`|Runs `npm prune` && `npm cache clear` && `npm install`.|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`codecov`|Generates code coverage info via [codecov.io](https://www.npmjs.com/package/codecov.io).|
|`test`|Runs unit & feature tests with Jest.|
|`test:features`|Runs just feature tests with Jest and Nightmare.|
|`test:specs`|Runs just unit tests with Jest.|
|`test:configs`|Generates the Jest test config files for unit and feature testing.|
|`test:watch`|Runs the Jest spec tests and watches files for changes to rerun tests.|
|`deploy:staging`|Compiles assets and deploys to staging env via Surge.|
|`deploy:prod`|Same as `deploy:staging` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|
|`storybook:start`|Starts a storybook on the specified local port|
|`storybook:build`|Builds a static storybook to `.storybook-static`|
|`debug:dev`|Start the app in dev mode with full debugging output in the console|
|`debug:prod`|Start the app in prod mode with full debugging output in the console|

## Development

#### Developer Tools

Make sure you install the [React DevTools Chrome
Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).

### Routing
We use `react-router` [plain route
definitions](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute)
(`<route>/index.js`) to define units of logic within our application. See the
[application structure](#application-structure) section for more information.

## Testing
### Unit Tests
You can run just the unit tests via `npm run test:specs` or you can watch them
via `npm run test:watch`. To add a unit test, simply create a `.spec.js` file in
your component or module directory. Jest will pick up on these files
automatically. Enzyme is supported as well so long as you import . If you are
using `redux-cli`, test files should automatically be generated when you create
a component or redux module.

### Feature Tests
To run feature tests, run `npm run test:feature` and it will trigger the
Nightwatch feature spec runner.

## Deployment

The client application is currently hosted on heroku, backed by an express
server with caching managed by cloudflare. In order to deploy a new feature to
stage do the following:

* submit a pull request to master with the updated application code and a good
  description of what you did
* have circle validate your build
* get an approval from someone else on the thrive team
* merge your branch into master

Once branches are merged to master, they are auto-deployed to
[staging](https://thrive-marketing-stage.herokuapp.com)

In order to deploy to production, manually deploy the master branch to through
the heroku GUI for the app: https://thrive-marketing.herokuapp.com

## Build System

### Configuration

Default project configuration can be found in `~/config/index.js`. Here you'll
be able to redefine your `src` and `dist` directories, adjust compilation
settings, tweak your vendor dependencies, and more. For the most part, you
should be able to make changes in here **without ever having to touch the actual
webpack build configuration**.

If you need environment-specific overrides (useful for dynamically setting API
endpoints, for example), you can edit `~/config/environments.js` and define
overrides on a per-NODE_ENV basis. There are examples for both `development` and
`production`, so use those as guidelines. Here are some common configuration
options:

|Key|Description|
|---|-----------|
|`dir_src`|application source code base path|
|`dir_dist`|path to build compiled application to|
|`server_host`|hostname for the Express server|
|`server_port`|port for the Express server|
|`compiler_devtool`|what type of source-maps to generate (set to `false`/`null` to disable)|
|`compiler_vendor`|packages to separate into to the vendor bundle|

Certain variables should be provided via an `.env` file. Please see
`.env.sample` for those that can currently be set. If you add more variables to
`.env` and want to reference them in the application code via
`process.env.VARIABLE`, you will need to add it to the `Environments` webpack
plugin commons list in `build/webpack.plugins.js`.

```bash
# example .env file, contains default environment variables
PROTOCOL=http
HOST=localhost
PORT=3000
API_PROTOCOL=http
API_HOST=localhost
API_PORT=3333
```

### Root Resolve
Webpack is configured to make use of
[resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root),
which lets you import local packages as if you were traversing from the root of
your `~/universal` directory. Here's an example:

```js
// current file: ~/universal/views/some/nested/View.js
// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### Globals

These are global variables available to you anywhere in your source code. If you
wish to modify them, they can be found as the `globals` key in
`~/config/index.js`. When adding new globals, make sure you also add them to
`~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|
|`__TEST__`|True when `process.env.NODE_ENV` is `test`|
|`__DEBUG__`|True when `process.env.NODE_ENV` is `development` and cli arg `--no_debug` is not set (`npm run dev:no-debug`)|
|`__PROTOCOL__`|True when `process.env.PROTOCOL` is defined|
|`__HOST__`|True when `process.env.HOST` is defined|
|`__PORT__`|True when `process.env.PORT` is defined|
|`__API_PORT__`|True when `process.env.API_PORT` is defined|
|`__API_PROTOCOL__`|True when `process.env.API_PROTOCOL` is defined|
|`__API_HOST__`|True when `process.env.API_HOST` is defined|


### Styles

`.css` file extensions are supported out of the box and are configured to use
[CSS Modules](https://github.com/css-modules/css-modules). After being imported,
styles will be processed with [PostCSS](https://github.com/postcss/postcss) for
minification and autoprefixing, and will be extracted to a `.css` file during
production builds.

#### Configured PostCSS Plugins
* [stylelint](https://github.com/stylelint/stylelint) - CSS linting via [default
  community
standards](https://github.com/stylelint/stylelint-config-standard/blob/master/index.js)
* [cssNext](http://cssnext.io/) - Like Babel but for new CSS specs.
* [precss](https://github.com/jonathantneal/precss) - Allows you to use
  SASS-like syntax in CSS files.
* [lost](https://github.com/peterramsing/lost) - A lightweight and extremely
  powerful grid system.
* [fontMagician](https://github.com/jonathantneal/postcss-font-magician) -
  Creates all `@font-face` rules automagically.
* [browserReporter](https://github.com/postcss/postcss-browser-reporter) - Like
  Redbox but for CSS. It overlays CSS errors at the top of the browser window so
you don't have to constantly check the console to see if something is broken.

You can browser additional plugins at [postcss.parts](http://postcss.parts/)

### Server

This app comes packaged with an Express server. It's important to note that the
sole purpose of this server is to provide `webpack-dev-middleware` and
`webpack-hot-middleware` for hot module replacement. Using a custom Express app
in place of [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
makes it easier to extend the starter kit to include functionality such as
API's, universal rendering, and more -- all without bloating the base
boilerplate.

### Production Optimization

Babel is configured to use
[babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime)
so transforms aren't inlined.

In production, webpack will extract styles to a `.css` file, minify your
JavaScript, and perform additional optimizations such as module deduplication.

## Learning Resources

* [Starting out with
  react-redux-starter-kit](https://suspicious.website/2016/04/29/starting-out-with-react-redux-starter-kit/)
is an introduction to the components used in this starter kit with a small
example in the end.


## Contributing

Please review the [contributing guidelines](/.github/CONTRIBUTING.md)


## Thanks

This project wouldn't be without the awesome work Dave and the other
contributors have done on
[react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit/).
