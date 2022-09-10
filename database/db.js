import {products} from './data'

function random() {
    new Promise((resolve, reject) => {
        const max = 350
        const min = 100
        const delay = Math.floor(Math.random() * (max - min + 1)) + min
    
        setTimeout(resolve, delay)
    })
}

class Database {

    async getAll() {
        const asArray = Object.values(products)
        await random()
        return asArray
    }

    async getById(id) {
        if(!Object.prototype.hasOwnProperty.call(products, id)) return null

        const entry = products[id]
        await random()
        return entry
    }
}

// funcion constructora
// function Person(name) {
//     this.name = name
// }

// const fer = new Person('Fernanda')

export default Database