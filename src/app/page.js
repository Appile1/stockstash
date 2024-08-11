import Image from "next/image";
import Link from "next/link";
import "./page.css";
// import introImage from "../public/image.png"; // Ensure you place the image in the public folder

export default function Intro() {
  return (
    <>
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
                  fill-rule="evenodd"
                  d="M7.293 1.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L8 3.414 2.707 9.707a1 1 0 0 1-1.414-1.414l7-7z"
                />
              </svg>
            </Link>
          </div>
          <div className="buttons">
            <button className="btn">Sign In</button>
            <button className="btn">Sign Up</button>
          </div>
        </header>
        <section className="intro-section">
          {/* <Image
          src={introImage}
          alt="StockStash Introduction"
          className="intro-image"
        /> */}
          <div className="intro-text">
            <h1>Welcome to StockStash</h1>
            <p>
              Our innovative pantry management app that helps you keep track of
              all your groceries with ease.
            </p>
            <p>Developed by M. Ahmad and Prabh.</p>
          </div>
        </section>
      </main>
    </>
  );
}
