import React, { useState } from 'react'
import "./Home.css"
import Navbar from './Navbar'
import QuestionPaper from './QuestionPaper'


const Home = () => {

  return (
    <div className='h-[100vh] w-[100vw] bg-gray-500 flex flex-col bg-image '>
      <div>
        <Navbar />
      </div>
      <QuestionPaper/>
      <div className='text-gray-100 text-[12px] absolute bottom-[10px] left-[10px]'>
         Powered by CLOUDIFYAPPS
      </div>
    </div>
  )
}

export default Home




