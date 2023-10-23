import React from "react";
import { ResponsiveContainer, RadialBarChart, PolarAngleAxis, RadialBar, Legend } from 'recharts';

function ScoreChart({ data, loading }) {
    const formattedData = data.map(item => ({
        ...item,
        score: item.score
    }));

    const chartWidth = 140;
    const chartHeight = 270;
    const cx = 128;
    const cy = 93;
    const circleRadius = 58.5;

    if (!loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', }}>
                <p style={{ marginLeft: '15px', color: 'red' }}>Please be patient. Your data is currently loading.</p>
            </div>
        )
    } else {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%', paddingRight: '5px' }}>
                <ResponsiveContainer className={"radialBarChart"}>
                    <RadialBarChart
                        width={chartWidth}
                        margin={{ top: 18, right: 18, bottom: 18, left: 18 }}
                        height={chartHeight}
                        innerRadius="85%"
                        outerRadius="100%"
                        barSize={24}
                        data={formattedData}
                        startAngle={225}
                        endAngle={-135}>
                        <circle cx={cx} cy={cy} r={circleRadius} fill="white" />
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 1]}
                            angleAxisId={0}
                            tick={false}
                        />
                        <RadialBar
                            legendType={"line"}
                            id={"score"}
                            label={{
                                fill: "#000000",
                                position: "centerBottom",
                                fontSize: 12,
                                formatter: (value) => `${value * 100}% de votre objectif`,
                            }}
                            dataKey="score"
                            cornerRadius={10}
                            fill="rgb(230, 0, 0)">
                        </RadialBar>
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        )
    }

}

export default ScoreChart;
