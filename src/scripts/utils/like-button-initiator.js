import FavoriteRestoIdb from '../data/favorite-resto-idb'
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = restaurant
    this._favoriteRestaurants = favoriteRestaurants

    await this._renderButton()
  },

  async _renderButton () {
    if (this._restaurant && this._restaurant.id) {
      const { id } = this._restaurant

      if (await this._isRestaurantExist(id)) {
        this._renderLiked()
      } else {
        this._renderLike()
      }
    }
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavoriteRestoIdb.getRestaurant(id)
    return !!restaurant
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()

    const likeButton = document.getElementById('likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()

    const likedButton = this._likeButtonContainer.querySelector('#likeButton');
    if (likedButton) {
      likedButton.addEventListener('click', async () => {
        await FavoriteRestoIdb.deleteRestaurant(this._restaurant.id)
        this._renderButton()
      })
    }
  }
}

export default LikeButtonInitiator
