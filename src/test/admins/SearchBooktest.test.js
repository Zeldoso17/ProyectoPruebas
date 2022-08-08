const assert = require('assert');
const Book = require('../../models/booksBD')
require('../../BDConnection/connection');

describe('Admin Search', () => {
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
    it('it must to search a book by its ISBN', async () => {
        console.log('--------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR ISBN                   -');
        console.log('--------------------------------------------------------');

        const book = await Book.find({ISBN: '0-9458-1349-2'})
        console.log('Book -> ', book);

    })
    it('it must to search a book by its title', async () => {
        console.log('--------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR TITULO                 -');
        console.log('--------------------------------------------------------');

        const book = await Book.find({title: 'Desierto sonoro'})
        console.log('Book -> ', book);
        
    })
    it('it must to search a book by its author', async () => {
        console.log('--------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR AUTOR                  -');
        console.log('--------------------------------------------------------');
        const book = await Book.find({author: 'Julio Verne'})
        console.log('Book -> ', book);

    })
    it('it must to search a book by its category', async () => {
        console.log('--------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR CATEGORIA              -');
        console.log('--------------------------------------------------------');

        const book = await Book.find({category: 'Tragedia'})
        console.log('Book -> ', book);

    })
    it('it must to search a book by its title, author and category', async () => {
        console.log('--------------------------------------------------------');
        console.log('-      BUSCAR LIBRO POR TITULO, AUTOR Y CATEGORIA      -');
        console.log('--------------------------------------------------------');

        const book = await Book.find({title: 'Romeo y Julieta', author: 'William Shakespeare', category: 'Tragedia'})
        console.log('Book -> ', book);

    })
    it("it must to return an error if the book wasn't found", async () => {
        console.log('--------------------------------------------------------');
        console.log('-      MENSAJE CUANDO NO SE ENCUENTRA UN LIBRO         -');
        console.log('--------------------------------------------------------');
        
        const book = Book.findOne({title: 'La vida es bella'}).exec()
        if(book) console.log('No se encontraron resultados')
    })
    after(async () => {
        await Book.deleteMany()
    })
})