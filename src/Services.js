import React from 'react';
import 'tachyons';
import Logo2 from './Logo2';
import { FormattedMessage } from 'react-intl';
import './services.css';

const Services = props => {

    const desc = <h1 className="logodesc"><FormattedMessage
        id="services.logo-desc"
        defaultMessage="From the simple and efficient landing page to the complex e-commerce platform, 
        we'll build for you the perfect online presence tailored to your needs."
    /></h1>

    return (
        <>
            <Logo2 tagline={desc} />
            <div className="pricing">
                <article className="pricing-text">
                    <FormattedMessage
                        id="services.disclaimer"
                        defaultMessage="Please note that those prices are here to give you a general idea of what to expect. 
                           Contact us to get an accurate quote based on the needs and requirements of your project."
                    />
                </article>
            </div>

            <div className="pricing-container">
                <div className="pricing-element">
                    <h1 className="product-title">
                        <FormattedMessage
                            id="services.title-landing"
                            defaultMessage="Landing Page" />
                    </h1>
                    <div className="product-pricetag">
                        <p><span className="product-price">900€</span></p>
                    </div>
                    <ul>
                        <li className="product-feature odd-li"><FormattedMessage
                            id="services.feature-s1"
                            defaultMessage="Elegant, fully handcrafted webapp, to make you stand out from the crowd"
                        /></li>
                        <li className="product-feature even-li"><FormattedMessage
                            id="services.feature-s2"
                            defaultMessage="Responsive design (adapted to all supports)"
                        /></li>
                        <li className="product-feature odd-li"><FormattedMessage
                            id="services.feature-s3"
                            defaultMessage="Secure online payment solution"
                        /></li>
                        <li className="product-feature even-li"><FormattedMessage
                            id="services.feature-s4"
                            defaultMessage="CMS allowing you to easily edit your content"
                        /></li>
                        <li className="product-feature odd-li"><FormattedMessage
                            id="services.feature-s5"
                            defaultMessage="Contact form linked to your mailbox"
                        /></li>
                        <li className="product-feature even-li"><FormattedMessage
                            id="services.feature-s6"
                            defaultMessage="Optimized SEO for high visibility on the search engines"
                        /></li>
                        <li className="product-feature odd-li"><FormattedMessage
                            id="services.feature-s7"
                            defaultMessage="SSL certificate: with HTTPS, you have to worry less"
                        /></li>
                        <li className="product-feature even-li"><FormattedMessage
                            id="services.feature-s8"
                            defaultMesssage="Hosting + domain name + email included for 12 months"
                        /></li>
                    </ul>
                    <p className="product-description">
                        <FormattedMessage
                            id="services.description-landing"
                            defaultMessage="Ideal for start-ups, freelancers and small companies willing to showcase a specific product, service or work. It can also be used as an online 
                        business card or resume." />
                    </p>
                    <button className="askPrice" value="Contact" onClick={() => props.changePage('Contact')} title="Contact">
                        <FormattedMessage
                            id="service.askprice"
                            defaultMessage="Contact Us!" />
                    </button>


                </div>

                <div className="pricing-element">
                    <h1 className="product-title">
                        <FormattedMessage
                            id="services.title-ecommerce"
                            defaultMessage="E-commerce Platform" />
                    </h1>
                    <div className="product-pricetag">
                        <p><span className="product-price">1400€</span></p>
                    </div>
                    <ul>
                        <li className="product-feature odd-li"><FormattedMessage
                            id="services.feature-s1"
                            defaultMessage="Elegant, fully handcrafted webapp, to make you stand out from the crowd"
                        /></li>
                        <li className="product-feature even-li"><FormattedMessage
                            id="services.feature-s2"
                            defaultMessage="Responsive design (adapted to all supports)"
                        /></li>
                        <li className="product-feature odd-li"><FormattedMessage
                            id="services.feature-s3"
                            defaultMessage="Secure online payment solution"
                        /></li>
                        <li className="product-feature premium even-li"><FormattedMessage
                            id="services.feature-p1"
                            defaultMessage="CMS allowing you full control over your content through an admin panel"
                        /></li>
                        <li className="product-feature odd-li"><FormattedMessage
                            id="services.feature-s5"
                            defaultMessage="Contact form linked to your mailbox"
                        /></li>
                        <li className="product-feature even-li"><FormattedMessage
                            id="services.feature-s6"
                            defaultMessage="Optimized SEO for high visibility on the search engines"
                        /></li>
                        <li className="product-feature premium odd-li"><FormattedMessage
                            id="services.feature-p2"
                            defaultMessage="Intuitive navigation and searchbar"
                        /></li>
                        <li className="product-feature premium even-li"><FormattedMessage
                            id="services.feature-p3"
                            defaultMessage="User accounts"
                        /></li>
                        <li className="product-feature odd-li"><FormattedMessage
                            id="services.feature-s7"
                            defaultMessage="SSL certificate: with HTTPS, you have to worry less"
                        /></li>
                        <li className="product-feature premium even-li"><FormattedMessage
                            id="services.feature-p4"
                            defaultMessage="Dedicated database(PostgreSQL or MongoDB)"
                        /></li>
                        <li className="product-feature premium odd-li"><FormattedMessage
                            id="services.feature-p5"
                            defaultMessage="Training on the usage of your website"
                        /></li>
                        <li className="product-feature even-li"><FormattedMessage
                            id="services.feature-s8"
                            defaultMesssage="Hosting + domain name + email included for 12 months"
                        /></li>
                    </ul>
                    <p className="product-description">
                        <FormattedMessage
                            id="services.description-ecommerce"
                            defaultMessage="The perfect solution for companies wanting to take a big step forward and go online. Reach people everywhere, anytime." />
                    </p>
                    <button className="askPrice" value="Contact" onClick={() => props.changePage('Contact')} title="Contact">
                        <FormattedMessage
                            id="service.askprice"
                            defaultMessage="Contact Us!" />
                    </button>

                </div>

                <div className="pricing-element">
                    <h1 className="product-title">
                        <FormattedMessage
                            id="services.title-maintenance"
                            defaultMessage="1 Year Maintenance" />
                    </h1>
                    <div className="product-pricetag">
                        <p><span className="product-price">400€</span></p>
                    </div>

                    <ul>
                        <li className="product-feature odd-li"><FormattedMessage
                            id="services.feature-m1"
                            defaultMessage="Monthly back-up of your website and database"
                        /></li>
                        <li className="product-feature even-li"><FormattedMessage
                            id="services.feature-m2"
                            defaultMessage="Monthly updates of the technologies powering your webapp"
                        /></li>
                        <li className="product-feature odd-li"><FormattedMessage
                            id="services.feature-m3"
                            defaultMessage="6 hours of work to make esthetical and/or structural modifications"
                        /></li>
                    </ul>
                    <p className="product-description">
                        <FormattedMessage
                            id="services.description-maintenance"
                            defaultMessage="You're online, congratulations! Now focus on your business without any worries, knowing that your website is well taken care of through the year." />
                    </p>
                    <button className="askPrice" value="Contact" onClick={() => props.changePage('Contact')} title="Contact">
                        <FormattedMessage
                            id="service.askprice"
                            defaultMessage="Contact Us!" />
                    </button>

                </div>

            </div>
        </>
    )
}

export default Services;