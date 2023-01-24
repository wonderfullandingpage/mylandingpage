import { useEffect, useState } from "react"

export const Navigation = (props) => {
  const [navBarBackground, setNavBarBackgorund] = useState(false)
  const [bgBlack, setBgBlack] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavBarBackgorund(true)
    } else {
      setNavBarBackgorund(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)

    setBgBlack(localStorage.getItem("bgBlack") === "true" ? true : false)

    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [])

  const changeBg = async (value) => {
    await localStorage.setItem("bgBlack", value)
    setBgBlack(value)
    window.location.reload()
  }

  return (
    <nav id='menu' className={`navbar  navbar-fixed-top active-${navBarBackground}`}>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Toggle navigation</span> <span className='icon-bar'></span>{" "}
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            My Landing Page
          </a>
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <div
                className='page-scroll'
                style={{
                  cursor: "pointer",
                  paddingLeft: "90%",
                  paddingTop: "17px",
                  paddingBottom: "15px",
                }}
              >
                {!bgBlack ? (
                  <div onClick={() => changeBg(true)}>
                    <i class='fa fa-sun-o'></i>
                  </div>
                ) : (
                  <div onClick={() => changeBg(false)}>
                    <i class='fa fa-moon-o'></i>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
