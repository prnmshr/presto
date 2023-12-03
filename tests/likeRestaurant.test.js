/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb'
import * as TesFactories from './helpers/testFactories'

describe('Like a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TesFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy()
  })

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TesFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy()
  })

  it('should be able to like the restaurant', async () => {
    await TesFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1)

    expect(restaurant).toEqual({ id: 1 })

    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant again when its already liked', async () => {
    await TesFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }])

    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant when it has no id', async () => {
    await TesFactories.createLikeButtonInitiatorWithRestaurant({})

    const likeButton = document.querySelector('#likeButton')

    if (likeButton) {
      likeButton.dispatchEvent(new Event('click'))
    } else {
      console.error('Like button not found.')
    }

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([])
  })
})
