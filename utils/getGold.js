import fs from 'node:fs/promises'
import path from 'node:path'
import { getData } from './getData.js'

export function getGold() {
    const randomNum = Math.floor(Math.random() * 10)
    const data = getData()
    console.log(getData) 
}

