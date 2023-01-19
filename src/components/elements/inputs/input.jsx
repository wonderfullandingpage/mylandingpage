import React from "react"
import "./styles.scss"

function InputSimple(props) {
  return (
    <div className='containerInputSimple'>
      <div className='group'>
        <input required='' type='text' className='input' />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label>{props.name}</label>
      </div>
    </div>
  )
}

export default InputSimple
