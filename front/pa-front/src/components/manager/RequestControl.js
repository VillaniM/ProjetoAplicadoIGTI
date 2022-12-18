import React, { useState, useEffect } from 'react'
import RequestCard from './RequestCard'

function RequestControl(){

    const[resquests, setRequests] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/request', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setRequests(data)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            {resquests.length > 0 &&
            resquests.map((requisition) =>(
                <RequestCard 
                    id={requisition.requestId}
                    name={requisition.nameHol}
                    type={requisition.typeReq}
                    status={requisition.status}
                    date={requisition.date}
                    //key={requisition.requisition.requestId}
                />
            ))}
            
        </div>
    )
}

export default RequestControl