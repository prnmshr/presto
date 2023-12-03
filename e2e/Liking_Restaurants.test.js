/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#main')
  I.see('Belum ada restaurant favorite yang berhasil ditambahkan', '.restaurant-not-found')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see(
    'Belum ada restaurant favorite yang berhasil ditambahkan',
    '.restaurant-not-found'
  )

  I.amOnPage('/#')

  I.waitForElement('.title', 10)
  I.seeElement('.title')

  const firstRestaurant = locate('.title').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.waitForElement('#likeButton', 10)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('#/favorite')
  I.waitForElement('.resto-item', 10)
  I.seeElement('.resto-item')

  const likedRestaurantName = await I.grabTextFrom('.title')
  assert.strictEqual(firstRestaurantName, likedRestaurantName)

  I.seeElement('.title')
})

Scenario('unlike one restaurants', async ({ I }) => {
  I.see(
    'Belum ada restaurant favorite yang berhasil ditambahkan',
    '.restaurant-not-found'
  )

  I.amOnPage('/#')

  I.waitForElement('.title', 10)
  I.seeElement('.title')

  const firstRestaurant = locate('.title').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.waitForElement('#likeButton', 10)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('#/favorite')
  I.waitForElement('.resto-item', 10)
  I.seeElement('.resto-item')

  const likedRestaurantName = await I.grabTextFrom('.title')
  assert.strictEqual(firstRestaurantName, likedRestaurantName)

  I.seeElement('.title')

  const firstRestaurantLiked = locate('.title').first()
  I.click(firstRestaurantLiked)

  I.waitForElement('#likeButton', 10)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('#/favorite')
  I.waitForElement('.restaurant-not-found', 10)
  I.see(
    'Belum ada restaurant favorite yang berhasil ditambahkan',
    '.restaurant-not-found'
  )
})
