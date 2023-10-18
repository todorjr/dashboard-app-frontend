import React from "react";
import { RadialBarChart, RadialBar } from 'recharts';

function ScoreChart({ data }) {
    console.log(data,'score');
    return (
        <RadialBarChart
            width={200}
            height={200}
            cx={100}
            cy={100}
            innerRadius={80}
            outerRadius={100}
            barSize={150}
            data={data}
            margin={{
                top: 15,
                left: 5,
                bottom: 5,
                right: 20
            }}
        >
            <RadialBar minAngle={15}  clockWise={true} fill={({ entry }) => entry.fill} dataKey="score" />
        </RadialBarChart>
    );
}

export default ScoreChart