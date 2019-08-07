import React from 'react'
import PropTypes from 'prop-types'

import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
} from 'recharts'

const StatsChart = ({ stats }) => {
  const data = stats.map(({ statistics, createdAt }) => {
    const date = new Date(createdAt)
    const dataObject = JSON.parse(statistics)
    const wins = dataObject.battles - dataObject.losses

    return ({
      ...dataObject,
      createdAt: `${date.getDate()}/${date.getMonth()}`,
      wins,
      winRate: ((wins * 100) / dataObject.battles).toFixed(2),
    })
  })

  return (
    <div>
      {
        stats.length > 0 && (
          <LineChart
            width={1200}
            height={500}
            data={data}
            margin={{
              top: 5, right: 20, bottom: 5, left: 0,
            }}
          >
            <Line type="monotone" dataKey="winRate" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <YAxis domain={['dataMax', 'auto']} />
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
          </LineChart>
        )
      }
    </div>
  )
}
StatsChart.propTypes = {
  stats: PropTypes.array,
}

export default StatsChart
