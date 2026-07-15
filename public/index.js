const eventSource = new EventSource('/api/gold')

const priceEl = document.getElementById('price-display')


eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data)
  const price = data.price
  priceEl.textContent = price
}

eventSource.onerror = () => {
  console.log("Connection lost. Attempting to reconnect...")
}

const form = document.querySelector('form')

form.addEventListener(('submit'), async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const userInput = formData.get('investment-amount')
  const date = new Date()

  const payload = {
  amount: userInput,
      price: priceEl.value,
      date: date
  }

  const response = await fetch('localhost:8000/api', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
})