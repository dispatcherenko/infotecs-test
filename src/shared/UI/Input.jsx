import style from "./UI.module.scss";

// Пользовательский input
const Input = (props) => {
  return <input {...props} className={props.className + " " + style.input} />;
};

export default Input;
