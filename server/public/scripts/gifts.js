const renderGifts = async () => {
    const response = await fetch('/gifts')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    if (data) {
        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createaElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url($gift.image)`

            const giftName = document.createElement('h3')
            giftName.textContent = gift.name
            bottomContainer.appendChild(giftName)

            const giftPrice = document.createElement('p')
            giftPrice.textContent = gift.price
            bottomContainer.appendChild(giftPrice)

            const giftLink = document.createElement('a')
            giftLink.href = '/gifts/' + gift._id
            giftLink.role = 'button'
            bottomContainer.appendChild(giftLink)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}

renderGifts()