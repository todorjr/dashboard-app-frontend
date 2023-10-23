
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '2px' }}>
                <p className="intro" style={{ color: '#000' }}>{payload[0].value}min</p>
            </div>
        );
    }

    return null;
}
const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
function CustomTick(props) {
    const { x, y, payload } = props;
    const index = parseInt(payload.value, 10) - 1; //payload.value is not a number

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="center" fill="#fff">
                {days[index]}
            </text>
        </g>
    );
}

function SessionChart({ data, loading }) {
    if (!loading) {
        return <p>Please be patient. Your data is currently loading.</p>;
    } else {
        return (
                <ResponsiveContainer width={250} height="65%">
                    <LineChart
                        width={100}
                        height={150}
                        data={data}
                        margin={{
                            top: 40,
                            right: 12,
                            left: 10,
                            bottom: 5,
                        }}
                    >
                        <XAxis
                            dataKey="day"
                            tick={<CustomTick />}
                            axisLine={false} 
                            tickLine={false} 
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
        );
    }
}

export default SessionChart
