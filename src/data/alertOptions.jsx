import {transitions, positions} from "react-alert"

const optionsAlert = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_LEFT,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

const AlertTemplate = ({style, options = optionsAlert, message, close}) => (
  <div style={style}>
    {options.type === "info" && "!"}
    {options.type === "success" && ":)"}
    {options.type === "error" && ":("}
    {message}
    <button onClick={close}>X</button>
  </div>
)

export {AlertTemplate}
