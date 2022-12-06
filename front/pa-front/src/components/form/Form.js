import { useState } from 'react'
import styles from './Form.module.css'
import Input from './Input'
import Radio from './Radio.js'
import Select from './Select'
import Submit from './Submit'
import TextArea from './TextArea'

function createPost(formReq){
    fetch('http://localhost:8080/request', {
        metod: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formReq.data),
     })
        .then((resp) => resp.json())
        .then((data) =>{
            const result = JSON.parse('');
            console.log(result);
  
        })
        .catch(err => console.log(err))
    
  }

function Form(){
    const [formReq, setFormReq] = useState({})

    const submit = (e) => {
        e.preventDefault()
        createPost(formReq)
    }

    function handleChange(e) {
        setFormReq({...formReq, [e.target.name]:e.target.value})
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
                        value={formReq.nameRep}
                    />
                    <Input 
                        type='text' 
                        text='CPF:' 
                        name='cpfRep' 
                        placeholder=''
                        handleOnChange={handleChange}
                        value={formReq.cpfRep}
                    />
                    <Input 
                        type='text' 
                        text='Email:' 
                        name='mailRep' 
                        placeholder=''
                        handleOnChange={handleChange}
                        value={formReq.mailRep}
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
                        value={formReq.nameHol}
                    />
                    <Input 
                        type='text' 
                        text='CPF:' 
                        name='cpfHol' 
                        placeholder=''
                        handleOnChange={handleChange}
                        value={formReq.cpfHol}
                    />
                    <Input 
                        type='text' 
                        text='Email:' 
                        name='mailHol' 
                        placeholder=''
                        handleOnChange={handleChange}
                        value={formReq.mailHol}
                    />
                    <Input 
                        type='file' 
                        handleOnChange={handleChange}
                        value=''
                    />
                    <Select 
                        name='typeReq'
                        text='Tipo de Solicitação'
                        value='0'
                        handleOnChange={handleChange}
                    />           
                    <TextArea 
                        name='obs'
                        text='Observações'
                        handleOnChange={handleChange}
                        value={formReq.obs}
                    />
                    <Submit handleSubmit={createPost} text='Enviar'/>
                </ul>
            </form>
        </div>
    )
}

export default Form