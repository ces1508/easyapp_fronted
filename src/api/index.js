import axios from 'axios'
const baseUrl = 'http://localhost:4000/api'
class Api {

  requestPost () {

  }

  requestGet() {

  }

  requestPatch () {

  }

  requestDelete() {

  }

  async getApps () {
    let endpoint = `${baseUrl}/apps`
    let response = await axios(endpoint)
    return response.data
  }
  async getCategories(appId) {
    let endpoint = `${baseUrl}/apps/${appId}/categories`
    let response = await axios(endpoint)
    return response.data
  }
  async getProducts(appId, categoryId) {
    let endpoint = `${baseUrl}/apps/${appId}/categories/${categoryId}/products`
    let response = await axios(endpoint)
    return response.data
  }
  async getApp(appId) {
    let endpoint = `${baseUrl}/apps/${appId}/`
    let app = await await axios(endpoint)
    return app.data
  }

  async createApp(data) {
    let formData = new FormData()
    for(let name in data) {
      formData.append(name, data[name])
    }
    try {
      let endpoint = `${baseUrl}/apps`
      let options =  {
        method: 'POST',
        data: formData,
        headers: {
          'contentType':  'multipart/form-data'
        }
      }
      let request = await axios(endpoint, options)
    } catch(e) {
      console.log(e.message)
    }
  }

  async createCategory(appId, data) {
    let formData = new FormData()
    for(let name in data) {
      formData.append(name, data[name])
    }
    let endpoint = `${baseUrl}/apps/${appId}/categories`
    let options = {
      method: 'POST',
      data: formData,
      headers: {
        'contentType':  'multipart/form-data'
      }
    }
    let request = await axios(endpoint, options)
    return request.data
  }

  async deleteCategory (appId, id) {
    let endpoint = `${baseUrl}/apps/${appId}/categories/${id}`
    let request = await axios.delete(endpoint)
    return {status: request.status === 204? 'success': 'fail'}
  }

  async getCategory(appId, categoryId) {
    let endpoint = `${baseUrl}/apps/${appId}/categories/${categoryId}`
    let request = await axios.get(endpoint)
    return  {status: request.status === 200? 'success': 'fail', data: request.data}
  }

  async updateCategory (appId, id, data) {
    let endpoint = `${baseUrl}/apps/${appId}/categories/${id}`
    let formData = new FormData()
    for(let name in data) {
      formData.append(name, data[name])
    }

    let options = {
      method: 'PATCH',
      data: formData,
      headers: {
        'contentType': 'multipart/form-data'
      }
    }
    let request = await axios(endpoint, options)
    console.log(request)
  }
}

let api = new Api()
export default api
