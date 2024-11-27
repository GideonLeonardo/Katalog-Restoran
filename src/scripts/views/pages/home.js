import RestaurantSource from '../../data/restaurantdb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <!--Daftar Restoran-->
    <div class="explore-list">
      <h1 class="explore-title">Explore Restaurant</h1>
    </div>
    <div id="restaurants" class="restaurants">
    </div>
    <!--End Daftar Restoran-->
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.HomeRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
