import React from 'react'

import { About ,Footer,Header,Work,Skills,Testemonial } from './container'
import { Navbar } from './components'
import "./App.scss"
const App = () => {
  return (
    
           <div className='app'>
             <Navbar/>
             <Header/>
             <About/>
             <Work/>
             <Skills/>
             <Testemonial/>
             <Footer/>

           </div>
  )
}

export default App