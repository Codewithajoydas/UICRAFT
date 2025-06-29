import "./style.css";

const Button = ({ text, type, style = [], loading, showIcon,icon }) => {
  return (
    <button className={type} style={style}>
      {loading ? <span className="loading"></span> : null}
      {showIcon ? icon : null}
      {text}
    </button>
  );
};
export default Button;
