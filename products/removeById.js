const getAll = require('./getAll')
const fs = require('fs/promises')
const filePath = require('./filePath')

const removeById = async (id) => {
    const products = await getAll()
    const removedArr = products.filter(item => item.id !== id)
    await fs.writeFile(filePath, JSON.stringify(removedArr))
    return removedArr
}

module.exports = removeById