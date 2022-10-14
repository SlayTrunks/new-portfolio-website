import './index.scss'
import { Link,NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome,faTools,  faUser ,  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () =>{
    return <>
    <div className="nav-bar">
        <Link to='/' className='logo'>
            <img src={LogoS} alt="logo" />
            {/* <img src={LogoSubtitle} alt="logo-subtitle" /> */}
        </Link>
        <nav>
        <NavLink exact='true'  to='/' className='home' end>
            <FontAwesomeIcon icon={faHome} color='#f4e2e3'/>
        </NavLink>
        <NavLink exact='true'  to='/about' className='about-link'>
            <FontAwesomeIcon icon={faUser}  color='#f4e2e3' to='/about'/>
        </NavLink>
        <NavLink exact='true'  to='/skills' className='skills'>
            <FontAwesomeIcon icon={faTools} color='#f4e2e3' to='/skills'/>
        </NavLink>
        <NavLink exact='true'  to='/contact' className='contact-link'>
            <FontAwesomeIcon icon={faEnvelope}  color='#f4e2e3' to='contact'/>
        </NavLink>

        <ul>
            <li >
                <a href="https://linkedin.com/slaytrunks" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin}  color='#f4e2e3' className='linkedin' />
                </a>
            </li>
            <li >
                <a href="https://github.com/slaytrunks" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} color='#f4e2e3' className='github' />
                </a>
            </li>
            <li >
                <a href="https://twitter.com/slaytrunks" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faTwitter} color='#f4e2e3' className='twitter' />
                </a>
            </li>
        </ul>
        </nav>
        
    </div>
    </>
}
export default Sidebar