import path from 'node:path'
import fs from 'node:fs/promises'
import { getContentType } from './getContentType.js'
import { getResponse } from './response.js'


export async function serveStatic(req, res, dirname) {
const publicDir = path.join(dirname, 'public')
const filePath = path.join(
    publicDir,
    req.url === '/' ? 'index.html' : req.url)

    const ext = path.extname(filePath)
    const contentType = getContentType(ext)

    try {
        const content = await fs.readFile(filePath)
        getResponse(req, 200, contentType, content)
    }catch(err) {
        console.error(`error serving static ${err}`)
    }
}