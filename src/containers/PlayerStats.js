import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPlayerStatsAction } from '../actions'
import StatsChart from '../components/StatsChart'

class Player extends Component {
  componentDidMount() {
    this.props.getStats()
  }

  render() {
    const { stats, loading } = this.props
    return (
      <div>
        {
          loading ? (
            <p>Loading...</p>
          ) : (
            <StatsChart stats={stats} />
          )
        }
      </div>
    )
  }
}

Player.propTypes = {
  stats: PropTypes.array,
  loading: PropTypes.bool,
  getStats: PropTypes.func,
}

const mapStateToProps = state => ({
  ...state.playerStats,
})

export default connect(mapStateToProps, {
  getStats: getPlayerStatsAction,
})(Player)
