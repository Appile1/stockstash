"use client";

import "./pantry.css";

export default function PantryItem({ name }) {
  const handleAddToPantry = (itemName) => {
    console.log(`${itemName} added to pantry`);
  };

  const handleRemoveFromPantry = (itemName) => {
    console.log(`${itemName} removed from pantry`);
  };

  return (
    <div className="pantry-item">
      <div className="item-info">
        <h2>{name}</h2>
        <div className="item-buttons">
          <button className="btn" onClick={() => handleAddToPantry(name)}>
            Add
          </button>
          <button
            className="btn btn-remove"
            onClick={() => handleRemoveFromPantry(name)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
