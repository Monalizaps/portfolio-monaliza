import './Sidebar.css';
import Logo from '../../assets/logo-m.png'
import { useState } from 'react';

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "show-menu" : ""}>
        <a href='#home' className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>

        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className='nav__link'>
                <span className="icon-home"></span>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#about" className='nav__link'>
                <span className="icon-user-following"></span>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#resume" className='nav__link'>
                <span className="icon-briefcase"></span>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#portfolio" className='nav__link'>
                <span className="icon-layers"></span>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#contact" className='nav__link'>
                <span className="icon-bubble"></span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav__footer">
          <span className="copyright">
            &copy; Monaliza Pereira, 2023
          </span>
        </div>
      </aside>

      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
        <i className='icon-menu'></i>
      </div>
    </>
  )
}

export default Sidebar
