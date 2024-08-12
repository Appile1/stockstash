"use client";

import Image from "next/image";
import "./pantry.css";

export default function PantryItem({ name, imageUrl }) {
  const handleAddToPantry = (itemName) => {
    console.log(`${itemName} added to pantry`);
  };

  const handleRemoveFromPantry = (itemName) => {
    console.log(`${itemName} removed from pantry`);
  };

  return (
    <div className="pantry-item">
      <div className="item-image">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="item-info">
        <h2>{name}</h2>
        <div className="item-buttons">
          <button className="btn" onClick={() => handleAddToPantry(name)}>
            Add to Pantry
          </button>
          <button
            className="btn btn-remove"
            onClick={() => handleRemoveFromPantry(name)}
          >
            Remove from Pantry
          </button>
        </div>
      </div>
    </div>
  );
}
