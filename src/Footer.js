import React from 'react'
import "./css/footer.css"
const Footer = () => {
  return (
    <footer>
        <div>
          <h4>Agustin</h4>
          <p>copy</p>
        </div>
        <div className='footer-img'>
        <a target="_blank" href="https://github.com/Pelusasasasa"><img src="img/github.ico" alt ="Github" /></a>
                <a target="_blank" href="https://twitter.com/agustinpelu"><img src="img/twitter.ico" alt="Twitter" /></a>
                <a target="_blank" href="https://www.instagram.com/pelusaal/"><img src="img/instagram.ico" alt="Instagra" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/agustin-lorenzatto-a6b441204/"><img src="img/linkedin.ico" alt="Linkedin" /></a>
        </div>
    </footer>
  )
}

export default Footer