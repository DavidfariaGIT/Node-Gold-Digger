export async function parseJSONbody(req) {
    let body = ""

    for (const chunk of req) {
        body += chunk
    }

    try{
        return JSON.parse(body)
    } catch(err) {
        console.error(`invalid json format: ${err}`)
    }
}