import { getData } from ".././utils/getData.js";
import { getResponse } from "../utils/response.js";
import { data } from '.././data/data.js'

export async function handleGet(res) {
  const data = await getData();
  const content = JSON.stringify(data);
  getResponse(res, 200, "Application/json", content);
}

export async function handlePost(req, res) {}

export async function handleGold(res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  setInterval(() => {
    let randomNum = Math.floor(Math.random() * data.length);
    const goldPrices = data.map((goldPrice) => goldPrice.price)

    res.write(
      `data: ${JSON.stringify({
        event: "update-gold",
        price: goldPrices[randomNum]
      })}\n\n`,
    );
  }, 2000);
}
