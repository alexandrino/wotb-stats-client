const initialState = {
  stats: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLAYER_STATS_START':
      return {
        stats: [],
        loading: true,
      }
    case 'GET_PLAYER_STATS_SUCCESS':
      return {
        stats: action.stats,
        loding: false,
      }
    case 'GET_PLAYER_STATS_ERROR':
      return {
        stats: [],
        loding: false,
      }
    default: {
      return state
    }
  }
}
