import React from 'react'

const ButtonComponent = ({color}) => {
    return (
        <div className="form-button">
            <button style={{backgroundColor: color}}>create</button>
        </div>
    )
}

export default ButtonComponent