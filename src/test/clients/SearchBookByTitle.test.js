const Books = require('../../models/books')

describe('Search book by title', () => {
    it('it must to search a book by its title', () => {
        console.log('--------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR TITULO                 -');
        console.log('--------------------------------------------------------');

        Books.books.map(book => {
            if(book.title === 'La vuelta al mundo en 80 dias')
                console.log(book)
        });
    })
    it("must validate if doesn't exist a book with that title", () => {
        console.log('-------------------------------------------------------------------------');
        console.log('-             VALIDAR SI NO EXISTE UN LIBRO CON ESE TITULO              -');
        console.log('-------------------------------------------------------------------------');

        Books.map(book => {
            if(book.title === 'La vida es bella')
                console.log('No se encontro ninguna coincidencia')
        })
    })
})