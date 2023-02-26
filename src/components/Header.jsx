import React from 'react'; //para tener todas las funciones de react disponibles

function Header(){
  //Aquí antes del return puede ir codigo Js de toda la vida
  let edad = 18;
  let mensaje;
  if(edad >= 18){
    mensaje = 'Eres mayor de edad'
  }else{
    mensaje = 'Eres menor de edad'
  }

  //En el return va lo que se mostrara en pantalla
  return(
    <h1 class="header">{mensaje}</h1>
  )
}

export default Header;