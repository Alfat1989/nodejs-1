const productsOperations = require('./products')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const needId = 3

const newAddProduct = { name: "Roll", price: 3, location: "Tokiyo" }
const updateData = { price: 1 }

const invokeActions = async ({ action, id, data }) => {
    switch (action) {
        case "getAll":
            const products = await productsOperations.getAll()
            console.log(products)
            break

        case "getById":
            const product = await productsOperations.getById(id)
            if (!product) {
                throw new Error(`Product with id=${id} not found`)
            }
            console.log(product)
            break

        case "add":
            const newProduct = await productsOperations.addProduct(data)
            console.log(newProduct)
            break

        case "update":
            const update = await productsOperations.updateById(id, data)
            if (!update) {
                throw new Error(`Product with id=${id} not found`)
            }
            console.log(update)
            break

        case "remove":
            const remove = await productsOperations.removeById(id)
            if (!remove) {
                throw new Error(`Product with id=${id} not found`)
            }
            console.log(remove)
            break

        default:
            console.log('Unknown action')


    }
}

// console.log("ARGV", process.argv)


// invokeActions({ action: "getAll" })
// invokeActions({ action: "getById", id: needId })
// invokeActions({ action: "add", data: newAddProduct })
// invokeActions({ action: "update", id: '83669b4f-16fd-4069-b6d5-ec0a3aa53f7f', data: updateData })
// invokeActions({ action: "remove", id: '83669b4f-16fd-4069-b6d5-ec0a3aa53f7f' })

const arr = hideBin(process.argv)
// console.log(arr);

const { argv } = yargs(arr)
// console.log(argv)

invokeActions(argv)
