import http from "node:http";
import { handleGet, handlePost, handleGold } from "./routes/routeHandler.js";
import { serveStatic } from "./utils/serveStatic.js";

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api") {

    if (req.method === "GET") {
      return await handleGet(res);
    } 
    else if (req.method === "POST") {
       handlePost(req, res);
    }

  } else if (req.url === "/api/gold") {
    return await handleGold(res)

  } else if (!req.url.startsWith("/api")) {

    return await serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () => {
  console.log(`server running at http://${PORT}`);
});
