import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function ActivityChart({ data, loading }) {

    function CustomTooltip({ payload, active }) {
        if (active && payload && payload.length) {
            return (
                <div style={{ backgroundColor: '#FF0000', padding: '5px' }}>
                {payload.map((entry) => {
                    if (entry.name === 'kilogram') {
                        return <p style={{ color: '#fff' }} key={entry.name}>{entry.value} kg</p>
                    }
                    if (entry.name === 'calories') {
                        return <p style={{ color: '#fff' }} key={entry.name}>{entry.value} Kcal</p>
                    }
                    return null;
                })}
            </div>
            );
        }
        return null;
    }
    function CustomLegend({payload, iconType}) {
    
        return (
            <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', listStyle: 'none', marginRight:'10px', marginBottom: '20px' }}>
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} style={{ marginLeft: '10px' }}>
                        <span style={{ 
                            display: 'inline-block', 
                            width: '10px', 
                            height: '10px', 
                            borderRadius: iconType === 'circle' ? '50%' : '0%', 
                            backgroundColor: entry.color, 
                            marginRight: '5px' 
                        }}></span>
                        {entry.value === 'kilogram' ? 'Poids (kg)' : 'Calories brûlées (Kcal)'}
                    </li>
                ))}
            </ul>
        );
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
                        <Tooltip  content= {<CustomTooltip />} itemStyle={{ color: '#fff' }} contentStyle={{ backgroundColor: '#fff' }}/>
                        <Legend
                            content={<CustomLegend />}
                            verticalAlign="top"
                            layout="horizontal"
                            align="right"
                            iconType="circle"
                            wrapperStyle={{position: 'absolute', top: '-45px'}}
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




