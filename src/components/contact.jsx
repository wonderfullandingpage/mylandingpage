import { useState } from 'react'
import emailjs from '@emailjs/browser'

const initialState = {
  name: '',
  email: '',
  message: '',
}

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input
  const div = document.createElement('div')
  div.textContent = input
  return div.innerHTML
}

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isValidName = (name) => {
  return name.length >= 2 && name.length <= 100
}

const isValidMessage = (message) => {
  return message.length >= 10 && message.length <= 1000
}

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    const sanitizedValue = sanitizeInput(value)
    setState((prevState) => ({ ...prevState, [name]: sanitizedValue }))
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!isValidName(name)) {
      newErrors.name = '姓名长度应在 2-100 个字符之间'
    }
    
    if (!isValidEmail(email)) {
      newErrors.email = '请输入有效的邮箱地址'
    }
    
    if (!isValidMessage(message)) {
      newErrors.message = '消息长度应在 10-1000 个字符之间'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const clearState = () => {
    setState({ ...initialState })
    setErrors({})
    setSubmitStatus(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setSubmitStatus('error')
      return
    }
    
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS 配置缺失，请检查环境变量')
      setSubmitStatus('error')
      return
    }
    
    setSubmitStatus('loading')
    
    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(
        (result) => {
          console.log('消息发送成功')
          clearState()
          setSubmitStatus('success')
        },
        (error) => {
          console.error('消息发送失败:', error.text)
          setSubmitStatus('error')
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' noValidate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder='Name'
                        value={name}
                        required
                        onChange={handleChange}
                        maxLength={100}
                        disabled={submitStatus === 'loading'}
                      />
                      {errors.name && (
                        <p className='help-block text-danger'>{errors.name}</p>
                      )}
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder='Email'
                        value={email}
                        required
                        onChange={handleChange}
                        disabled={submitStatus === 'loading'}
                      />
                      {errors.email && (
                        <p className='help-block text-danger'>{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows='4'
                    placeholder='Message'
                    value={message}
                    required
                    onChange={handleChange}
                    maxLength={1000}
                    disabled={submitStatus === 'loading'}
                  ></textarea>
                  {errors.message && (
                    <p className='help-block text-danger'>{errors.message}</p>
                  )}
                </div>
                {submitStatus === 'success' && (
                  <div className='alert alert-success' role='alert'>
                    消息发送成功！我们会尽快回复您。
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className='alert alert-danger' role='alert'>
                    消息发送失败，请稍后重试。
                  </div>
                )}
                <button 
                  type='submit' 
                  className='btn btn-custom btn-lg'
                  disabled={submitStatus === 'loading'}
                >
                  {submitStatus === 'loading' ? '发送中...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
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
  )
}
