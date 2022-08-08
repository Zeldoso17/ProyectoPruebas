let branches = [
    {
        name: 'Sucursal 5 y 10',
        location: {
            type: 'Point',
            coordinates: [-116.96501930404696, 32.49776180838552],
            city: 'Tijuana'
        },
        books: ['La vuelta al mundo en 80 dias', 'Romeo y Julieta'],
        booksSold: 10
    },
    {
        name: 'Sucursal papalote',
        location: {
            type: 'Point',
            coordinates: [-116.93269667189696, 32.49716351098394],
        },
        city: 'Tijuana',
        books: ['Romeo y Julieta', 'Carrie', 'Drácula', 'La memoria donde ardía'],
        booksSold: 5
    },
    {
        name: 'Sucursal Plaza Rio',
        location: {
            type: 'Point',
            coordinates: [-117.014576, 32.521506],
        },
        city: 'Tijuana',
        books: ['A prueba de fuego', 'El alfabeto alado', 'La memoria donde ardía'],
        booksSold: 15
    },
    {
        name: 'Sucursal Plaza Diamante',
        location: {
            type: 'Point',
            coordinates: [-99.13748255781054, 19.433565687795333],
        },
        city: 'CDMX',
        books: ['A prueba de fuego', 'El alfabeto alado', 'La memoria donde ardía'],
        booksSold: 8
    }
]

module.exports = branches