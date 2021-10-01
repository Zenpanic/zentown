import React from 'react';
import { FormattedMessage } from 'react-intl';
import './portfolio.css';
import './logo2.css';
import Logo2 from './Logo2';
import 'tachyons';
import WoS from './images/screen_wayofspeaking.jpg';
import Oeil from './images/screen_oeil.jpg';
import ZenTown from './images/screen_zentown.jpg';
import Aquafaba from './images/screen_aquafaba.jpg';
import Zenweather from './images/screen_zenweather.jpg';
import Easyacht from './images/screen_easyacht.png';
import Artistepromo from './images/screen_artistepromo.png';

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
                    <a href="https://artiste-promomusique.vercel.app/" target="_blank" rel="noopener"><img className="project-image dim" src={Artistepromo} alt="Artiste Promomusique"></img></a>
                    <div className="project-text">
                        <p className="project-description"><FormattedMessage
                            id="portfolio-p7-desc"
                            defaultMessage="Artiste Promomusique offers a dashboard to the users of the Promomusique service, allowing them to follow the progress of their campaigns, and to access several services, such as the creation of a fan page." />
                        </p>
                        <a className="live-link dim" href="https://artiste-promomusique.vercel.app/" target="_blank" rel="noopener"><FormattedMessage
                            id="portfolio.livelink"
                            defaultMessage="See Live" />
                        </a>
                    </div>
                </div>

                <div className="project">
                    <a href="https://www.easyacht.app" target="_blank" rel="noopener"><img className="project-image dim" src={Easyacht} alt="easYacht"></img></a>
                    <div className="project-text">
                        <p className="project-description"><FormattedMessage
                            id="portfolio-p6-desc"
                            defaultMessage="easYacht is a platform that brings together professionals from the nautical industry and individuals looking for a unique experience at sea on board a boat or through the practice of a water sport." />
                        </p>
                        <a className="live-link dim" href="https://www.easyacht.app" target="_blank" rel="noopener"><FormattedMessage
                            id="portfolio.livelink"
                            defaultMessage="See Live" />
                        </a>
                    </div>
                </div>

                <div className="project">
                    <a href="https://zen-weather.vercel.app/" target="_blank" rel="noopener"><img className="project-image dim" src={Zenweather} alt="Zen Weather"></img></a>
                    <div className="project-text">
                        <p className="project-description"><FormattedMessage
                            id="portfolio-p5-desc"
                            defaultMessage="Zen Weather - An elegant and minimalist weather web application. Light, without ads nor tracking: just the weather. Made with React and the OpenWeather API." />
                        </p>
                        <a className="github-link dim" href="https://github.com/Zenpanic/zen-weather" target="_blank" rel="noopener"><FormattedMessage
                            id="portofolio.githublink-frontend"
                            defaultMessage="Source Code" />
                        </a>
                        <a className="live-link dim" href="https://zen-weather.vercel.app/" target="_blank" rel="noopener"><FormattedMessage
                            id="portfolio.livelink"
                            defaultMessage="See Live" />
                        </a>
                    </div>
                </div>

                <div className="project">
                    <a href="https://aquafaba-temple.vercel.app" target="_blank" rel="noopener"><img className="project-image dim" src={Aquafaba} alt="Aquafaba Temple"></img></a>
                    <div className="project-text">
                        <p className="project-description"><FormattedMessage
                            id="portfolio-p4-desc"
                            defaultMessage="Aquafaba Temple - An imaginary restaurant webapp, with an integrated delivery solution. Made with Next.js, Strapi CMS and MongoDB." />
                        </p>
                        <a className="github-link dim" href="https://github.com/Zenpanic/aquafaba-frontend" target="_blank" rel="noopener"><FormattedMessage
                            id="portofolio.githublink-frontend"
                            defaultMessage="Source Code Front-End" />
                        </a>
                        <a className="live-link dim" href="https://aquafaba-temple.vercel.app" target="_blank" rel="noopener"><FormattedMessage
                            id="portfolio.livelink"
                            defaultMessage="See Live" />
                        </a>
                    </div>
                </div>

                <div className="project">
                    <a href="https://wayofspeaking.com" target="_blank" rel="noopener"><img className="project-image dim" src={WoS} alt="Way of Speaking"></img></a>
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
                    <a href="https://oeil.herokuapp.com/" target="_blank" rel="noopener"><img className="project-image dim" src={Oeil} alt="Oeil"></img></a>
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
                    <a href="https://zentown.dev" target="_blank" rel="noopener"><img className="project-image dim" src={ZenTown} alt="ZenTown"></img></a>
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

            </div>
        </>
    )
}

export default Portfolio;