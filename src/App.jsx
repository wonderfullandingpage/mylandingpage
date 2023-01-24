import SmoothScroll from "smooth-scroll"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { transitions, positions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import ScrollOnTop from "./utils/ScrollOnTop"
import Home from "./pages/home"

import "animate.css/animate.min.css"
import { useEffect, useState } from "react"

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_LEFT,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [bgBlack, setBgBlack] = useState(false)

  useEffect(() => {
    const myValue = localStorage.getItem("bgBlack")
    console.log("myValue", typeof myValue)
    setBgBlack(myValue === "true" ? true : false)
    if (myValue === "true") {
      console.log("trueee")
      import("../src/assets/styles/stylesBlack.scss")
    } else {
      console.log("falseee")
      import("../src/assets/styles/styles.scss")
    }
  }, [bgBlack])

  return (
    <div>
      <Router>
        <ScrollOnTop>
          <AlertProvider template={AlertTemplate} {...options}>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </AlertProvider>
        </ScrollOnTop>
      </Router>
    </div>
  )
}

export default App
