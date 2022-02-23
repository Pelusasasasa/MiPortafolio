import React, { useRef, useState } from 'react';
import "../css/contact.css";

const Contact = () => {
  const [contact, setContact] = useState({});


  const handleChange = (e)=>{
    const {name,value} = e.target;
    setContact({...contact,[name]:value})
  }

  const sendEmail = (e)=>{
    e.preventDefault()
    console.log(contact)
  }
  return (
    <section className='contact-section'>
      <form action="" onSubmit={(e)=>{sendEmail(e)}}>
        <legend>Formulario de Contacto</legend>
            <input onChange={handleChange} autoComplete='off' type="text" id='nombre' name='userEmail' placeholder='Nombre' />
            <input onChange={handleChange} autoComplete='off' type="email" placeholder='Email' name="email" id="email" />
            <input onChange={handleChange} autoComplete='off' type="text" name="emailTitle" id="emailTitle" placeholder='Asunto' />
            <textarea onChange={handleChange} name="emailDetails" id="emailDetails" placeholder='Drescripcion' cols="50" rows="10"></textarea>
            <button type="submit" id='Enviar' value="ENVIAR">Enviar</button>
      </form>

      <main>
            <legend>Redes Sociales</legend>
            <div className='redes'>
                <a target="_blank" href="https://www.facebook.com/agustin.lorenzatto"><img src="img/facebook.ico" alt ="Facebook" /></a>
                <a target="_blank" href="https://twitter.com/agustinpelu"><img src="img/twitter.ico" alt="Twitter" /></a>
                <a target="_blank" href="https://www.instagram.com/pelusaal/"><img src="img/instagram.ico" alt="Instagra" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/agustin-lorenzatto-a6b441204/"><img src="img/linkedin.ico" alt="Linkedin" /></a>
            </div>
      </main>
    </section>
  )
}

export default Contact