import React from 'react'

function CheckboxField(props) {
    return (
        <div>
            <label className="d-flex">
                <input type="checkbox" name={props.name} className="checkbox"/>
                <span className="checkbox-label">{props.text.map((obj, index)=>{return <span key={index}>{obj}</span>})}</span>
            </label>
        </div>
    )
}

export default CheckboxField