import React from 'react';


function StateTrack({ icon, iconColor, bgColor, value, label }) {
    const trackStyle = {
        backgroundColor: bgColor || '#3498db',
    };

    const iconStyle = {
        backgroundColor: iconColor || 'white',
    };

    return (
        <div className="tracks" style={trackStyle}>
            <div className="icons" style={iconStyle}>{icon}</div>
            <div className="stats">
                <p>{value}</p>
                <h2>{label}</h2>
            </div>
        </div>
    );
}

export default StateTrack;
