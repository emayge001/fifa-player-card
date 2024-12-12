import PropTypes from "prop-types"
import "./CustomButton.css"

const CustomButton = ({btnFunc, btnClassName, bgColor, txtColor, children}) => {
    const btnStyle = {
        backgroundColor: bgColor || "blue",
        color: txtColor || "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px"
    }
  return (
    <button onClick={btnFunc} className={btnClassName} style={btnStyle}>{children}</button>
  )
}

CustomButton.propTypes = {
  bgColor: PropTypes.string,
  btnClassName: PropTypes.string,
  btnFunc: PropTypes.func,
  children: PropTypes.any,
  txtColor: PropTypes.string
}

export default CustomButton