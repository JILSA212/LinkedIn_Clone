import React from 'react'
import './InputOption.css';

function InputOption({Icon, title, color}) {
    return (
        <div>
            <div className="inputOption">
                <Icon style={{color: color}} />
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default InputOption
