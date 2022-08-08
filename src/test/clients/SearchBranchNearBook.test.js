const assert = require('assert')
const Branches = require('../../models/branchOfficeBD')
require('../../BDConnection/connection')

describe('Find a branch near where is available a book', () => {
    before(async () => {
        await Branches.create({
            name: 'Sucursal 5 y 10',
            location: {
                type: 'Point',
                coordinates: [-116.96501930404696, 32.49776180838552],
                city: 'Tijuana'
            },
            books: ['La vuelta al mundo en 80 dias', 'Romeo y Julieta']
        })
        await Branches.create({
            name: 'Sucursal papalote',
            location: {
                type: 'Point',
                coordinates: [-116.93269667189696, 32.49716351098394],
            },
            city: 'Tijuana',
            books: ['Romeo y Julieta', 'Carrie', 'Drácula', 'La memoria donde ardía']
        })
        await Branches.create({
            name: 'Sucursal Plaza Rio',
            location: {
                type: 'Point',
                coordinates: [-117.014576, 32.521506],
            },
            city: 'Tijuana',
            books: ['A prueba de fuego', 'El alfabeto alado', 'La memoria donde ardía']
        })
        await Branches.create({
            name: 'Sucursal Plaza Diamante',
            location: {
                type: 'Point',
                coordinates: [-99.13748255781054, 19.433565687795333],
            },
            city: 'CDMX',
            books: ['A prueba de fuego', 'El alfabeto alado', 'La memoria donde ardía']
        })
    })
    it('it must find a branch where the book client wants is available ', async () => {
        console.log('-------------------------------------------------------------------');
        console.log('-              SUCURSAL/ES DONDE ESTA EL LIBRO                    -');
        console.log('-------------------------------------------------------------------');

        query = [{
            '$geoNear': {
                'near': [-116.9289159895533, 32.499972623499154],
                'distanceField': 'distance',
                'maxDistance': 2000,
                'distanceMultiplier': 6371,
                'spherical': true
            }
        }]

        geoloc = await Branches.aggregate(query)
        res = await Branches.find({ $and: [{ books: { $all: ['El alfabeto alado'] } }, { city: 'CDMX' }] })
        console.log('Books -> ', res)
    })
    it("it must to return an error if the book isn't in anything branch", async () => {
        console.log('-------------------------------------------------------------------');
        console.log('-   MENSAJE CUANDO NO SE ENCUENTRA UN LIBRO EN NINGUNA SUCURSAL   -');
        console.log('-------------------------------------------------------------------');

        query = [{
            '$geoNear': {
                'near': [-116.9289159895533, 32.499972623499154],
                'distanceField': 'distance',
                'maxDistance': 1,
                'distanceMultiplier': 6371,
                'spherical': true
            }
        }]

        geoloc = await Branches.aggregate(query)
        res = await Branches.find({ $and: [{ books: { $all: ['La vida es bella'] }},  {city: 'Tijuana'}]})
        if (res.length === 0) console.log('El libro que buscabas no fue encontrado en ninguna sucursal')
    })
    after(async () => {
        await Branches.deleteMany()
    })
})