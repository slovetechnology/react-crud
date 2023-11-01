import React from 'react'

const NotifyComponent = ({text, color, closeView}) => {
    return (
        <div className={`notify ${color}`}>
            <div>
                <span> {text}</span>
                <div onClick={closeView} className="">x</div>
            </div>
        </div>
    )
}

export default NotifyComponent