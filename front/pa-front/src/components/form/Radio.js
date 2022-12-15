import React from 'react'
import styles from './Radio.module.css'

function Radio({ value, setGender }){
  return(
    <div>
        <div onChange={setGender.defaultChecked} className={styles.form_radio}>
          <div>
            <input type="radio" value="t" name="gender" defaultChecked={value ==="t"} /> Titular dos Dados
          </div>
          <div>
            <input type="radio" value="r" name="gender" defaultChecked={value ==="r"}/> Representante Legal
          </div>
        </div>
    </div>    
  )
  
}

export default Radio;