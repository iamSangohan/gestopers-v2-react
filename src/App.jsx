import React from 'react'
import Header from './components/Header'

import "./styles/index.css"
import { Link } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <div className='container w-100 m-auto d-flex flex-column justify-content-center'>
        <h1 className='text-center'>Welcome !</h1>

        <div className="d-grid gap-2 col-4 mx-auto">
          <button className="btn btn-primary" type="button">
            <Link to="/login" className=''>Se connecter</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
