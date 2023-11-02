import React from 'react';

function StateTrack({ icon, iconColor, bgColor, value, label, iconClassName, iconContainerClassName, mesure }) {
    return (
        <div className="tracks" >
            <div className={`icons ${iconContainerClassName}`}><p className={`icon ${iconClassName}`}>{icon}</p></div>
            <div className="stats">
                <p style={{fontWeight: 'bold'}}>{value} {mesure}</p>
                <h2>{label}</h2>
            </div>
        </div>
    );
}

export default StateTrack;
