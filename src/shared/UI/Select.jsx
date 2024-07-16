import style from "./UI.module.scss";

const Select = (props) => {
  return (
    <select {...props} className={props.className + " " + style.select}>
      {props.children}
    </select>
  );
};

export default Select;
