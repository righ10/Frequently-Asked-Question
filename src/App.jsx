import { useState } from 'react'
import data from "/data.js"
import './App.css'
import Header from "./Header.jsx"
import FaqItems from "../src/faqItems.jsx"


function App() {
  const faqEl = data.map((faq) => {
    return(
      <FaqItems
        question = {faq.question}
        answer = {faq.answer}
      />
    )
  })


  return (
    <>
      <div className='container'>
        <Header/>
        {faqEl}
  
      </div>
      
    </>
  )
}

export default App
