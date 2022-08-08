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
    })
    it('must create a new sale in the database', async () => {

        console.log('------------------------------------------------');
        console.log('-          REGISTRAR UNA NUEVA VENTA           -');
        console.log('------------------------------------------------');

        await Sale.create({
            Codigo: '1654987',
            books: ['La vuelta al mundo en 80 dias', 'Star Wars. El despertar de la Fuerza'],
            fechaVenta: Date.now(),
            branch: 'Sucursal 5 y 10',
            total: 500
        })

        const books = await Sale.find()
        console.log('Books -> ', books)
        console.log('Venta registrada con exito')
    })
    it("must validate if there's already a sale with a sell code", () => {

        console.log('------------------------------------------------');
        console.log('-        VALIDAR SI UNA VENTA YA EXISTE        -');
        console.log('------------------------------------------------');

        const sale = Sale.find({Codigo: '1654987'})
        if(sale.length !== 0) console.log('Ya existe una venta con ese código!, intenta con uno nuevo')
    })
    after(async () => {
        await Sale.deleteMany()
    })
})