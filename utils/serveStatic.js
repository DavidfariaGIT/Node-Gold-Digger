import path from "node:path";
import fs from "node:fs/promises";
import { getContentType } from "./getContentType.js";
import { getResponse } from "./response.js";

export async function serveStatic(req, res, dirname) {
  const publicDir = path.join(dirname, "public");
  const filePath = path.join(
    publicDir,
    req.url === "/" ? "index.html" : req.url,
  );

  const ext = path.extname(filePath);
  const contentType = await getContentType(ext);

  try {
    const content = await fs.readFile(filePath);
    getResponse(res, 200, contentType, content);
  } catch (err) {
    if (err.code === "ENOENT") {
      const content = await fs.readFile(path.join(publicDir, "404.html"));
      getResponse(res, 404, "text/html", content);
    } else {
      getResponse(
        res,
        500,
        "text/html",
        "<html><h1>Server Error: ${err.code}</h1></html>",
      );
    }
  }
}
