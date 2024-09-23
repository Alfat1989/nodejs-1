const getAll = require('./getAll')
const fs = require('fs/promises')
const filePath = require('./filePath')


const updateById = async (id, data) => {
    const products = await getAll()
    const idx = products.findIndex(item => item.id === id)
    if (idx === -1) {
        return null
    }
    products[idx] = { ...products[idx], ...data }
    await fs.writeFile(filePath, JSON.stringify(products))
    return products[idx]
}

module.exports = updateById