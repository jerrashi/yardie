const renderGift = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())

  const response = await fetch('/locations')
  const data = await response.json()

  const locationContent = document.getElementById('location-content')

  let location

  location = data.find(location => location.id === requestedID)

  if (location) {
    document.getElementById('image').src = location.image
    document.getElementById('name').textContent = location.name
    document.getElementById('submittedBy').textContent = 'Submitted by: ' + location.submittedBy
    document.getElementById('pricePoint').textContent = 'Price: ' + location.pricePoint
    document.getElementById('audience').textContent = 'Great For: ' + location.audience
    document.getElementById('description').textContent = location.description
    document.title = `Yardie - ${location.name}`
  }
  else {
    const message = document.createElement('h2')
    message.textContent = 'No Gifts Available 😞'
    locationContent.appendChild(message)   
  }
}

renderGift()
