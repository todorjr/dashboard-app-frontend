import React from "react";
import { PieChart, Pie, Cell, Label } from 'recharts';

function ScoreChart({ data }) {
    const formattedData = data.map(item => ({
        ...item,
        score: item.score * 100  // convert decimal values to percentages
    }));
    const totalPercentage = formattedData.reduce((acc, item) => acc + item.score, 0);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%', paddingRight: '5px' }}>
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    dataKey="score"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={70}
                    fill="#8884d8"
                    startAngle={90}
                    endAngle={-270}
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill || "#000000"} />
                        ))
                    }
                    <Label 
                        className="chart-label"
                        value={`${totalPercentage}% de votre objectif`} 
                        position="center" 
                        style={{ fontSize: '10px', fill: '#000' }}
                    />
                </Pie>
            </PieChart>
        </div>
    );
}

export default ScoreChart;

