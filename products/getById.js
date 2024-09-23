const getAll = require('./getAll')

const getById = async (id) => {
    // const products = await fs.readFile(filePath)
    // const parsedProducts = JSON.parse(products)
    // const product = parsedProducts.filter(item => item.id === id)
    // return product

    const products = await getAll()
    const result = products.find(item => item.id === id)
    if (!result) {
        return null
    }
    return result

}


module.exports = getById