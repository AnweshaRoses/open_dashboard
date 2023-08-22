import React from 'react'

import { PieChart,Legend, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
export const Piechart = () => {

const data = [
  { name: 'Basic Tees', value: 14, color:"#EE8484 "},
  { name: 'Custom Short Pants', value: 55, color:"#98D89E " },
  { name: 'Super Hoodies', value: 31, color:"#F6DC7D " },
];
// #98D89E EE8484 F6DC7D

  return (
    <div className="pieChartBox">
      <div className="pie-container">
  
      <div className="chart2">
  
    <ResponsiveContainer width="99%" height={300}>
      <PieChart  >
        <Tooltip
        
        />
         <Legend className='legend-items'  layout="vertical" verticalAlign="middle" align="right" payload={
    data.map(
      (item) => ({
        id: item.name,
        type: "circle",
        value: `${item.name} \n
        ${item.value}%`,
        color: `${item.color}`
      })
    )
  }/>
        <Pie 
          
          data={data}
          
          labelLine={false}
          cy={"50%"}
          cx={"50%"}
          outerRadius={60}
          fill="#8884d8"
          dataKey="value"
          
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
          
        </Pie>
      </PieChart>
  
    </ResponsiveContainer>
    </div>

    </div>

      </div>
  



  )
}
