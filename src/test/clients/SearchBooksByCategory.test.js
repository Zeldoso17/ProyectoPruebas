const Books = require('../../models/books')

describe('Search book by category', () => {
    it('it must to search a book by its category', () => {
        console.log('--------------------------------------------------------');
        console.log('-              BUSCAR LIBRO POR CATEGORIA              -');
        console.log('--------------------------------------------------------');
        Books.books.map(book => {
            if(book.category === 'Tragedia')
                console.log(book)
        })
    })
    it("must validate if doesn't exist a book with that title", async () => {
        console.log('-----------------------------------------------------------------------------');
        console.log('-             VALIDAR SI NO EXISTE UN LIBRO CON ESA CATEGORIA               -');
        console.log('-----------------------------------------------------------------------------');

        Books.map(book => {
            if(book.category === 'Belico')
                console.log('No se encontro ninguna coincidencia')
        })
    })
})