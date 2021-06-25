const { Router } = require('express');
const bula = require('./bula.route');

const routes = Router();

routes.use('/', bula);


// Middleware para padronização de erros
routes.use((error, req, res, next) => {
    let code = error.status || 400
    var message;
    if (typeof error == 'string' || error instanceof String)
        message = error
    else
        message = error.error
    return res.status(code).json({ message, stack: error });
});



module.exports = routes;