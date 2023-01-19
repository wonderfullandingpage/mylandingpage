import {AnimationOnScroll} from "react-animation-on-scroll"

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <AnimationOnScroll
                  delay={i * 130}
                  animateOnce
                  animateIn='animate__fadeInBottomRight'
                >
                  <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </AnimationOnScroll>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  )
}
