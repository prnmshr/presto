const apiUrl = 'https://restaurant-api.dicoding.dev/list'

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const restaurantCards = document.getElementById('restaurant-cards')
    let restaurantElement = ''

    data.restaurants.forEach(restaurant => {
      restaurantElement += `
        <article>
          <img class="card-img" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="">
          <div class="konten">
            <h2><a class="title" href="">${restaurant.name}</a></h2>
            <p>${restaurant.city}</p>
            <p>⭐ ${restaurant.rating}</p>
          </div>
        </article>
      `
    })

    restaurantCards.innerHTML = restaurantElement
  })
  .catch(error => {
    console.error('Error fetching data:', error)
  })
