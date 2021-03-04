import React from 'react'

function InputField(props) {
    return (
        <div className="col-md-6">    
            <div className="form-group">
                <label htmlFor={props.name}>{props.title}{props.required ? "*" : null}</label>
                <input 
                    type={props.type} 
                    name={props.name} 
                    id={props.name} 
                    className="form-control" 
                    required={props.required} 
                    value={props.value} 
                    onChange={props.onClick}
                />
            </div>
        </div>
    )
}

export default InputField
