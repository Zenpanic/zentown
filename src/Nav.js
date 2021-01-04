import React from 'react';
import { FormattedMessage } from 'react-intl';
import 'tachyons';
import './nav.css';
import LogoDark from './images/logo_t_dark.png';

const Nav = props => {

    return (
        <>
            <header className="bg-black-80 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l navbar">
                <img src={LogoDark} alt="ZenTown Logo" className="logo-nav" />

                <nav className="f6 fw6 ttu tracked">
                    <button className="nav-button dim dib mr3 white link" value="Home" onClick={() => props.changePage('Home')} title="Home">
                        <FormattedMessage
                            id="nav.home"
                            defaultMessage="Home" />
                    </button>
                    <button className="nav-button link dim white dib mr3" value="Services" onClick={() => props.changePage('Services')} title="Services">Services</button>
                    <button className="nav-button link dim white dib mr3" value="Portfolio" onClick={() => props.changePage('Portfolio')} title="Portfolio">Portfolio</button>
                    <button className="nav-button link dim white dib" value="Contact" onClick={() => props.changePage('Contact')} title="Contact">Contact</button>

                </nav>

            </header>
        </>
    )
}

export default Nav;