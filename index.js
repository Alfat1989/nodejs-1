const fs = require('fs/promises')
const matter = require('gray-matter')
const params = require('./index2')

// const text = fs.readFile('files/text.txt')
//     .then(res => console.log(res.toString()))
//     .catch(err => console.log(err.message))

// const readme = fs.readFile('files/readme.md')
//     .then(res => console.log(matter(res.toString()).data))
//     // .then(res => console.log(matter(res.toString())))
//     .catch(error => console.log(error.message))


const fileOperation = async (filePath, action = 'read', data = "") => {
    switch (action) {
        case "read":
            const text = await fs.readFile(filePath, "utf-8")
            console.log(text)
            break

        case "add":
            await fs.appendFile(filePath, data)
            break

        case "replace":
            await fs.writeFile(filePath, data)
            break

        default:
            console.log('No operations')
            break

    }
}

fileOperation('./files/text.txt')
// fileOperation('./files/text.txt', 'add', '\nNew Text')
// fileOperation('files/text.txt', 'replace', 'Replaced File')



