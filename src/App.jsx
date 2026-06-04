import { useState } from 'react'
import Header from './Components/Header'
import StudentList from './Pages/StudentList'
import StudentForm from './Pages/StudentForm'

import './App.css'

function App() {
  

  return (
    <>
      <div>
        <Header/>
      </div>
     
      <div>
        <StudentForm></StudentForm>
      </div>
    </>
  )
}

export default App
