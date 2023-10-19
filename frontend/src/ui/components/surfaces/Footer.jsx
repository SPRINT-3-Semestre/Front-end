import { Link } from 'react-router-dom';
import style from '../../styles/Footer.module.css';
function Footer() {
  return (
    <>
      <footer className={`row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top ${style.bg_color}`}>
        <div className="col-2 col-md-3 mb-3">
        </div>

        <div className="col-2 col-md-3 mb-3">
          <h5>Email</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 text-muted">financeiro@editmatch.com</li>
            <li className="nav-item mb-2 text-muted">suporte@editmatch.com</li>
          </ul>
        </div>

        <div className="col-2 col-md-3 mb-3">
          <h5>Telefones</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 text-muted">(11) 4002-8922</li>
            <li className="nav-item mb-2 text-muted">(11) 94002-8922</li>
          </ul>
        </div>

        <div className="col-2 col-3 mb-2">
          <h5>Whatsapp</h5>
          <ul className="nav flex-column">
            <Link to="https://contate.me/editmatch" target='_blank'>
              <li className="nav-item mb-2 text-muted">(11) 94002-8922</li>
            </Link>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer;