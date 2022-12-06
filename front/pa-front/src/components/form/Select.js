import styles from './Select.module.css'

function Select({text, name, handleOnChange, value}){
    return(
        <div className={styles.form_select}>
            <label htmlFor={name}>{text}</label>
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange}
                value={value || '0'}>
                <option value="0">Selecionar Solicitação</option>
                <option value="1">Acesso aos Dados</option>
                <option value="2">Portabilidade dos Dados</option>
                <option value="3">Retificação dos Dados</option>
                <option value="4">Eliminação, Bloqueio ou Anonimização</option>
                <option value="5">Revogação do Consentimento</option>
                <option value="6">Oposição ao Tratamento dos Dados</option>
            </select>
        </div>
    )
}

export default Select