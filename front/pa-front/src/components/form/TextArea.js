import styles from './TextArea.module.css'

function TextArea({text, name, handleOnChange, value}){
    return(
        <div className={styles.form_textarea}>
            <label htmlFor={name}>{text}</label>
            <textarea 
                name={name} 
                id={name} 
                onChange={handleOnChange}
                value={value} 
            />
        </div>
    )
}

export default TextArea