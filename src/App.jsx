import SmoothScroll from "smooth-scroll"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {transitions, positions, Provider as AlertProvider} from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import "../src/assets/styles/styles.scss"
import ScrollOnTop from "./utils/ScrollOnTop"
import Home from "./pages/home"

import "animate.css/animate.min.css"

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
