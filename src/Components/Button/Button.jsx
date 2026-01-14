import styles from "./Button.module.css"

function Button({type="primary", label="Button"}) {

    return(
        <button className={styles[type]}>{label}</button>
    );

}

export default Button;