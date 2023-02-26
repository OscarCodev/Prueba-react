import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  let año = new Date().getFullYear();

  return (
    <>
      <Header />
      <Footer 
        titulo = "Footer main"
        numero = "200"
        otroProp = "Mi otro prop"
      />
      <Footer 
        titulo = "Este es mi segundo Foooter"
        numero = "400"
        otroProp = "Mi otrito"
        fecha = {año}
      />
    </>
  )
}

export default App
