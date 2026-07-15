import { getContentType } from "./getContentType.js"

export function getResponse(res, statusCode, contentType, payload) {
    res.statusCode = statusCode
    res.contentType = contentType
    res.end(payload)
}