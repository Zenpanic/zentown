import React from 'react';
import { FormattedMessage } from 'react-intl';
import './contact.css';
import 'tachyons';
import Logo2 from './Logo2';

const Contact = () => {

    const desc = <h1 className="logodesc"><FormattedMessage
        id="contact.logo-desc"
        defaultMessage="Contact us with any questions you have about building your project, and how we can help you make it become a reality."
    /></h1>

    return (
        <>
            <Logo2 tagline={desc} />
            <form className="contact-container">
                <div className="contact-element">
                    <label for="contact-name"><FormattedMessage
                        id="contact.name"
                        defaultMessage="Name" />
                    </label>
                    <input id="contact-name" name="contact-name" type="text"></input>
                </div>
                <div className="contact-element">
                    <label for="contact-email">Email</label>
                    <input id="email" name="email" type="email"></input>
                </div>
                <div className="contact-element">
                    <label for="contact-message">Message</label>
                    <textarea id="contact-message" name="contact-message" rows="5" cols="50"></textarea>
                </div>
                <div className="contact-element">
                    <button className="submitButton" type="submit"><FormattedMessage
                        id="contact.send"
                        defaultMessage="Send" />
                    </button>
                </div>
            </form>
        </>
    )
}

export default Contact;