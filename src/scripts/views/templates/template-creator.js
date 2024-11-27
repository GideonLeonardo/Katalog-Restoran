import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => `
<div class="list-item" tabindex="0">
  <div class="list-city">
    <h1><a href="/#/detail/${restaurant.id}">${restaurant.city}</a></h1>
  </div>
  <div class="list-name">
    ${restaurant.name} | Rating : ${restaurant.rating}/5
  </div>
  <img class="list-thumb" src="${restaurant.pictureId ? API_ENDPOINT.IMG.S + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous">
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-card" tabindex="0">
  <div class="detail-card1">
    <h1 class="detail-name">${restaurant.name} | Rating : ${restaurant.rating}/5</h1>
    <h2 class="detail-categories">Kategori: ${restaurant.categories[0].name}</h2>
  </div>
  <img class="detail-thumb" src="${restaurant.pictureId ? API_ENDPOINT.IMG.M + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous">
  <div class="detail-card2">
    <h3 class="detail-city">Kota: ${restaurant.city}</h3>
    <h4 class="detail-address">Alamat: ${restaurant.address}</h4>
    <p class="detail-desc">${restaurant.description}</p>
    <div class="detail-menus">
      <div class="detail-foods">
        <h5>Menu Makanan</h5>
        <ul>
          <li>${restaurant.menus.foods[0].name}</li>
          <li>${restaurant.menus.foods[1].name}</li>
          <li>${restaurant.menus.foods[2].name}</li>
          <li>${restaurant.menus.foods[3].name}</li>
        </ul>
      </div>
      <div class="detail-drinks">
        <h5>Menu Minuman</h5>
        <ul>
          <li>${restaurant.menus.drinks[0].name}</li>
          <li>${restaurant.menus.drinks[1].name}</li>
          <li>${restaurant.menus.drinks[2].name}</li>
          <li>${restaurant.menus.drinks[3].name}</li>
        </ul>
      </div>
    </div>
    <div class="detail-review">
      <h6>Hasil Review</h6>
      <p>"${restaurant.customerReviews[0].review}"</p>
      <p>Oleh: ${restaurant.customerReviews[0].name} (${restaurant.customerReviews[0].date})</p>
    </div>

    ${restaurant.customerReviews
    .map(
      (item) => `
      <div>
        <h4>${item.name}</h4>
        <p>${item.review}</p>
        <hr>
        <p>${item.date}</p>
      </div>
    `
    )
    .join('')}

      <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li><hr>`).join('')}</ul>
      <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li><hr>`).join('')}</ul>
  </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
