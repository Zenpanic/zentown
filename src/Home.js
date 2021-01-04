import React from 'react';
import 'tachyons';
import Techs from './Techs';
import Background from './images/background.jpg';
import { FormattedMessage } from 'react-intl';
import './home.css';

const Home = () => {

    return (
        <>
            <div className="cover bg-left bg-center-l" style={{ backgroundImage: `url(${Background})` }}>
                <div className="bg-black-40 pb5 pb6-m pb7-l pt6 homescreen">

                    <div className="tc-l mt1 mt2-m mt3-l ph3 welcome-text">
                        <h1 className="f2 f1-l fw2 white-90 mb0 lh-title"><FormattedMessage
                            id="home.title"
                            defaultMessage="ZenTown - Web Development" />
                        </h1>
                        <h2 className="fw1 f3 white-80 mt3 mb4"><FormattedMessage
                            id="home.subtitle"
                            defaultMessage="Make your web dreams come true!" /></h2>
                        <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href=""><FormattedMessage
                            id="home.contactUs"
                            defaultMesssage="Contact Us!" /></a>
                    </div>
                </div>
            </div>

            <div className="presentation-container">
                <h2 className="presentation-title">
                    <FormattedMessage
                        id="home.presentation-title1"
                        defaultMessage="Building an online presence" />
                </h2>
                <p className="presentation">
                    <FormattedMessage
                        id="home.presentation-p1"
                        defaultMessage="What do business owners, freelancers, artists, organizations, journalists and clubs have in common?
                    They all have something to gain from having a website, because a website is much more than just a dematerialized catalogue, book or portfolio.
                    It's a 24/7 showcase for your creations, products, ideas, services and values. It's a meeting place, and a hub for sharing information and knowledge. 
                    It's a tool to navigate the world. And above all, it's a living and changing thing, accessible by anyone, anywhere in the world. 
                    If you're trying to reach a large amount of people, in mosts cases it will also become the first impression you make on them.
                    That's why it is important to get it done the right way, in respect of both your vision and the technical speficities of the web medium." />
                </p>
                <h2 className="presentation-title">
                    <FormattedMessage
                        id="home.presentation-title2"
                        defaultMessage="A professional's touch" />
                </h2>
                <p className="presentation">
                    <FormattedMessage
                        id="home.presentation-p2"
                        defaultMessage="ZenTown is here to offer the solution most fitted to your needs. From picking the right color palette for your website to the deployment on 
                        powerful servers, we'll take care of everything and deliver an esthetical and efficient website you can be proud of. All of our designs are handmade, lightweight, 
                        and will provide to your users the best possible experience." />
                </p>
                <h2 className="presentation-title">
                    <FormattedMessage
                        id="home.presentation-title3"
                        defaultMessage="How does it work?" />
                </h2>
                <h3 className="presentation-subtitle">
                    <FormattedMessage
                        id="home.process-title1"
                        defaultMessage="First Contact" />
                </h3>
                <p className="presentation">
                    <FormattedMessage
                        id="home.process-p1"
                        defaultMessage="First of all, contact us to tell us about your project. Do you want a minimalist landing page? A display to highlight and sell your products? 
                        An online art gallery? We encourage you to tell us as much as you can about what you're looking for, and the functionnalities you wish to see integrated, 
                        so we can start on solid basis. We'll reply within 48 hours (during business days), and we will exchange with you until we have set clear specifications." />
                </p>
                <h3 className="presentation-subtitle">
                    <FormattedMessage
                        id="home.process-title2"
                        defaultMessage="Project Validation" />
                </h3>
                <p className="presentation">
                    <FormattedMessage
                        id="home.process-p2"
                        defaultMessage="Based on the specifications precedently discussed, we will draw up a quote and give you an estimated delivery time. If you agree, we will ask you a 
                        25% downpaiement and start the development at reception. " />
                </p>
                <h3 className="presentation-subtitle">
                    <FormattedMessage
                        id="home.process-title3"
                        defaultMessage="Prototype" />
                </h3>
                <p className="presentation">
                    <FormattedMessage
                        id="home.process-p3"
                        defaultMessage="At this time, we'll have a working prototype of the website to show you, in order to ensure you're satisfied with the direction undertaken. 
                        We will listen to your feedback and pursue the development, while implementing the tweaks you may have requested." />
                </p>
                <h3 className="presentation-subtitle">
                    <FormattedMessage
                        id="home.process-title4"
                        defaultMessage="Deployment" />
                </h3>
                <p className="presentation">
                    <FormattedMessage
                        id="home.process-p4"
                        defaultMessage="After a thourough testing phase, your website will be deployed and accessible under your domain name. We'll charge you at this point the 
                        remaining 75% of the price agreed on. We will keep an eye on the website for the next 7 days to make sure that everything is running smoothly, and will fix 
                        free of charge any technical issue that may occur during this time." />
                </p>
                <h3 className="presentation-subtitle">
                    <FormattedMessage
                        id="home.process-title5"
                        defaultMessage="Maintenance" />
                </h3>
                <p className="presentation">
                    <FormattedMessage
                        id="home.process-p5"
                        defaultMessage="If you would like us to take care of the maintenance of your website past the 7 days following the delivery, you can subscribe to the Maintenance 
                        Package, and focus on nothing else than your content." />
                </p>

            </div>
            <Techs />
        </>
    )
}

export default Home;