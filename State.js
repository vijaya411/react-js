import React, { Component } from 'react'

export default class state extends Component {
    constructor(props) {
        super(props)
    
        this.State = {
             name:'vijju'
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({name:"vijju sapasetti"})
        },2000)
        return (
            <div>
                <h1>
                   {this.State.name}
                </h1>
            </div>
        )
    }
}
