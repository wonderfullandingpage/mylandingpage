import {AnimationOnScroll} from "react-animation-on-scroll"
export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <AnimationOnScroll delay={200} animateOnce animateIn='animate__rotateInDownLeft'>
              <img src='img/about.jpg' className='img-responsive' alt='' />
            </AnimationOnScroll>
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>About Us</h2>

              <p>{props.data ? props.data.paragraph : "loading..."}</p>

              <h3>Why Choose Us?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <AnimationOnScroll
                            delay={i * 350}
                            animateOnce
                            animateIn='animate__fadeInUp'
                          >
                            <li key={`${d}-${i}`}>{d}</li>{" "}
                          </AnimationOnScroll>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <AnimationOnScroll
                            delay={i * 350}
                            animateOnce
                            animateIn='animate__fadeInUp'
                          >
                            <li key={`${d}-${i}`}> {d}</li>{" "}
                          </AnimationOnScroll>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
