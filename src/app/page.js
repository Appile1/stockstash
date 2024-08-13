import Image from "next/image";
import Link from "next/link";
import "./page.css";
import { Imprima } from "next/font/google";

import pantryItems from "../data/data.js";
import PantryItem from "../components/pantryitem/pantryitem.js";
import { AuthContext } from "../components/authContext.js";
export default function Intro() {
  const { user } = AuthContext;

  return (
    <>
      <section className="pantry-grid">
        {pantryItems.map((item) => (
          <PantryItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
          />
        ))}
      </section>
    </>
  );
}
