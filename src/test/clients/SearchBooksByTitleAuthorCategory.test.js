const Books = require('../../models/books')

describe('Search book by title, author and category', () => {
    it('it must to search a book by its title, author and category', () => {
        console.log('--------------------------------------------------------');
        console.log('-      BUSCAR LIBRO POR TITULO, AUTOR Y CATEGORIA      -');
        console.log('--------------------------------------------------------');
        Books.books.map(book => {
            if(book.title === 'Romeo y Julieta' && book.author === 'William Shakespeare' && book.category === 'Tragedia')
                console.log(book)
        })
    })
    it("must validate if doesn't exist a book with that title", async () => {
        console.log('----------------------------------------------------------------------------------------');
        console.log('-             VALIDAR SI NO EXISTE UN LIBRO POR TITULO, AUTOR Y CATEGORIA              -');
        console.log('----------------------------------------------------------------------------------------');

        Books.books.map(book => {
            if(book.title === 'Romeo y Julieta' && book.author === 'Adan Walker' && book.category === 'Amor')
                console.log(book)
        })
    })
})