import { useState } from 'react'

import './App.css'
import Lottery from './Lottery.jsx'
import Form from './Form.jsx'
import CommentsForm from './CommentsForm.jsx'
import Counter from "./Counter.jsx";
import Joker from "./Joker.jsx";

function App() {
  return (
    <>
      <Lottery n={3} winningSum={15}/>
        <Form/>
        <CommentsForm/>
      {/*  <Counter/>*/}
        <Joker/>
    </>
  )
}

export default App
