import React from 'react';

function ActivityChart({ data, loading }) {
    if (!loading) {
        return <p>Please be patient. Your data is currently loading.</p>;
    }else {

    return (
        <div>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>Day: {item.day}, Kilogram: {item.kilogram}, Calories: {item.calories}</li>
                ))}
            </ul>
        </div>
    );
    }

}

export default ActivityChart;




