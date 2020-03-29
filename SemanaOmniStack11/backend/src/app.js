const exppress = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = exppress();

app.use(cors())
app.use(exppress.json());
app.use(routes);
app.use(errors());

module.exports = app;
