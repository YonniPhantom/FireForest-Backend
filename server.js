const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
require('./db.js');

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());  // Usar el middleware cors

const ApiRouter = require('./src/routes/api.routes.js');

app.use('/api', ApiRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
});
