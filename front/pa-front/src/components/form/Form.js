import React, { useState } from 'react'
import styles from './Form.module.css'
import Input from './Input'
import Radio from './Radio.js'
import Select from './Select'
import Submit from './Submit'
import TextArea from './TextArea'

function Form({handleSubmit}){
    const [formReq, setFormReq] = useState([])

    const submit = (e) => {
        e.preventDefault() //não deixa atualizar a página quando clica no botão
        handleSubmit(formReq)
    }

    function handleChange(e) {
        setFormReq({...formReq, [e.target.name]:e.target.value}) //recupera as alterações dos campos input
    }

    return (
        <div className={styles.form}>
            <form onSubmit={submit}>
                <ul>
                    <li className={styles.header}>
                        <div>
                            <h1>Requisição de Direitos Sobre Meus Dados</h1>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="radio-item-1">Requisitante:</label>
                        <Radio
                            value='t'
                            setGender='t'
                        />
                    </li>
                    <li>
                        <h1>Dados do Representante</h1>
                    </li>
                    
                    <Input 
                        type='text' 
                        text='Nome:' 
                        name='nameRep' 
                        placeholder='Nome Completo'
                        handleOnChange={handleChange}
                        value={formReq.nameRep ? formReq.nameRep : ''}
                    />
                    <Input 
                        type='text' 
                        text='CPF:' 
                        name='cpfRep' 
                        placeholder=''
                        handleOnChange={handleChange}
                        value={formReq.cpfRep ? formReq.cpfRep : ''}
                    />
                    <Input 
                        type='text' 
                        text='Email:' 
                        name='mailRep' 
                        placeholder=''
                        handleOnChange={handleChange}
                        value={formReq.mailRep ? formReq.mailRep : ''}
                    />
                    <Input 
                        type='file'
                        handleOnChange={handleChange} 
                        value=''
                    />
                    <Input 
                        type='text' 
                        text='Nome:' 
                        name='nameHol' 
                        placeholder='Nome Completo'
                        handleOnChange={handleChange}
                        value={formReq.nameHol ? formReq.nameHol : ''}
                    />
                    <Input 
                        type='text' 
                        text='CPF:' 
                        name='cpfHol' 
                        placeholder=''
                        handleOnChange={handleChange}
                        value={formReq.cpfHol ? formReq.cpfHol : ''}
                    />
                    <Input 
                        type='text' 
                        text='Email:' 
                        name='mailHol' 
                        placeholder=''
                        handleOnChange={handleChange}
                        value={formReq.mailHol ? formReq.mailHol : ''}
                    />
                    <Input 
                        type='file' 
                        handleOnChange={handleChange}
                        value=''
                    />
                    <Select 
                        name='typeReq'
                        text='Tipo de Solicitação'
                        handleOnChange={handleChange}
                        value={formReq.typeReq ? formReq.typeReq : ''}
                        
                    />           
                    <TextArea 
                        name='obs'
                        text='Observações'
                        handleOnChange={handleChange}
                        value={formReq.obs ? formReq.obs : ''}
                    />
                    <Submit text='Enviar'/>
                </ul>
            </form>
        </div>
    )
}

export default Form