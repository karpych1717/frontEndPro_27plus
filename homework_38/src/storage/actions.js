import { createAction } from '@reduxjs/toolkit'

const actions = Object.freeze({
  fetchDestinations: createAction('FETCH_DESTINATIONS'),
  fetchHotels: createAction('FETCH_HOTELS')
})

export default actions
