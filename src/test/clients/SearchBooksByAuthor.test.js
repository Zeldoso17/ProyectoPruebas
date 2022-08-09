const Books = require('../../models/books')

describe('Search book by title', () => {
    it('it must to search a book by its author', () => {
        console.log('--------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR AUTOR                  -');
        console.log('--------------------------------------------------------');

        Books.books.map(book => {
            if(book.author === 'Alan Dean Foster')
                console.log(book)
        })
    })
    it("must validate if doesn't exist a book with that title", async () => {
        console.log('-------------------------------------------------------------------------');
        console.log('-             VALIDAR SI NO EXISTE UN LIBRO CON ESE AUTOR               -');
        console.log('-------------------------------------------------------------------------');

        Books.map(book => {
            if(book.author === 'Jose Lopez')
                console.log('No se encontro ninguna coincidencia')
        })
    })
})