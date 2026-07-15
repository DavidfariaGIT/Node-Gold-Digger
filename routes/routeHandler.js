import { getData } from '.././utils/getData.js'
import { getResponse } from '../utils/response.js'

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    getResponse(res, 200, 'Application/json', content)


}

export async function handlePost(req, res) {
}