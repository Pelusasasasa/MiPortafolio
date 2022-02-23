import React from 'react'
import "../css/navegacion.css"
import { NavLink} from "react-router-dom"
const Navegacion = () => {

  const desplegarMenu = ()=>{
    const despliegue = document.querySelector('.despliegue')
    console.log(despliegue.classList.toggle('none'))
    console.log(despliegue)
  }

  return (
    <div className='titulo'>
        <div className="logo">
            Agustin
        </div>

        <nav className="nav ">
                <NavLink to="About">Proyectos</NavLink>
                <NavLink to="Projects">Habilidades</NavLink>
                <NavLink to="Contact">Contacto</NavLink>
                
        </nav>
        <div className="nav-resposivo">
        <img src="./img/download.webp" alt="" onClick={desplegarMenu} />
        <div className="despliegue none">
            <NavLink to="About">Proyectos</NavLink>
            <NavLink to="Projects">Habilidades</NavLink>
            <NavLink to="Contact">Contacto</NavLink>
        </div>
        </div>
    </div>
  )
}

export default Navegacion