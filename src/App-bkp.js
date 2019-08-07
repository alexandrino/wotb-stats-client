// import React, { Component } from 'react';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// import logo from './logo.svg';
// import './App.css';

// const APP_ENDPOINT = 'https://9plqdyb80c.execute-api.us-east-1.amazonaws.com/dev'
// const playerId = 1033001555

// const PLAYER_STATS_URL = `${APP_ENDPOINT}/player-info?accountId=${playerId}`
// const PLAYER_VEHICLES_URL = `${APP_ENDPOINT}/player-vehicles?accountId=${playerId}`

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       stats: [],
//       vehicles: []
//     }
//   }
//   async componentDidMount(){
//     const playerStatsresponse = await fetch(PLAYER_STATS_URL)
//     const stats = await playerStatsresponse.json()
//     const data = stats.map(({ statistics, createdAt }) => {
//       const date = new Date(createdAt)
//       const dataObject = JSON.parse(statistics)
//       const wins = dataObject.battles - dataObject.losses

//       return ({
//         ...dataObject,
//         createdAt: `${date.getDate()}/${date.getMonth()}`,
//         wins,
//         winRate: ((wins * 100) / dataObject.battles).toFixed(2)
//       })
//     })

//     const playerVehiclesresponse = await fetch(PLAYER_VEHICLES_URL)
//     const vehicles = await playerVehiclesresponse.json()

//     this.setState({
//       stats: data,
//       vehicles,
//     })

//   }

//   render() {
//     const { stats, vehicles } = this.state
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Win Rate
//           </p>
//           <LineChart
//             width={1200}
//             height={500}
//             data={stats}
//             margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
//           >
//             <Line type="monotone" dataKey="winRate" stroke="#8884d8" />
//             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//             <YAxis domain={['dataMax', 'auto']} />
//             <XAxis dataKey="createdAt" />
//             <YAxis />
//             <Tooltip />
//           </LineChart>
//         </header>
//         <div>
//           <h2>Player Vehicles</h2>
//           <ul>
//             {
//               vehicles.map(vehicle => (
//                 <li key={vehicle.vehicleId}>{vehicle.vehicleId}</li>
//               ))
//             }
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
