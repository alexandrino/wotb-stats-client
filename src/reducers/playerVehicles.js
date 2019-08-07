const initialState = {
  vehicles: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLAYER_VEHICLES_START':
      return {
        vehicles: [],
        loading: true,
      }
    case 'GET_PLAYER_VEHICLES_SUCCESS':
      return {
        vehicles: action.vehicles,
        loding: false,
      }
    case 'GET_PLAYER_VEHICLES_ERROR':
      return {
        vehicles: [],
        loding: false,
      }
    default: {
      return state
    }
  }
}
