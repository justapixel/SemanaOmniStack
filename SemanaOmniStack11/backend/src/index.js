const exppress = require('express');
const cors = requite('cors');
const routes = require('./routes');

const app = exppress();

app.use(cors())
app.use(exppress.json());
app.use(routes);

app.listen(3333);