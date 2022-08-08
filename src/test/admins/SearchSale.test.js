const Sale = require('../../models/salesDB')
require('../../BDConnection/connection')

describe('can be able to create a new sale', () => {
    before( async () => {
        await Sale.create({
            Codigo: '1654987',
            books: ['A prueba de fuego', 'El alfabeto alado'],
            fechaVenta: Date.now(),
            branch: 'Sucursal 5 y 10',
            total: 500
        })
        await Sale.create({
            Codigo: '1654987',
            books: ['Luna Miguel', 'Carrie'],
            fechaVenta: Date.now(),
            branch: 'Sucursal Plaza Rio',
            total: 500
        })
        await Sale.create({
            Codigo: '1654987',
            books: ['La vuelta al mundo en 80 dias', 'Star Wars. El despertar de la Fuerza'],
            fechaVenta: Date.now(),
            branch: 'Sucursal 5 y 10',
            total: 500
        })
    })
    it('must search a specific sales of one branch', async () => {

        console.log('------------------------------------------------------------------');
        console.log('-         MOSTRAR LAS VENTAS DE UNA SUCURSAL ESPECIFICA          -');
        console.log('------------------------------------------------------------------');

        const books = await Sale.find({branch: 'Sucursal 5 y 10'})
        console.log('Books -> ', books)
    })
    it("must validate if a branch wasn't found", () => {

        console.log('---------------------------------------------------------');
        console.log('-       VALIDAR SI LA SUCURSAL NO FUE ENCONTRADA        -');
        console.log('---------------------------------------------------------');

        const sale = Sale.find({branch: 'Sucursal Plaza Monarca'})
        if(sale.length !== 0) console.log('No hay ninguna sucursal con ese nombre')
    })
    it("must validate if a branch name was provided", async () => {

        console.log('----------------------------------------------------------------');
        console.log('-       VALIDAR SI NO SE PASO NINGUN NOMBRE DE SUCURSAL        -');
        console.log('----------------------------------------------------------------');

        branchName = ''
        if(branchName === '') console.log("Debes ingresar un nombre de sucursal! vuelve a intentarlo")

    })
    after(async () => {
        await Sale.deleteMany()
    })
})