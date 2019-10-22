import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import getVehicleStatsAction from '../actions/vehicle'
// import StatsChart from '../components/StatsChart'

class Vehicle extends Component {
  componentDidMount() {
    const { vehicleId } = this.props
    this.props.getStats(vehicleId)
  }

  shouldComponentUpdate(prevProps) {
    const { vehicleId } = this.props
    if (vehicleId !== prevProps.vehicleId) {
      this.props.getStats(vehicleId)
    }
  }

  render() {
    const { stats, loading } = this.props
    // console.log(this.props.stats)
    return (
      <div>
        {
          loading ? (
            <p>Loading...</p>
          ) : (
            <p>Ok</p>
          )
        }
      </div>
    )
  }
}

Vehicle.propTypes = {
  stats: PropTypes.array,
  loading: PropTypes.bool,
  getStats: PropTypes.func,
  vehicleId: PropTypes.string,
}

const mapStateToProps = (state) => {
  return ({
    ...state.vehicleStats,
  })
}

export default connect(mapStateToProps, {
  getStats: getVehicleStatsAction,
})(Vehicle)
