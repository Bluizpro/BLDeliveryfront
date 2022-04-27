import './style.css';
import {ReactComponent as FacebookIcon}from './facebook.svg';
import {ReactComponent as GitHubIcon}from './github.svg';
import {ReactComponent as LinkedinIcon}from './linkedin.svg';


function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.facebook.com/brunoluizperez" target="_new">
                    <FacebookIcon />
                </a>
                <a href="https://www.linkedin.com/in/bruno-perez-962309190/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://github.com/Bluizpro" target="_new">
                     <GitHubIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;