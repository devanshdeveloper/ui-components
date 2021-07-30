import DeleteIcon from "../svgs/DeleteIcon";
import styles from "./note.module.scss";
import iconBtn from "../ui/buttons/iconButton.module.scss";
import PinIcon from "../svgs/PinIcon";

function Note(props) {
  return (
    <div className={styles.note}>
      <div className={styles.noteBodySuccess}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.body}>{props.body}</p>
      </div>
      <div className={styles.controls}>
        <button className={iconBtn.btn}>
          <DeleteIcon classes={iconBtn.icon} />
        </button>
        <button className={iconBtn.btn}>
          <PinIcon classes={iconBtn.icon} stroke={props.isPinned ? "#5f2eea" : "#000"}/>
        </button>
      </div>
    </div>
  );
}

export default Note;
