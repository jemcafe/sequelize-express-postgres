const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3040;
app.listen(port, () => console.log(`Listening on port: ${port}`));