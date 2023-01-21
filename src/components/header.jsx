import video from "../assets/videos/iphoneVideo.mp4"
import {AnimationOnScroll} from "react-animation-on-scroll"

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <video src={video} autoPlay loop muted></video>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <AnimationOnScroll delay={1000} animateOnce animateIn='animate__fadeIn'>
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                </AnimationOnScroll>
                <AnimationOnScroll delay={1500} animateOnce animateIn='animate__fadeIn'>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                </AnimationOnScroll>
                <AnimationOnScroll delay={2000} animateOnce animateIn='animate__fadeIn'>
                  <a href='#features' className='btn btn-custom btn-lg page-scroll'>
                    Learn More
                  </a>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
