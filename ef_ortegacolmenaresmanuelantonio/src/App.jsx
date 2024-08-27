import { Fragment } from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Banner />
     <Form />
     <Footer />
    </>
  )
}

export default App
