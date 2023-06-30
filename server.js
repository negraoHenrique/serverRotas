const express = require('express');
const routes = require('./src/controllers/routes');

const app = express();
app.use(routes);

app.listen(3344, ()=>{
    console.log('Servidor ON para 3344');
});