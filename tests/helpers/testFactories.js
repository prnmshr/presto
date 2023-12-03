/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator'
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resto-idb'

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant
  })
}

export { createLikeButtonInitiatorWithRestaurant }
