const fs = require('fs/promises')
const filePath = require('./filePath')

const getAll = async () => {
    const products = await fs.readFile(filePath)
    const result = JSON.parse(products)
    return result
}

module.exports = getAll