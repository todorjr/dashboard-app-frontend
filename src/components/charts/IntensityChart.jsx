import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip } from 'recharts';

function IntensityChart({ data, loading }) {

    const performanceData = data.data;
    const kindMapping = data.kind;

    if (!loading) {

        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', }}>
                <p>Please be patient. Your data is currently loading.</p>
            </div>
        )
    } else {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>
            <RadarChart
                className="radar-chart"
                cx={150}
                cy={150}
                outerRadius={72}
                width={300}
                height={300}
                data={performanceData}
            >
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tickFormatter={(value) => kindMapping[value].charAt(0).toUpperCase() + kindMapping[value].slice(1).toLowerCase()}
                    tick={{ fill: "white", fontSize: 12 }}
                />
                <Radar name="Intensity" dataKey="value" fill="#FF0000" fillOpacity={0.6} />
            </RadarChart>
        </div>
        );
    }
}

export default IntensityChart;

