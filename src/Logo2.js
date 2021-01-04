import React from 'react';
import './logo2.css';
import LogoSecond from './images/logo_t.png';

const Logo2 = (props) => {
    return (
        <div className="logo2-container">

            <div className="page-info-container">
                {props.tagline}
            </div>

            <div className="logo2">
                <img src={LogoSecond} alt="ZenTown Logo" />
            </div>
        </div>
    )
}

export default Logo2;