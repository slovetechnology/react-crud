import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'

const FormComponent = ({updateMessage}) => {
    // const [text, setText] = useState('')
    // const [author, setAuthor] = useState('')
    const [forms, setForms] = useState({
        title: '',
        author: '',
        price: '',
        stock: ''
    })
    const [aval, setAval] = useState(false)
    const handleForms = event => {
        setForms({
            ...forms,
            [event.target.name]: event.target.value
        })
    }
    const submitForm = event => {
        event.preventDefault()
        if(!forms.title) return updateMessage(true, 'Book title is required', 'red')
    }
    return (
        <form onSubmit={submitForm}>
            <div className="title">Add new Book </div>
            {/* <div className="form-container">
                <div className="">book title</div>
                <input value={text} onChange={(event) => setText(event.target.value)} type="text" className="input" />
            </div> */}
            <div className="form-container">
                <div className="">book title</div>
                <input onChange={handleForms} name="title" value={forms.title} type="text" className="input" />
            </div>
            <div className="form-container">
                <div className="">book author</div>
                <input type="text" onChange={handleForms} name="author" value={forms.author} className="input" />
            </div>
            <div className="form-container">
                <div className="">book price</div>
                <input type="number" onChange={handleForms} name="price" value={forms.price} className="input" />
            </div>
            <div className="form-container">
                <div className="">stock</div>
                <input type="number" onChange={handleForms} name="stock" value={forms.stock} className="input" />
            </div>
            <div className="form-container">
                <div className="">is avaialble?</div>
                <label>
                    <input type="checkbox" className="" /> <span>Available</span>
                </label>
            </div>
            <ButtonComponent color="rgb(2, 13, 94)" />
        </form>
    )
}

export default FormComponent