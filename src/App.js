import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

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
