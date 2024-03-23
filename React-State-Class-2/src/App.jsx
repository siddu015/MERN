import { useState } from 'react'

import './App.css'
import Lottery from './Lottery.jsx'
import Form from './Form.jsx'
import CommentsForm from './CommentsForm.jsx'

function App() {
  return (
    <>
      {/*<Lottery n={3} winningSum={15}/>*/}
      {/*  <Form/>*/}
        <CommentsForm/>
    </>
  )
}

export default App
