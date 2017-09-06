import React from 'react'
var ZingChart = require('zingchart-react').core
var myConfig = {
  "type": "line",
  "series": [
    {
      "values":[20,40,25,50,15,45,33,34]
    },
    {
      "values":[5,30,21,18,59,50,28,33]
    }
  ]
}
const Graph = function () {
  return (
    <div>
      <div id = "myChart" />
      <ZingChart id = 'myChart' height = '400' width = "100%" data = { myConfig } />
    </div>
  )
}

export default Graph
