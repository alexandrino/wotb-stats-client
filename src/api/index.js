const { REACT_APP_API_ENDPOINT: url } = process.env

const parseJson = response => response.json()

const fetchApi = async (endpoint) => {
  const result = await fetch(endpoint)
  return parseJson(result)
}

const fetchPlayerStats = async (playerId) => {
  const PLAYER_STATS_URL = `${url}/player-info?accountId=${playerId}`
  return fetchApi(PLAYER_STATS_URL)
}

const fetchPlayerVehicles = async (playerId) => {
  const PLAYER_VEHICLES_URL = `${url}/player-vehicles?accountId=${playerId}`
  return fetchApi(PLAYER_VEHICLES_URL)
}

export default {
  fetchPlayerStats,
  fetchPlayerVehicles,
}
