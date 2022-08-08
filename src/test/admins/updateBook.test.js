const assert = require('assert')
const Book = require('../../models/booksBD')
require('../../BDConnection/connection')

describe('Update books', () => {
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
    it('must update a book in the database', async () => {

        console.log('--------------------------------------------------------');
        console.log('-               ACTUALIZAR UN LIBRO                    -');
        console.log('--------------------------------------------------------');

        await Book.updateOne({ title: 'Star Wars. El despertar de la Fuerza' }, { $set: { title: 'Star Wars: The Force Awakens' }})
        const book = await Book.findOne({ title: 'Star Wars: The Force Awakens' })

        console.log('Book -> ', book);
        console.log('libro actualizado exitosamente');
    })
    after(async () => {
        await Book.deleteMany()
    })
})