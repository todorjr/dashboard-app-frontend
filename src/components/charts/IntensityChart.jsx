import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip } from 'recharts';

function IntensityChart({ data, loading }) {

    const performanceData = data.data;
    const kindMapping = data.kind;

    if (!loading) {
        return <p>Please be patient. Your data is currently loading.</p>;
    } else {
        return (
            <RadarChart
                cx={120}
                cy={75}
                outerRadius={70}
                width={240}
                height={300}
                data={performanceData}
                margin={{
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: 15 
                }}
            >
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis dataKey="kind" tickFormatter={(value) => kindMapping[value]} tick={{ fill: "white", fontSize: 10 }} />
                <Radar name="Intensity" dataKey="value" stroke="#FFF" fill="#FFF" fillOpacity={0.6} />
            </RadarChart>
        );
    }
}

export default IntensityChart;

