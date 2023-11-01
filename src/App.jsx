import { useState } from "react"
import BooksComponents from "./components/BooksComponents"
import FormComponent from "./components/FormComponent"
import NotifyComponent from "./components/NotifyComponent"


const App = () => {
  const [message, setMessage] = useState({
    status: false,
    text: '',
    color: ''
  })
  const books = [
    {
      title: 'things fall apart',
      author: 'chinua achebe',
      price: 6000,
      stock: 200,
      aval: true
    },
    {
      title: 'things fall apart',
      author: 'chinua achebe',
      price: 6000,
      stock: 200,
      aval: true
    },
    {
      title: 'things fall apart',
      author: 'chinua achebe',
      price: 6000,
      stock: 200,
      aval: true
    },
  ]
  const updateMessage = (status, text, color) => {
    setMessage({
      status: status,
      text: text,
      color: color
    })
  }
  return (
    <>
      {message.status &&
        <NotifyComponent
          text={message.text}
          color={message.color}
          closeView={() => setMessage({...message, status: false})}
        />}
      <div className="container">
        <div className="">
          <FormComponent
            updateMessage={updateMessage}
          />
        </div>
        <div className="">
          <div className="title">Library</div>
          {books.map((item, index) => (
            <BooksComponents key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App