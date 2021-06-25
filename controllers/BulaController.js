const bulario = require('bulario');
const { AppError } = require('../helpers/AppError');

const buscar = async(nome, pagina = 1) => {
    try {
        const result = await bulario.pesquisar(nome, pagina)
        return result;
    } catch (error) {
        throw new AppError(error)
    }
};

const getByNum = async(numProcesso) => {
    try {
        const result = await bulario.getMedicamento(numProcesso)
        return result;
    } catch (error) {
        throw new AppError(error)
    }
};

const listaCategorias = async() => {
    try {
        const result = await bulario.getCategoria()
        return result;
    } catch (error) {
        throw new AppError(error)
    }
};

const getByCat = async(idCategoria) => {
    try {
        const result = await bulario.getMedicamentosPorCategoria(idCategoria)
        return result;
    } catch (error) {
        throw new AppError(error)
    }
};


const getLink = async(idBula) => {
    return `https://consultas.anvisa.gov.br/api/consulta/medicamentos/arquivo/bula/parecer/${idBula}/?Authorization=`

};


module.exports = { buscar, getByNum, listaCategorias, getByCat, getLink };