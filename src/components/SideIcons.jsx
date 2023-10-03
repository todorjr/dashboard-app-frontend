import React from 'react';

function SideIcons({ icons }) {
    return (
        <div className="icon-column">
            {icons.map((IconComponent, index) => (
                <div className="icon-container" key={index}>
                    <IconComponent size={30} />
                </div>
            ))}
        </div>
    );
}

export default SideIcons