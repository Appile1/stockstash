import Image from "next/image";
import "./pantryItem.css";

export default function PantryItem({ name, quantity, imageUrl }) {
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
        <p>Quantity: {quantity}</p>
        <div className="item-buttons">
          <button className="btn" onClick={onAddToPantry}>
            Add to Pantry
          </button>
          <button className="btn btn-remove" onClick={onRemoveFromPantry}>
            Remove from Pantry
          </button>
        </div>
      </div>
    </div>
  );
}
