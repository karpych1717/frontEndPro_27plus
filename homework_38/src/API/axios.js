import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_LINK,
  headers: {
    'Content-Type': 'application/json'
  }
})

const api = Object.freeze({
  getDestinations (params) {
    return instance.get('destinations', { params })
  },
  getHotels (params) {
    return instance.get('hotels', { params })
  }
})

export { api }
