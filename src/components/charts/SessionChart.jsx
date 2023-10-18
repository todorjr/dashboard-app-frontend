
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


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

function SessionChart({ data, loading }) {
    console.log(data,'session data');

    if (!loading) {
        return <p>Please be patient. Your data is currently loading.</p>;
    } else {
        return (
            <ResponsiveContainer width="100%" height={200}>
                <LineChart
                    width={300}
                    height={150}
                    data={data}
                    margin={{
                        top: 25,
                        right: 10,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="day" />
                    <YAxis domain={['dataMin', 'dataMax']} />
                    <Tooltip content={<CustomTooltip />}/>
                    <CartesianGrid stroke="#eee" vertical={false} />
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFF" fill="#FFF" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default SessionChart
