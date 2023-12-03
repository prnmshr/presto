import CONFIG from '../../globals/config'

const createItemTemplate = (restaurant) => `
    <article class="resto-item">
        <img class="card-img lazyload" data-src="${CONFIG.IMAGE_URL_S + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="konten">
            <h2><a class="title" id="title-link" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2> 
            <p>${restaurant.city}</p>
            <p>⭐ ${restaurant.rating}</p>
        </div>
    </article>
`
const createDetailTemplate = (restaurant) => `
  <div class="detail">
    <div tabindex="0" class="container-info">
      <div class="img-container">
        <img class="resto-image lazyload" data-src="${CONFIG.IMAGE_URL_L + restaurant.pictureId}" alt="Gambar ${restaurant.name}" tabindex="0"/>
      </div>
      <ul class="detail-info">
        <li class="resto-name">
          <i title="restaurant"></i>
          <p class="detail-name">${restaurant.name}</p>
        </li>
    
        <li class="resto-address">
          
          <p class="detail-address"><i class="fa fa-building"></i> ${restaurant.address}, ${restaurant.city}</p>
        </li>
    
        <li class="resto-rating">
          <i title="ratings"></i>
          <p class="detail-name-address-rating">&star; ${restaurant.rating}</p>
        </li>
        <br>
        <h4> Description: </h4>
        <li><p class="detail-desc">${restaurant.description}</p></li>
    
        <li class="resto-category">${restaurant.categories.map((category) => `
            <span class="category">${category.name}</span>
          `
        ).join('')}
        </li>
      </ul>
      <br>
      </div> 
        <h3 class="list-menu" tabindex="0">List Menu</h3><br>
        <div class="menu-list">
          <div>
            <h3 class="foods-drinks">Food</h3>
            </hr>
              <ul class="menu-foods-drinks">
              ${restaurant.menus.foods.map((food) => `
                <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>`
                ).join('')}
              </ul>
          </div><br>
          <div>
            <h3 class="foods-drinks">Drink</h3>
            </hr>
              <ul class="menu-foods-drinks"">
              ${restaurant.menus.drinks.map((drink) => `
                <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>`
              )
                .join('')}
              </ul>
          </div>
        </div><br>

        <h3 tabindex="0" class="review"><span>Reviews</span></h3>
        <div tabindex="0" class="detail-review">
          ${restaurant.customerReviews.map((review) => `
          <div class="detail-review-item">
            <div class="header-review">
              <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
              <p class="date-review">${review.date}</p>
            </div>
            <div class="body-review">
              ${review.review}
            </div>
          </div>
          `
    ).join('')}
    </div>
  </div>
`
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createItemTemplate,
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
