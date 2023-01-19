import SmoothScroll from "smooth-scroll"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ScrollOnTop from "./utils/ScrollOnTop"
import Home from "./pages/home"

import "animate.css/animate.min.css"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  return (
    <div>
      <Router>
        <ScrollOnTop>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </ScrollOnTop>
      </Router>
    </div>
  )
}

export default App
