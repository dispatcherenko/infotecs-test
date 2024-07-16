import Button from "@shared/UI/Button";
import { HandySvg } from "handy-svg";
import close from "@shared/images/close.svg";
import "./Modal.scss";

// Модальное окно
const Modal = (props) => {
  return (
    <div className="modal__bg" onClick={props.onClose}>
      <div className="modal__fg" onClick={(e) => e.stopPropagation()}>
        {props.closable && (
          <Button className="modal__close" onClick={props.onClose}>
            <HandySvg className="modal__img" src={close} />
          </Button>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
