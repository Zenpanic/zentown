import React, { useState } from 'react';
import FR from './images/FR.png';
import EN from './images/GB.png';

import './legalpages.css';

const Legal = () => {

    const frenchVersion = <div className="legalPageContainer">
        <h2 className="legal-main-title">Mentions Légales</h2>

        <h3 className="legal-sub-title">Informations légales</h3>

        <p>Sébastien BELMO, entreprise individuelle dispensée d'immatriculation au Registre du Commerce et des Sociétés (RCS) et au Répertoire des Métiers (RM).
    <br /><br />SIRET : 524 289 469 00024
    <br /><br />TVA non applicable, art. 293 B du CGI</p>

        <h3 className="legal-sub-title">Responsable de la publication</h3>

        <p>Sébastien BELMO
    <br /><br />3 rue des Marronniers
    <br />35490 Vieux-Vy sur Couesnon
    <br />France

    <br /><br />Téléphone : + 33 6 30 81 24 20

    <br /><br />E-mail : s.belmo@zentown.dev</p>

        <h3 className="legal-sub-title">Hébergement</h3>

        <p>L'hébergeur du site www.zentown.dev est la Société Heroku Inc.,
    dont le siège social est situé au 650 7th Street, San Francisco, CA, USA , avec le numéro de téléphone : +33 1 (877) 563-4311.</p>

        <h3 className="legal-sub-title">Accès au site</h3>

        <p>Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.
    <br />En cas de modification, interruption ou suspension des services le site zentown.dev ne saurait être tenu responsable.</p>

        <h3 className="legal-sub-title">Collecte des données</h3>

        <p>Le site zentown.dev ne collecte aucune donnée personnelle de l'utilisateur, à l'exception des données fournies volontairement par ce dernier via le formulaire de contact.
    <br />Ces données ne sont utilisées que dans le cadre du traitement des demandes de l'utilisateur par le responsable de la publication, et ne sont transmises à aucun tiers.</p>

        <h3 className="legal-sub-title">Cookies</h3>

        <p>Le site www.zentown.dev n'utilise aucun cookie.</p>

        {/* <p>L’utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation. En naviguant sur le site, il les accepte.
    <br />Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet.
    <br />L’utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>  */}

        <h3 className="legal-sub-title">Propriété intelectuelle</h3>

        <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site zentown.dev, sans autorisation explicite et écrite du responsable de la publication, est prohibée.
    <br />Cela pourra entrainer des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
    </div>;

    const englishVersion = <div className="legalPageContainer">
        <h2 className="legal-main-title">Legal Notice</h2>

        <h3 className="legal-sub-title">Imprint</h3>

        <p>Sébastien BELMO, sole proprietorship, not required to register to the Registre du Commerce et des Sociétés (RCS) and to the Répertoire des Métiers (RM).
        <br /><br />SIRET: 524 289 469 00024
        <br /><br />VAT not applicable, article 293 B of the CGI</p>

        <h3 className="legal-sub-title">Publication Manager</h3>

        <p>Sébastien BELMO
        <br /><br />3 rue des Marronniers
        <br />35490 Vieux-Vy sur Couesnon
        <br />France

        <br /><br />Phone: + 33 6 30 81 24 20

        <br /><br />E-mail: s.belmo@zentown.dev</p>

        <h3 className="legal-sub-title">Hosting</h3>

        <p>The website www.zentown.dev is hosted by Heroku Inc., whose head office is located at 650 7th Street, San Francisco, CA, USA , with the phone number +33 1 (877) 563-4311.</p>

        <h3 className="legal-sub-title">Access to the Website</h3>

        <p>This website is accessible from every country, at all time, except in cases of force majeure, or interruption, scheduled or not, for maintenance or in the case of unforeseeable issue.
        <br />In case of modification, interruption or suspension of services, the website www.zentown.dev cannot be held responsible.</p>

        <h3 className="legal-sub-title">Privacy</h3>

        <p>The website www.zentown.dev does not collect any personal information from the user, except the information provided willingly and explicitly by the user through the contact form.
        <br />Such data is only used to process the requests from the users by the publication manager, and are not shared with any third party.</p>

        <h3 className="legal-sub-title">Cookies</h3>

        <p>The website www.zentown.dev does not use any cookie.</p>

        <h3 className="legal-sub-title">Intellectual Property</h3>

        <p>All usage, copy, publication, commercialisation or modification of any part of totaity of the website www.zentown.dev, without prior written authorisation from the publication manager is strictly forbidden.
        <br />Any failure to respect intellectual property may lead to legal actions and judicial proceedings, as provided for by the law (Code de la propriété intellectuelle and Code civil).</p>
    </div>;

    const [language, setLanguage] = useState(frenchVersion);

    return (
        <>
            <div className="flagContainer">
                <img src={FR} className="flag dimPic" alt="Français" onClick={() => setLanguage(frenchVersion)} />
                <img src={EN} className="flag dimPic" alt="English" onClick={() => setLanguage(englishVersion)} />
            </div>
            {language}
        </>
    )
}

export default Legal;