const Book = require('../../models/booksBD')
require('../../BDConnection/connection');

describe('Search book by author', () => {
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
        await Book.create({
            'ISBN': '0-4567-1659-5',
            'title': 'Desierto sonoro',
            'author': 'Valeria Luiselli',
            'category': 'Aventura',
            'stock': 24
        })
        await Book.create({
            'ISBN': '0-9458-1349-2',
            'title': 'Carrie',
            'author': 'Stephen King',
            'category': 'Terror',
            'stock': 26
        })
    })
    it('it must to search a book by its title', async () => {
        console.log('-------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR AUTOR                 -');
        console.log('-------------------------------------------------------');

        const book = await Book.find({author: 'William Shakespeare'})
        console.log('Book -> ', book);
        
    })
    it("must validate if doesn't exist a book with that title", async () => {
        console.log('------------------------------------------------------------------------');
        console.log('-             VALIDAR SI NO EXISTE UN LIBRO CON ESE AUTOR              -');
        console.log('------------------------------------------------------------------------');

        const book = await Book.find({author: 'Juan Lopez'})
        if(book.length === 0) console.log('No hay ningún libro con ese autor')

    })
    after(async () => {
        await Book.deleteMany()
    })
})