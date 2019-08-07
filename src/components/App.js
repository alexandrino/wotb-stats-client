import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'

import VehiclePage from './VehiclePage'

const App = () => (
  <div>
    <h1>App</h1>
    <Router>
      <Link to="/vechicle">Home</Link>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/vehicle" component={VehiclePage} />
    </Router>
  </div>
)

// function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={VehiclePage} />
//         <Route path="/topics" component={Topics} />
//         <Route exact path="/" component={HomePage} />
//         <Route exact path="/vehicle" component={VehiclePage} />
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default App
