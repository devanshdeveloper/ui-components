import styles from "./uiComp.module.scss"

function Ui(props) {
    return (
        <div className={styles.uiComp}>
            {props.children}
        </div>
    )
}

export default Ui