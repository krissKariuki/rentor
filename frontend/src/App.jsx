import { useState } from 'react'
import './styles/utility.css'
import './styles/App.css'
import Homepage from './components/Homepage'
import Detailspage from './components/Detailspage'

export default function App() {

  const [showDetailspage, setShowDetailspage] = useState(false)
  const [showHomepage, setShowHomePage] = useState(true)

  const handlePropertycardClick=()=>{
    setShowDetailspage(!showDetailspage)
    setShowHomePage(!showHomepage)
  }

  return (
    <>
      {showHomepage && <Homepage handlePropertycardClick={handlePropertycardClick}/>}
      {showDetailspage && <Detailspage/>}
    </>
  )
}