import React, { useEffect, useState } from 'react'
import "../css/home.css"
const Home = () => {
  const [state, setState] = useState("")
  useEffect(()=>{
    setTimeout(() => {
      setState("transition")
    }, 5000);
  },[])
  return (
    <header className={state}>
            <img src="./img/foto.jpg" alt="Mi Foto" />
            <div className="titles">
                <h2>Agusin Lorenzatto</h2>
                <h3>FrontEnd Developer Junior</h3>

                <p>Hola! Soy un desarrolador web frontend, con gran </p>
                <p>interes por las tecnologias de programacion</p>
            </div>
    </header>
  )
}

export default Home