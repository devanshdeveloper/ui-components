import styles from "./modal.module.scss";
import btn from "../buttons/button.module.scss";
import CloseSvg from "../../svgs/CloseSvg";

function Modal(props) {
  return (
    <div className="wrapper">
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={props.closeEvent}>
          <CloseSvg/>
        </button>
        <h3 className={styles.modalTitle}>{props.title}</h3>
        <p className={styles.modalBody}>{props.body}</p>
        <div className={styles.btns}>
            <button className={btn.btnMd} onClick={props.acceptEvent}>Explore</button>
            <button className={btn.btnTextMd} onClick={props.cancelEvent}>Remind me later</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
