import React, {useState} from 'react'
import './App.css'
import Title from './components/Title'

function App() {

  const [name, setName] = useState('Priyanshu');
  const [date, setDate] = useState('Date');

  const dateChange = (event) => {
    setDate(event.target.value)
  }
  const nameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-5'>Signature app</h1>
      <Title text={name}/>
      <Title text={date}/>
      <p className="text-center mt-5 text-lg mx-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nulla esse minima, enim ab quis ut autem magnam! Laboriosam magni at, nulla nihil blanditiis esse. Non, vero. Culpa in, ratione deleniti, assumenda quaerat nostrum enim eius architecto ullam dolores odio a repudiandae corporis saepe porro modi ad ipsam similique quas nesciunt placeat dignissimos vero doloribus! Repudiandae accusantium ea dolorum minus, architecto, ipsa voluptas eaque dicta est eveniet quam? Assumenda quidem ipsum at atque beatae iusto maxime debitis. Eligendi atque ipsam, quisquam eum cumque dolorum rerum quibusdam tempore reprehenderit. Velit quas sequi iusto suscipit repellendus error nisi in recusandae? Deserunt, ratione.</p>
      <div className="flex justify-center input-boxes">
        <input className="inputs" type="date" value={date} onChange={dateChange}></input>
        <input className="inputs" type="text" value={name} placeholder="Name" onChange={nameChange}></input>
      </div>  
    </>
  )
}

export default App
