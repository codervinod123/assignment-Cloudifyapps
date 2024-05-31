import React, { useState } from 'react'
import "./Home.css"
import Navbar from './Navbar'
import QuestionPaper from './QuestionPaper'


const Home = () => {

  return (
    <div className='h-[100vh] w-[100vw] bg-gray-500 flex flex-col'>
      <div>
        <Navbar />
      </div>
      <QuestionPaper/>
    </div>
  )
}

export default Home




