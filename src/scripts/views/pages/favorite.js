import FavoriteRestaurantIdb from '../../data/favorite-resto-idb'
import { createItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
      <main id="main" tabindex="0">
        <h1 class="explore-title">Your Liked Restaurants</h1>
        <div class="container">
          <h2 class="restaurant-not-found"></h2>
          <div id="restaurant-cards" class="grid">
          </div>
        </div>
      </main>
      `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant()
    const restaurantContainer = document.querySelector('#restaurant-cards')
    const empty = document.querySelector('.restaurant-not-found')
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <p class="empty-fav">Belum ada restaurant favorite yang berhasil ditambahkan</p>
      `
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createItemTemplate(restaurant)
    })
  }
}

export default Favorite
