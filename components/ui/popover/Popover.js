import CloseSvg from "../../svgs/CloseSvg";
import s from "./popover.module.scss";

function Popover(props) {
  function checkTheme(theme) {
    switch (theme) {
      case "error":
        return s.popoverError;
        break;
      case "success":
        return s.popoverSuccess;
        break;
        default:
          return s.popover;
        break;
    }
  }
  return (
    <div className={checkTheme(props.theme)}>
      <p className={s.popoverBody}>{props.body}</p>
      {props.closeEvent !== undefined ? (
        <button className={s.popoverBtn} onClick={props.closeEvent}>
          <CloseSvg stroke="#ffffff" />
        </button>
      ) : null}
    </div>
  );
}

export default Popover;
