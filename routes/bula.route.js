const { Router } = require('express');
const { AppError } = require('../helpers/AppError');
const BulaController = require("../controllers/BulaController")

const routes = Router();

routes.get('/medicamento/:numProcesso', async (req, res, next) => {
    try {
        const numProcesso = req.params.numProcesso;
        const bula = await BulaController.getByNum(numProcesso)
        return res.status(200).json(bula);
    } catch (error) {
        next(new AppError("Medicamento não encontrado", 404))
    }
});

routes.get('/pesquisar', async (req, res, next) => {

    try {
        const nome = req.query.nome;
        const pagina = req.query.pagina || 1;
        const bula = await BulaController.buscar(nome, pagina)
        return res.status(200).json(bula);
    } catch (error) {
        next(new AppError(error))
    }
});

routes.get('/pesquisar/v2', async (req, res, next) => {

    try {
        const nome = req.query.nome;
        const pagina = req.query.pagina || 1;
        const count = req.query.counte || 4;
        const bula = await BulaController.buscarV2(nome, pagina, count)
        return res.status(200).json(bula);
    } catch (error) {
        next(new AppError(error))
    }
});

routes.post('/filtrar', async (req, res, next) => {

    try {
        const filtro = req.body;
        const pagina = req.query.pagina || 1;

        const bula = await BulaController.filtrar(filtro, pagina)
        return res.status(200).json(bula);
    } catch (error) {
        next(new AppError(error))
    }
});

routes.get('/categorias', async (req, res, next) => {
    try {
        const listaCategorias = await BulaController.listaCategorias()
        return res.status(200).json({ categorias: listaCategorias });
    } catch (error) {
        next(new AppError(error))
    }
});

routes.get('/medicamentos', async (req, res, next) => {
    try {
        const { categoria, pagina } = req.query;

        const result = await BulaController.getByCat(categoria, pagina)
        return res.status(200).json(result);
    } catch (error) {
        next(new AppError(error))
    }
});


routes.get('/bula', async (req, res, next) => {
    try {
        const id = req.query.id;
        const fileUrl = await BulaController.getLink(id)
        res.status(200).json({ pdf: fileUrl })
    } catch (error) {
        next(new AppError(error))
    }
});

routes.get('/pdf', async (req, res, next) => {
    try {
        const id = req.query.id;
        const file = await BulaController.getPdf(id);
        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader('Content-Disposition', 'inline;filename=bula.pdf')
        res.send(file);
    } catch (error) {
        next(new AppError(error))
    }
});

module.exports = routes;