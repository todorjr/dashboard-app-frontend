import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function ActivityChart({ data, loading }) {

    function CustomTooltip({ payload, label, active }) {
        console.log(payload);
        if (active && payload && payload.length) {
            return (
                <div style={{ backgroundColor: '#FF0000', padding: '5px' }}>
                    <p style={{ color: '#000' }}>{label}</p>
                    {payload.map((entry) => (
                        entry.name === 'kilogram' && entry.name === 'calories' ?
                        <p style={{ color: '#000' }} key={entry.name}>
                            {entry.name === 'kilogram' ? `${entry.value} kgs` : `${entry.value} Kcal`}
                        </p>
                        : null
                    ))}
                </div>
            );
        }
        return null;
    }
    
    if (!loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                <div className="loading-circle"></div>
                <p style={{ marginLeft: '15px' }}>Please be patient. Your data is currently loading.</p>
            </div>
        );
    } else {
        return (
            <div>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 15,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis orientation='right'/>
                        <Tooltip  content= {<CustomTooltip />} itemStyle={{ color: '#000' }} contentStyle={{ backgroundColor: '#FF0000' }}/>
                        <Legend
                            verticalAlign="top"
                            layout="horizontal"
                            align="right"
                            iconType="circle"
                            wrapperStyle={{position: 'absolute', top: '-30px'}}
                            />
                        <Bar dataKey="kilogram" fill="#FF0000" barSize={10} />
                        <Bar dataKey="calories" fill="#000000" barSize={10} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default ActivityChart;




