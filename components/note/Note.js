import styles from "./note.module.scss";

function Note(props) {
  return (
      
    <div className={styles.note}>
      <div className={styles.noteBodySuccess}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.body}>{props.body}</p>
      </div>
      <div className={styles.controls}></div>
    </div>
  );
}

export default Note;
