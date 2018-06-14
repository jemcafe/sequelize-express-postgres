## Sequelize with express and postgres

Using Sequelize to connect to a postgres database with Express.

### Prerequisites

You will need to have a sufficient version of [node.js](https://nodejs.org/en/) and [npm](https://nodejs.org/en/) (or [yarn](https://yarnpkg.com/lang/en/)).

### Getting Started

Create the package.json file.
```
$ npm init
```
or
```
yarn init
```
Create without questions:
```
npm init -y
```


### Install

* express
* body-parser
* sequelize
* pg (node-postgres)
* dotenv
```
$ npm install express body-parser sequelize pg dotenv
```
or
```
$ yarn add express body-parser sequelize pg dotenv
```

### Express

Create index.js file.
```
/my-app
   /node_modules
   index.js
   package.json
   README.md
   yarn.lock
```

In `index.js`, import express and body-parser, then invoke express in a new variable called `app`.
```
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
```

`app` will use body-parser to parse json request bodies.
```
app.use( bodyParser.json() );
```

`app` can start listening. The port doesn't have to be 3030.
```
const port = 3030
app.listen(port, () => {
   console.log('Listening on port: ' + port)
});
```

...README in progress