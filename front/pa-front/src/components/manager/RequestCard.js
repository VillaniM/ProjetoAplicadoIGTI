import React from 'react'
import styles from './RequestCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function RequestCard({id, name, type, status, date, hadleRemove}){
    return (
        <div>
            <h4>{name}</h4>
            <p>
                <span>Tipo</span>{type}
            </p>
            <div>Editar</div>
            <div>Remover</div>
        </div>
    )
}

export default RequestCard