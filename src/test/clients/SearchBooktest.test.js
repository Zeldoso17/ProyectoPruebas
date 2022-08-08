const assert = require('assert');
const Books = require('../../models/books')
require('../../BDConnection/connection');

describe('Clients Search', () => {
    it('it must to search a book by its title', () => {
        console.log('--------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR TITULO                 -');
        console.log('--------------------------------------------------------');
        Books.books.map(book => {
            if(book.title === 'La vuelta al mundo en 80 dias')
                console.log(book)
        });
    })
    it('it must to search a book by its author', () => {
        console.log('--------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR AUTOR                  -');
        console.log('--------------------------------------------------------');
        Books.books.map(book => {
            if(book.author === 'Alan Dean Foster')
                console.log(book)
        })
    })
    it('it must to search a book by its category', () => {
        console.log('--------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR CATEGORIA              -');
        console.log('--------------------------------------------------------');
        Books.books.map(book => {
            if(book.category === 'Tragedia')
                console.log(book)
        })
    })
    it('it must to search a book by its title, author and category', () => {
        console.log('--------------------------------------------------------');
        console.log('-      BUSCAR LIBRO POR TITULO, AUTOR Y CATEGORIA      -');
        console.log('--------------------------------------------------------');
        Books.books.map(book => {
            if(book.title === 'Romeo y Julieta' && book.author === 'William Shakespeare' && book.category === 'Tragedia')
                console.log(book)
        })
    })
    it("it must to return an error if the book wasn't found", () => {
        console.log('--------------------------------------------------------');
        console.log('-      MENSAJE CUANDO NO SE ENCUENTRA UN LIBRO         -');
        console.log('--------------------------------------------------------');
        
        Books.books.map(book => {
            if(book.title === 'La vida es bella'){
                flag = true
            }
        })
        if(!flag) console.log('No se encontraron resultados para ese libro')
    })
})