
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function ActivityChart({ data, loading }) {
    if (!loading) {
        return <p>Please be patient. Your data is currently loading.</p>;
    } else {
        return (
            <div>
                <ResponsiveContainer width="100%" height={190}>
                    <BarChart
                        width={580} 
                        height={180}
                        data={data}
                        margin={{
                            top: 15,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="day" />
                        <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#000' }} />
                        <Bar type="monotone" dataKey="kilogram" fill="#000" yAxisId={0} />
                        <Bar type="monotone" dataKey="calories" fill="#FF0000" yAxisId={0} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default ActivityChart;




