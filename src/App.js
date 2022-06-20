import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import styles from "../src/App.css"

export default function App() {
  function handleClick() {
    console.log("clicked")
  }

  return (
    <div className="container">
      <Navbar handleClick={handleClick} />
      <Main />
    </div>
  )
}
