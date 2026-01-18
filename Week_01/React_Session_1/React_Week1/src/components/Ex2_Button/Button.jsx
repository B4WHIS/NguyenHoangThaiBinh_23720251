import "./Button.css";

function Button({ type, label }) {
  return <button className={`btn btn-${type}`}>{label}</button>;
}

export default Button;
