import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ScrollOnTop from "./utils/ScrollOnTop";
import Home from "./pages/home";
import "./assets/styles/styles.scss";
import "./assets/styles/stylesDark.scss";

import "animate.css/animate.min.css";
import { useEffect, useState } from "react";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_LEFT,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [Theme, setTheme] = useState("white");

  //change variable local storage 'theme'
  const changeTheme = (value) => {
    localStorage.setItem("theme", value);
    setTheme(value);
  };

  useEffect(() => {
    setTheme(localStorage.getItem("theme") === "dark" ? "dark" : "white");
  }, []);

  return (
    <div className={`App ${Theme}`}>
      <Router>
        <ScrollOnTop>
          <AlertProvider template={AlertTemplate} {...options}>
            <Routes>
              <Route path='/' element={<Home theme={Theme} setTheme={changeTheme} />} />
            </Routes>
          </AlertProvider>
        </ScrollOnTop>
      </Router>
    </div>
  );
};

export default App;
