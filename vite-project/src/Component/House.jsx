// house.jsx
import React from 'react';

/**
 * Represents a House component.
 * This is a basic placeholder and can be expanded with more specific features.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} [props.address="123 Main St"] - The address of the house.
 * @param {string} [props.color="White"] - The color of the house.
 * @param {number} [props.bedrooms=3] - The number of bedrooms in the house.
 * @returns {JSX.Element} The rendered house component.
 */
function House({ address = "123 Main St", color = "White", bedrooms = 3 }) {
  return (
    <div className="house-container" style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px' }}>
      <h2>My House</h2>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Bedrooms:</strong> {bedrooms}</p>
      {/* You can add more details or components here, like a list of rooms, amenities, etc. */}
    </div>
  );
}

export default House;
