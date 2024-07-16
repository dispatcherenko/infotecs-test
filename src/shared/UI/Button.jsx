import style from "./UI.module.scss";

const Button = (props) => {
  return (
    <button {...props} className={props.className + " " + style.button}>
      {props.children}
    </button>
  );
};

export default Button;
