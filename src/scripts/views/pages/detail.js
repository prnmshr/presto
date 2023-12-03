import UrlParser from '../../routes/url-parser'
import PrestoDbSource from '../../data/prestodb-source'
import { createDetailTemplate } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb'
import PostReview from '../../utils/post-review'

const Detail = {
  async render () {
    return `
    <div tabindex="0" class="main">
      <h2 tabindex="0" class="explore-restaurant-label">Detail Restaurant</h2>
      <section id="detail-rest"></section>
      <div class="like" id="likeButtonContainer"></div>
    </div>

        <div class="form-review">
          <h3 class="review">Review Anda<h3>
          <form>
            <div class="forms">
              <label for="inputName" class="form-label">Name</label>
              <input name="inputName" type="text" class="form-control" id="inputName">
            </div>
            <div class="forms">
              <label for="inputReview" class="form-label">Review</label>
              <input name="inputReview" type="text" class="form-control" id="inputReview">
            </div>
            <button id="submit-review" type="submit" class="btn-submit">Submit</button>
          </form>
        </div>
    </div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await PrestoDbSource.detail(url.id)
    const restaurantContainer = document.querySelector('#detail-rest')
    restaurantContainer.innerHTML = createDetailTemplate(
      restaurant.restaurant
    )

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating
      }
    })

    const submitReview = document.getElementById('submit-review')
    submitReview.addEventListener('click', (event) => {
      event.preventDefault()
      PostReview()
    })
  }
}

export default Detail
