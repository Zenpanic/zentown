import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './contact.css';
import 'tachyons';
import Logo2 from './Logo2';

const Contact = props => {

    const HOST_CONTACT = process.env.REACT_APP_HOST_CONTACT;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [warningField, setWarningField] = useState('');

    const goodWarningField = <div style={{ color: 'green', padding: '0.3em', textAlign: 'center' }}> Success!</div>;
    const badWarningField = <div style={{ color: 'red', padding: '0.3em', textAlign: 'center' }}> Please make sure that you've filled up all the fields properly.</div>;

    const onNameChange = e => {
        setName(e.target.value);
    }

    const onEmailChange = e => {
        setEmail(e.target.value);
    }

    const onMessageChange = e => {
        setMessage(e.target.value);
    }

    const redirectHome = () => {
        props.changePage('Home');
    }

    const sendMessage = () => {
        if (name && email && message) {
            fetch(HOST_CONTACT, {
                method: 'post',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    message: message
                })
            }).then(() => {
                setWarningField(goodWarningField);
            }).then(() => {
                setTimeout(redirectHome, 2500);
            })
        } else {
            setWarningField(badWarningField);
        }
    }

    const desc = <h1 className="logodesc"><FormattedMessage
        id="contact.logo-desc"
        defaultMessage="Contact us with any questions you have about building your project, and how we can help you make it become a reality."
    /></h1>

    return (
        <>
            <Logo2 tagline={desc} />
            <div className="contact-container" id="message-form">
                <div className="contact-element">
                    <label for="contactName"><FormattedMessage
                        id="contact.name"
                        defaultMessage="Name" />
                    </label>
                    <input id="contactName" name="contactName" type="text" onChange={onNameChange} value={name} required></input>
                </div>
                <div className="contact-element">
                    <label for="contactEmail">Email</label>
                    <input id="contactEmail" name="contactEmail" type="email" onChange={onEmailChange} value={email} required></input>
                </div>
                <div className="contact-element">
                    <label for="contactMessage">Message</label>
                    <textarea id="contactMessage" name="contactMessage" rows="5" cols="50" onChange={onMessageChange} value={message} required></textarea>
                </div>
                <div className="contact-element">
                    {warningField}
                    <button className="submitButton" type="submit" onClick={sendMessage}><FormattedMessage
                        id="contact.send"
                        defaultMessage="Send" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Contact;