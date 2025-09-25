const renderGift = async () => {
    // grab the ID from the URL
    const requestedID = parseInt(window.location.href.split('/').pop())

    // fetch all gifts
    const response = await fetch('/gifts')
    const data = await response.json()

    const giftContent = document.getElementById('gift-content')
    let gift

    if (data) {
        gift = data.find(g => g.id === requestedID)
    }

    if (gift) {
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy
        document.getElementById('submittedOn').textContent = 'Submitted on: ' + gift.submittedOn
        document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience
        document.getElementById('description').textContent = gift.description

        document.title = `UnEarthed - ${gift.name}`
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        giftContent.appendChild(message)
    }
}

renderGift()