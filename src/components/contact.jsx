import { useState } from "react";
import emailjs from "emailjs-com";
import InputSimple from "./elements/inputs/input";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useAlert } from "react-alert";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const alert = useAlert();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...state });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log("result.text", result.text);
          alert.success("Message sent, we will get back to you shortly");
          clearState();
        },
        (error) => {
          alert.error("An error occurred, Please try again");
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <AnimationOnScroll delay={130} animateOnce animateIn='animate__fadeIn'>
                  <p>
                    Please fill out the form below to send us an email and we will get back to you
                    as soon as possible.
                  </p>
                </AnimationOnScroll>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <AnimationOnScroll
                        delay={250}
                        animateOnce
                        animateIn='animate__fadeInBottomLeft'
                      >
                        <InputSimple
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          placeholder='Name'
                          required
                          onChange={handleChange}
                        />
                      </AnimationOnScroll>
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <AnimationOnScroll
                        delay={350}
                        animateOnce
                        animateIn='animate__fadeInBottomLeft'
                      >
                        <InputSimple
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Email'
                          required
                          onChange={handleChange}
                        />
                      </AnimationOnScroll>
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <AnimationOnScroll delay={550} animateOnce animateIn='animate__fadeInBottomLeft'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Message'
                      required
                      onChange={handleChange}
                    ></textarea>
                  </AnimationOnScroll>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <AnimationOnScroll delay={550} animateOnce animateIn='animate__fadeInBottomLeft'>
                  <button type='submit' className='btn btn-custom btn-lg'>
                    Send Message
                  </button>
                </AnimationOnScroll>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <AnimationOnScroll delay={150} animateOnce animateIn='animate__fadeInBottomRight'>
                <h3>Contact Info</h3>
              </AnimationOnScroll>
              <AnimationOnScroll delay={250} animateOnce animateIn='animate__fadeInBottomRight'>
                <p>
                  <span>
                    <i className='fa fa-map-marker'></i> Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </AnimationOnScroll>
            </div>
            <div className='contact-item'>
              <AnimationOnScroll delay={350} animateOnce animateIn='animate__fadeInBottomRight'>
                <p>
                  <span>
                    <i className='fa fa-phone'></i> Phone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </AnimationOnScroll>
            </div>
            <div className='contact-item'>
              <AnimationOnScroll delay={450} animateOnce animateIn='animate__fadeInBottomRight'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
