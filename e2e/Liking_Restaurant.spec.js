const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurants');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurants-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurants-not-found');
  I.amOnPage('/');

  I.retry(3).seeElement('.list-city h1 a');
  const firstRestaurant = locate('.list-city h1 a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.retry(3).seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-item');
  const likedRestaurantName = await I.grabTextFrom('.list-city h1 a');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurants-not-found');
  I.amOnPage('/');

  I.retry(3).seeElement('.list-city h1 a');
  const firstRestaurant = locate('.list-city h1 a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.retry(3).seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-item');
  const likedRestaurantName = await I.grabTextFrom('.list-city h1 a');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(firstRestaurant);

  I.retry(3).seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurants-not-found');
});
