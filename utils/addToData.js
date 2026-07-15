import fs from 'node:fs/promises'
import path from 'node:path'

export async function addToData(data) {
    try {
    const pathToData = path.join('data', 'purchasedData.js')

    const purchaseObj = {}
    
    purchaseObj.date = data.date
    purchaseObj.amount = data.amount 
    purchaseObj.price = data.price

    const sendData = await fs.appendFile(pathToData, JSON.stringify(purchaseObj) + 
    '\n', 'utf8')
    } catch (err) {
    console.error('Error writing file:', err);
    }

}