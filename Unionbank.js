import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    let data={
        firstName:'vijju',
        lastName:'ram'
    }
    return (
        <div>
            <Andhrabank info={data}/> 
            <Corporationbank info={data}/>

            
        </div>
    )
}
