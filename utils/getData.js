import fs from 'node:fs/promises'
import path from 'node:path'

export async function getData() {
    try {
    const dataPath = path.join('data', 'data.json')
    const data = await fs.readFile(dataPath, 'utf8')
    const parsedData = JSON.parse(data)
    return parsedData
    } catch(err) {
        throw new Error(`error fetching data: ${err}`)
    }
}



