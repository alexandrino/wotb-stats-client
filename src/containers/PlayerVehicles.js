import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPlayerVehiclesAction } from '../actions'
import VehiclesList from '../components/VehiclesList'

class PlayerVehicles extends Component {
  componentDidMount() {
    this.props.getPlayerVehicles()
  }

  render() {
    const { vehicles, loading } = this.props
    return (
      <div>
        {
          loading ? (
            <p>Loading...</p>
          ) : (
            <VehiclesList vehicles={vehicles} />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.playerVehicles,
})

PlayerVehicles.propTypes = {
  vehicles: PropTypes.array,
  loading: PropTypes.bool,
  getPlayerVehicles: PropTypes.func,
}

export default connect(mapStateToProps, {
  getPlayerVehicles: getPlayerVehiclesAction,
})(PlayerVehicles)
