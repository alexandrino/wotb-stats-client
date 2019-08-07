export default (state = [], action) => {
  switch (action.type) {
    case 'GET_VEHICLE_STATS':
      return action.stats
    default: {
      return state
    }
  }
}
