
import './chart.css'
import { LineChart, Legend, Line, XAxis,YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title,data,dataKey,grid}) {

    return (
        
        <div className='chart'>
            <h3 className='charttitle'>{title}</h3>
            <span className='chartsub date'>May-june 2021 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
  <path d="M6 9.5L2.354 5.854a.5.5 0 0 1 .708-.708L6 8.793l3.938-3.647a.5.5 0 0 1 .707.708L6 9.5z"/>
</svg> </span>
<div className="chart-container">
<ResponsiveContainer width="100%" height={300} aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <YAxis axisLine={false} />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip/>
                    <Legend layout="horizontal" verticalAlign="top" align="right"/>
                    {grid && <CartesianGrid vertical={false} stroke='#e0dfdf' strokeDasharray={{5:5}}/>}
                    {/* {  <CartesianGrid  />} */}
                    <Line type="monotone" dataKey="User" stroke="#9BDD7C" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" />
                </LineChart>
</ResponsiveContainer>
</div>   



        </div>
    )
}
