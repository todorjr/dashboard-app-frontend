import React from 'react';

function SideIcons({ icons }) {
    return (
        <div className="icon-column">
            {icons.map((Icon, index) => (
                <div className="icon-container" key={index}>
                    <Icon size={30} color="red" />
                </div>
            ))}
        </div>
    );
}

export default SideIcons