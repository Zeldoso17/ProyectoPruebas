const assert = require('assert');
const branchOffice = require('../../models/branchOffice')

describe('Watch amount of books sold in a branch', () => {
    it('must show to how many books has been sold in a specific branch', () => {

        console.log('-------------------------------------------------------------------');
        console.log('-           CANTIDAD DE LIBROS VENDIDOS EN UNA SUCURSAL           -');
        console.log('-------------------------------------------------------------------');

        const amountOfBooksSold = branchOffice.filter(branch => branch.name === 'Sucursal Plaza Diamante')
        console.log(amountOfBooksSold)
    })
    it('must return a message if any branch was found', () => {

        console.log('-------------------------------------------------------------------');
        console.log('-        MENSAJE DE ERROR SI LA SUCURSAL NO FUE ENCONTRADA        -');
        console.log('-------------------------------------------------------------------');

        const amountOfBooksSold = branchOffice.filter(branch => branch.name === 'Sucursal Plaza Oro')
        if(amountOfBooksSold.length === 0) console.log('No se encontro ninguna susucrsal con ese nombre')

    })
    it('must return a message if any name of branch was provided', () => {
        console.log('--------------------------------------------------------------------');
        console.log('-           MENSAJE DE ERROR SI NO SE MANDO NINGUN TEXTO           -');
        console.log('--------------------------------------------------------------------');

        let brachName = ''
        if(brachName === '') console.log('Tienes que mandar el nombre de alguna sucursal')
    })
})