"use client";
import Link from "next/link";
import "./header.css";

export default function Header() {
  async function handleClick() {
    try {
      await db.collection("items").add({
        name: itemName,
        unit: itemUnit,
        userid: userId,
      });
      alert("Item added successfully!");
    } catch (error) {
      console.error("Error adding item: ", error);
      alert("Failed to add item.");
    }
  }
  return (
    <main className="intro-container">
      <header className="header">
        <div className="logo">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-house"
            >
              <path d="M8 3.293l6 6V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3.707l6-6zm5 6.707V13a.5.5 0 0 0 .5-.5H13a.5.5 0 0 0 .5-.5v-3.5L8 4.293l-5.5 5.5V12.5A.5.5 0 0 0 2.5 13H3v.5a.5.5 0 0 0 .5.5H13z" />
              <path
                fillRule="evenodd"
                d="M7.293 1.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L8 3.414 2.707 9.707a1 1 0 0 1-1.414-1.414l7-7z"
              />
            </svg>
          </Link>
        </div>
        <div className="buttons">
          <button
            className="btn"
            onClick={() => {
              console.log("hello");
            }}
          >
            Add item{" "}
          </button>
          <button className="btn">Pantry</button>
        </div>
      </header>
      <section className="intro-section">
        {/* Uncomment the Image tag below if you have an image to use */}
        {/* <Image
          src={introImage}
          alt="StockStash Introduction"
          className="intro-image"
        /> */}
        <div className="intro-text">
          <h1>Welcome to StockStash</h1>
          <p>
            Our innovative pantry management app helps you keep track of all
            your groceries with ease.
          </p>
          <p>Developed by M. Ahmad and Prabh.</p>
        </div>
      </section>
    </main>
  );
}
