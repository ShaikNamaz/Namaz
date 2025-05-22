import React from 'react';

const House = ({ address, rooms, price, imageUrl }) => {
    return (
        <div className="house-card" style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, maxWidth: 350 }}>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="House"
                    style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8 }}
                />
            )}
            <h2 style={{ margin: '16px 0 8px' }}>{address}</h2>
            <p>Rooms: {rooms}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default House;