import PrestoDbSource from '../../data/prestodb-source'
import { createItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
        <header id="header-content">
            <div class="jumbotron">
                <h1>Selamat Datang</h1>
                <h2>Temukan restoran terbaik untuk pengalaman makan tak terlupakan.</h2>
             </div>
         </header>
         <main id="main">
            <h1 class="explore-title">Restaurant Explore</h1>
            <div class="container">
                <div div id="restaurant-cards" class="grid">
                </div>
            </div>
        </main>
    `
  },

  async afterRender () {
    const home = await PrestoDbSource.home()
    const restaurantCards = document.querySelector('#restaurant-cards')
    home.forEach((restaurant) => {
      restaurantCards.innerHTML += createItemTemplate(restaurant)
    })
  }
}

export default Home
