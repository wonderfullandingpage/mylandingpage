import {useLocation} from "react-router-dom"
import {useEffect} from "react"

function ScrollOnTop({children}) {
  const {pathname} = useLocation()

  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual"
    }

    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export default ScrollOnTop
