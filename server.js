import http from 'node:http'
import { handleGet, handlePost } from './routes/routeHandler.js'
import { serveStatic } from './utils/serveStatic.js'



const PORT = 8000; 
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
   
    if(req.url === '/api') {
        if (req.method === 'GET') {
            return await handleGet(res)
        }
    } else if (req.method === "POST") {
        return await handlePost(req, res)
    } else if (req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname)
    } else if (req.url === '/gold/live') {
        res.setHeader('Content-Type', 'text/control-stream')
        res.setHeader('Cache-Control', 'no-cache')
        res.setHeader('Connection', 'keep-alive')

        setInterval(() => {
            const gold = getGold()

        }, 2000)
    }


})

server.listen(PORT, () => {
    console.log(`server running at http://${PORT}`)
})