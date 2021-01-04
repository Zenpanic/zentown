import React from 'react';
import './techs.css';

import logoHTML from './images/tech/html5.png';
import logoCSS from './images/tech/css3.png';
import logoJS from './images/tech/javascript.png';
import logoReact from './images/tech/react.png';
import logoMongo from './images/tech/mongodb.png';
import logoNode from './images/tech/nodejs.png';
import logoPostgresql from './images/tech/postgresql.png';
import logoPython from './images/tech/python.png';
import { FormattedMessage } from 'react-intl';

const Techs = () => {
    return (
        <>
            <p className="techs-text">
                <FormattedMessage
                    id="techs.tech-stack"
                    defaultMessage="Our Tech Stack" />
            </p>
            <div className="tech-container">
                <img src={logoHTML} alt="HTML5" />
                <img src={logoCSS} alt="CSS3" />
                <img src={logoJS} alt="Javascript" />
                <img src={logoReact} alt="React" />
                <img src={logoNode} alt="NodeJS" />
                <img src={logoMongo} alt="Mongo DB" />
                <img src={logoPostgresql} alt="PostgreSQL" />
                <img src={logoPython} alt="Python 3" />
            </div>
        </>
    )
}

export default Techs;