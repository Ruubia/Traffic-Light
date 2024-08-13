import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
    const [color, setColor] = useState(null);
    const [isAuto, setIsAuto] = useState(false);
    const [showPurple, setShowPurple] = useState(false);

    useEffect(() => {
        let interval;
        if (isAuto) {
            interval = setInterval(() => {
                setColor((prevColor) => {
                    if (prevColor === 'red') return 'yellow';
                    if (prevColor === 'yellow') return 'green';
                    if (prevColor === 'green' && showPurple) return 'purple';
                    return 'red';
                });
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAuto, showPurple]);

    // Function to set the styles based on the color
    const getLightStyle = (currentColor) => ({
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: color === currentColor ? currentColor : 'darkgray',
        margin: '15px',
    });

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex flex-column align-items-center bg-dark p-3 rounded" style={{ width: '100px' }}>
            <div
                onClick={() => setColor('red')}
                style={getLightStyle('red')}
            ></div>
            <div
                onClick={() => setColor('yellow')}
                style={getLightStyle('yellow')}
            ></div>
            <div
                onClick={() => setColor('green')}
                style={getLightStyle('green')}
            ></div>
            {showPurple && (
                <div
                    onClick={() => setColor('purple')}
                    style={getLightStyle('purple')}
                ></div>
            )}
            <button onClick={() => setIsAuto(!isAuto)} className="btn btn-primary mt-3">
                {isAuto ? 'Stop' : 'Start'} Auto Change
            </button>
            <button onClick={() => setShowPurple(!showPurple)} className="btn btn-secondary mt-3">
                {showPurple ? 'Remove Purple' : 'Add Purple'}
            </button>
        </div>
        </div>
    );
};

export default TrafficLight;