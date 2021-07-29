import CloseSvg from "../../svgs/CloseSvg";
import styles from "./popover.module.scss"

function Popover(props) {
  return (
    <div className={styles.popoverError}>
      <p className={styles.popoverBody}>{props.popBody}</p>
      {props.closeEvent !== undefined ? (
        <button className={styles.popoverBtn} onClick={props.closeEvent}>
          <CloseSvg stroke="#ffffff"/>
        </button>
      ) : null}
    </div>
  );
}

export default Popover;
