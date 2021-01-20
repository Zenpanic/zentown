import React from 'react';
import { FormattedMessage } from 'react-intl';
import './portfolio.css';
import './logo2.css';
import Logo2 from './Logo2';
import 'tachyons';
import WoS from './images/screen_wayofspeaking.jpg';
import Oeil from './images/screen_oeil.jpg';
import ZenTown from './images/screen_zentown.jpg';

const Portfolio = () => {

    const desc = <h1 className="logodesc"><FormattedMessage
        id="portfolio.logo-desc"
        defaultMessage="Take a look at our featured projects. We'll be happy to create the next one with you!"
    /></h1>

    return (
        <>
            <Logo2 tagline={desc} />

            <div className="container">
                <div className="project">
                    <img className="project-image dim" src={WoS} alt="Way of Speaking"></img>
                    <div className="project-text">
                        <p className="project-description"><FormattedMessage
                            id="portfolio-p1-desc"
                            defaultMessage="Way of Speaking - A landing page built for a France based online english teacher. The front-end is entirely handmade, the back-end uses Node.js with Express." />
                        </p>
                        <a className="github-link dim" href="https://github.com/Zenpanic/wayofspeaking" target="_blank" rel="noopener"><FormattedMessage
                            id="portfolio-githublink"
                            defaultMessage="Source Code" />
                        </a>
                        <a className="live-link dim" href="https://wayofspeaking.com" target="_blank" rel="noopener"><FormattedMessage
                            id="portfolio-livelink"
                            defaultMessage="See Live" />
                        </a>
                    </div>
                </div>

                <div className="project">
                    <img className="project-image dim" src={Oeil} alt="Oeil"></img>
                    <div className="project-text">
                        <p className="project-description"><FormattedMessage
                            id="portfolio-p2-desc"
                            defaultMessage="Oeil - A facial recognition app, able to detect the faces in the pictures provided to it. Made with React, Node.js, Express and the Clarifai API." />
                        </p>
                        <a className="github-link dim" href="https://github.com/Zenpanic/oeil-frontend" target="_blank" rel="noopener"><FormattedMessage
                            id="portofolio.githublink-frontend"
                            defaultMessage="Source Code Front-End" />
                        </a>
                        <a className="github-link dim" href="https://github.com/Zenpanic/oeil-api" target="_blank" rel="noopener"><FormattedMessage
                            id="portofolio.githublink-backend"
                            defaultMessage="Source Code Back-End" />
                        </a>
                        <a className="live-link dim" href="https://oeil.herokuapp.com/" target="_blank" rel="noopener"><FormattedMessage
                            id="portfolio.livelink"
                            defaultMessage="See Live" />
                        </a>
                    </div>
                </div>

                <div className="project">
                    <img className="project-image dim" src={ZenTown} alt="ZenTown"></img>
                    <div className="project-text">
                        <p className="project-description"><FormattedMessage
                            id="portfolio-p3-desc"
                            defaultMessage="ZenTown - The website you're currently browsing. Made with React, Node.js, Express and love." />
                        </p>
                        <a className="github-link dim" href="https://github.com/Zenpanic/zentown" target="_blank" rel="noopener"><FormattedMessage
                            id="portofolio.githublink-frontend"
                            defaultMessage="Source Code Front-End" />
                        </a>
                        <a className="github-link dim" href="https://github.com/Zenpanic/zentown-backend" target="_blank" rel="noopener"><FormattedMessage
                            id="portofolio.githublink-backend"
                            defaultMessage="Source Code Back-End" />
                        </a>
                        <a className="live-link dim" href="https://zentown.dev" target="_blank" rel="noopener"><FormattedMessage
                            id="portfolio.livelink"
                            defaultMessage="See Live" />
                        </a>
                    </div>
                </div>

                {/*  <div className="project">
                    <img className="project-image dim" src={Project2} alt=""></img>
                    <div className="project-text">
                        <p className="project-description"><FormattedMessage
                            id="portfolio-p3-desc"
                            defaultMessage="Description of the 3rd project" />
                        </p>
                        <a className="github-link dim" href=""><FormattedMessage
                            id="portofolio.githublink"
                            defaultMessage="Source Code" />
                        </a>
                        <a className="live-link dim" href=""><FormattedMessage
                            id="portfolio.livelink"
                            defaultMessage="See Live" />
                        </a>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Portfolio;