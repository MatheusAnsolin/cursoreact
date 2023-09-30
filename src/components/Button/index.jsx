import './styles.css';

import { Component } from "react";

export class Button extends Component{
    render(){
        const {text, onClick} = this.props;
        
        return(
            
            <button 
                disabled
                className="button"
                onClick={onClick}>
            {text}
            </button>
        )
    }
}