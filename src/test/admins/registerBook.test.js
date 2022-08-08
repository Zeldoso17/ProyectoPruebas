const assert = require('assert')
const Book = require('../../models/booksBD')
require('../../BDConnection/connection')

describe('Register books', () => {
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
    })
    it('must register a book in the database', async () => {
        
        console.log('------------------------------------------------');
        console.log('-           REGISTRAR UN NUEVO LIBRO           -');
        console.log('------------------------------------------------');

        await Book.create({
            'ISBN': '0-9754-1498-2',
            'title': 'Star Wars. El despertar de la Fuerza',
            'author': 'Alan Dean Foster',
            'category': 'Ciencia Ficcion',
            'stock': 7
        })
        const books = await Book.find()

        console.log('Books -> ', books);
        console.log('libro creado exitosamente');

    })
    it('must return a message if the book is already created', async () => {
        console.log('--------------------------------------------------------');
        console.log('-            VALIDAR SI EL LIBRO YA EXISTE             -');
        console.log('--------------------------------------------------------');

        res = await Book.find({ title: 'Romeo y Julieta' })
        if(res.length !== 0) console.log('Ese libro ya esta registrado, puedes modificar el stock del libro')

    })
    after(async () => {
        await Book.deleteMany()
    })
})