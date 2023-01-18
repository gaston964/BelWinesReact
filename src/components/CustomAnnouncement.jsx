import React, { useState } from 'react';

function CustomAnnouncement() {
    const [visible, setVisible] = useState(true);

    return (
        <div style={{ backgroundColor: 'yellow', padding: '10px', color: 'black' }}>
            {visible && (
                <span>
                    CAJAS A PARTIR DE $3.200
                    <button onClick={() => setVisible(false)}>X</button>
                </span>
            )}
            {!visible && (
                <button onClick={() => setVisible(true)}>Ver anuncio</button>
            )}
        </div>
    );
}

export default CustomAnnouncement;