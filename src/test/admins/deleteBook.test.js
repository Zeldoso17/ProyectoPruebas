const assert = require('assert')
const Book = require('../../models/booksBD')
require('../../BDConnection/connection')

describe('Delete books', () => {
    before(async () => {
        await Book.create({
            'ISBN': '0-4567-1659-5',
            'title': 'La vuelta al mundo en 80 dias',
            'author': 'Julio Verne',
            'category': 'Ficción de aventuras',
            'stock': 10
        })
        await Book.create({
            'ISBN': '0-1654-1098-1',
            'title': 'Romeo y Julieta',
            'author': 'William Shakespeare',
            'category': 'Tragedia',
            'stock': 13
        })
        await Book.create({
            'ISBN': '0-9754-1498-2',
            'title': 'Star Wars. El despertar de la Fuerza',
            'author': 'Alan Dean Foster',
            'category': 'Ciencia Ficcion',
            'stock': 7
        })
    })
    it('must delete a book in the database', async () => {

        console.log('--------------------------------------------------------');
        console.log('-                ELIMINAR UN LIBRO                     -');
        console.log('--------------------------------------------------------');

        await Book.updateOne({title: 'Star Wars. El despertar de la Fuerza'}, {$set: { stock: 0 }})
        const books = await Book.find({stock: {$gte:1}}) 

        console.log('Book -> ', books);
        console.log('libro eliminado exitosamente');
    })
    it("must return a message if the book doesn't exist", async () => {
        console.log('--------------------------------------------------------');
        console.log('-            VALIDAR SI EL LIBRO NO EXISTE             -');
        console.log('--------------------------------------------------------');

        res = await Book.find({ title: 'La vida es bella' })
        if(res.length === 0) console.log('Ese libro no ha sido registrado!, intenta con uno que ya haya sido registrado')

    })
    after(async () => {
        await Book.deleteMany()
    })
})