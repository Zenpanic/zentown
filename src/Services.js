import React from 'react';
import 'tachyons';
import Logo2 from './Logo2';
import { FormattedMessage } from 'react-intl';
import './services.css';
import Computer from './images/computer.png';
import Webdev from './images/webdev.png';

const Services = props => {

    const desc = <h1 className="logodesc"><FormattedMessage
        id="services.logo-desc"
        defaultMessage="From the simple and efficient landing page to the complex e-commerce platform, we'll build for you the perfect online presence tailored to your needs."
    /></h1>

    return (
        <>
            <Logo2 tagline={desc} />

            <article className='servicesArticle'>
                <p><FormattedMessage
                    id="services.p1"
                    defaultMessage="The features and services built into your website or web app are highly dependant of your needs and requirements. Depending on 
                    whether you want a showcase page to highlight your brand or identity, or an e-commerce platform with hundreds of products to manage and advanced user profiles, 
                    there will be drastic differences in the approach we will take to the realization of your product."/>
                </p>
                <p><FormattedMessage
                    id="services.p2"
                    defaultMessage="In order to help you navigate through this wide ocean of possibilities, we will discuss your project in details,
                and propose you the relevant features built with the most modern and fitted technologies, to bring your concept to life."/>
                </p>
                <img src={Computer} alt="computer" className="grow servicesImage" />
                <p><FormattedMessage
                    id="services.p3"
                    defaultMessage="The process of understanding your project and preparing the specifications is entirely free of charge for you. We
                will then provide you with a detailed quotation, with an estimated development time. We only start billing you from the actual
                beginning of the development of the website or web app."/>
                </p>

                <p><FormattedMessage
                    id="services.p4"
                    defaultMessage="This allows you to not be worried during your decision process, and to make sure that you and us are on the same page before
                we start working together."/>
                </p>
                <img src={Webdev} alt="computer" className="grow servicesImage" />
                <p><FormattedMessage
                    id="services.p5"
                    defaultMessage="For the customers who have already used our services and would like us to take care of the maintenance of their product, we also provide a
                maintenance service at the flat price of 400€ (all taxes included) which includes monthly data backups, monthly updates of the softwares powering the
                product, as well as 6 hours of graphic or functional editing. This service is valid for a period of 12 months from the date of the payment."/>
                </p>
                <p><FormattedMessage
                    id="services.p6"
                    defaultMessage="We invite you to contact us if you have any questions about our services. We hope to count you soon among our happy customers!" />
                </p>
                <button className="askPrice" value="Contact" onClick={() => props.changePage('Contact')} title="Contact">
                    <FormattedMessage
                        id="service.askprice"
                        defaultMessage="Contact Us!" />
                </button>
            </article>
        </>
    )
}

export default Services;