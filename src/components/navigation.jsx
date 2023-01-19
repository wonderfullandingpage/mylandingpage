import {useEffect, useState} from "react"

export const Navigation = (props) => {
  const [navBarBackground, setNavBarBackgorund] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavBarBackgorund(true)
    } else {
      setNavBarBackgorund(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)

    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [])

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
            {" "}
            <span className='sr-only'>
              Toggle navigation
            </span> <span className='icon-bar'></span> <span className='icon-bar'></span>{" "}
            <span className='icon-bar'></span>{" "}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            My Landing Page
          </a>{" "}
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
              <div className='dropdown'>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Dropdown button
                </button>
                <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                  <p className='dropdown-item' href='#213' style={{margin: "auto", width: "50%"}}>
                    <i className='bi bi-flag'></i> Español
                  </p>
                  <p className='dropdown-item' href='#2123' style={{margin: "auto", width: "50%"}}>
                    <i className='bi bi-flag-fill'></i> English
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
