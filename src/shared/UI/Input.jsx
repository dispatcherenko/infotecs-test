import style from "./UI.module.scss";

const Input = (props) => {
  return <input {...props} className={props.className + " " + style.input} />;
};

export default Input;
