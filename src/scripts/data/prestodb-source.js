import API_ENDPOINT from '../globals/api-endpoint'

class PrestoDbSource {
  static async home () {
    const response = await fetch(API_ENDPOINT.HOME)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }

  static async postReview (data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, options)
    return response.json()
  }
}

export default PrestoDbSource
