import React from 'react'

const Footer = ({titulo, numero, otroProp, fecha}) => {
  return(
    <>
    <footer>
      {titulo}
    </footer>
    <h2>{numero}</h2>
    <h3>{otroProp}</h3>
    <h3>El año es {fecha}</h3>
    </>
  )
}

export default Footer