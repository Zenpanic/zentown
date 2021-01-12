import React, { useState } from 'react';
import FR from './images/FR.png';
import EN from './images/GB.png';

import './legalpages.css';

const Terms = () => {

    const englishVersion = <div className="legalPageContainer">
        <h2 className="legal-main-title">Terms and Conditions of Sale</h2>

        <h3 className="legal-sub-title">ARTICLE 1 - DEFINITIONS</h3>

        <p>"PROVIDER" means Sébastien BELMO, also acting under the trade name ZenTown, is a sole proprietorship whose SIRET number is 524 289 469 00024. The PROVIDER specializes in services such as the creation, administration, management and maintenance of web and mobile sites and applications.
        <br /><br />
        "CLIENT" refers to any natural person of legal age or legal entity, having called upon the skills of the PROVIDER within the framework of the services offered on the site www.zentown.dev and guaranteeing the payment of the invoice, even if it is established in the name of a third party.</p>

        <h3 className="legal-sub-title">ARTICLE 2 - SCOPE OF APPLICATION</h3>

        <p>The present General Conditions of Sale are intended to define the rights and obligations of the parties during the sale of products and services made by the PROVIDER for the CLIENT within the framework of its activities of computer interventions, development, management and maintenance of software and web and mobile sites and applications, the characteristics of which are available at the address "www.zentown.dev".
        <br /><br />
        The CLIENT calling upon the PROVIDER's services acknowledges having read the general terms and conditions of sale herein. These conditions, as well as the code du commerce and the special conditions stated if necessary in the quotations and commercial proposals, alone regulate the conditions of sale of the PROVIDER's products and services.
        <br /><br />
        The CLIENT is informed of the General Conditions of Sale on the quote and can also consult them at any time on the site "www.zentown.dev". These conditions will prevail over any contrary clauses and conditions that may appear on the documents issued by the CLIENT.
        <br /><br />
        The signature of the quote accompanied by the words "GOOD FOR AGREEMENT" implies the acceptance without reservation of these Terms and Conditions of Sale by the CLIENT, and its commitment to pay the sums due. The contract is considered concluded upon receipt of the estimate signed by the CLIENT with the handwritten mention "GOOD FOR AGREEMENT" and the deposit. The start of the work will only be initiated after receipt of the deposit.
        <br /><br />
        The PROVIDER reserves the right to modify at any time and without notice its general conditions of sale, its formulas and its rates. These modifications will in no way affect the current orders.
        </p>
        <h3 className="legal-sub-title">ARTICLE 3 - OBLIGATIONS OF THE PARTIES</h3>

        <h3 className="legal-sub-title">3.1 OBLIGATIONS OF THE PROVIDER</h3>

        <p>Generally speaking, within the framework of a contract binding him to the CLIENT, the PROVIDER undertakes to :
        <ul className="cgv-ul">
                <li className="cgv-li">To preserve the confidentiality of all information and documents that the PROVIDER may hold as a result of the execution of this contract.</li>

                <li className="cgv-li">Ensure the confidentiality of the information communicated by the CLIENT and not to communicate it to any third party, even if this contract comes to an end or is terminated.</li>

                <li className="cgv-li">To provide all the care and expertise necessary to implement a quality service, and to make every effort to satisfy the CLIENT.</li>

                <li className="cgv-li">To respect as well as possible the announced deadlines of execution and to regularly inform the CLIENT on the progress of the realization of the service concerned by the present contract.</li>
            </ul>
        As part of the execution of a contract for the development of a website, web application, mobile application or software, the PROVIDER agrees to :
        <ul className="cgv-ul">
                <li className="cgv-li">Develop, on its own computers and software, in its premises, the elements described in the quote.</li>

                <li className="cgv-li">Scrupulously respect the indications and recommendations detailed in the specifications.</li>

                <li className="cgv-li">In the case of web products (websites, web applications and mobile applications), take charge of the payment and the technical implementation of the domain name, e-mail addresses and hosting of the product concerned for a period of twelve (12) months from the date of online publication (unless otherwise specified in the quote and the specifications at the request of the CLIENT).</li>

                <li className="cgv-li">Provide access codes and all necessary elements to the CLIENT so that the CLIENT can administer and manage independently the product that has been developed for him under this contract.</li>

                <li className="cgv-li">To give a short training to the CLIENT on request about the use of the product concerned by the present contract.</li>
            </ul>
        As part of the execution of a maintenance contract, the PROVIDER undertakes to :
        <ul className="cgv-ul">
                <li className="cgv-li">Perform monthly maintenance interventions on a single product developed by the PROVIDER for the CLIENT and inform the CLIENT. These interventions include the monthly backup of data relating to the product concerned as well as the updating (if applicable) of software and technologies allowing the proper functioning of the product concerned. The PROVIDER will inform the CLIENT within forty-eight (48) hours of the execution of these maintenance interventions.</li>

                <li className="cgv-li">Respond within three (3) business days to any request for intervention by the CLIENT concerning the product covered by this contract.</li>

                <li className="cgv-li">Perform six (6) hours of work at the request of the CLIENT within twelve (12) months of signing the estimate accompanied by the words "GOOD FOR AGREEMENT" and receipt of payment. These hours will be distributed according to the CLIENT's needs and the PROVIDER's availability, on working days and during office hours (8:00 a.m. to 12:00 p.m. and 1:30 p.m. to 6:00 p.m.). These six (6) hours are done on a single product developed by the PROVIDER for the CLIENT, and concern graphic or programming operations.</li>

                <li className="cgv-li">Any additional hour will be subject to an additional estimate and will be invoiced fifty (50) euros inclusive of tax (all taxes included). Any additional hour will take place on the same time slots and calendar as the six (6) hours included in the maintenance service and under the same conditions.</li>
            </ul>
        </p>
        <h3 className="legal-sub-title">3.2 OBLIGATIONS OF THE CLIENT</h3>

        <p>Within the framework of a contract binding it to the PROVIDER, the CLIENT undertakes to :
        <ul className="cgv-ul">
                <li className="cgv-li">Date, sign and affix the mention "GOOD FOR AGREEMENT" on the estimate and send it to the PROVIDER by e-mail or post, which certifies that the CLIENT has read and approved these General Terms and Conditions of Sale without reservation.</li>

                <li className="cgv-li">Actively collaborate with the PROVIDER by providing the PROVIDER in a timely manner with the information and documents necessary for the proper execution of the contract. The PROVIDER cannot be held responsible in the event of delay in the execution of the work due to the CLIENT's failure to comply with this commitment.</li>

                <li className="cgv-li">Provide all the textual and graphic elements necessary for the proper execution of the contract, particularly in formats that can be used by the PROVIDER according to the targeted media (textual content, logos, certificates, information for the transfer of emails, images, sounds and digital videos and others) no later than the signature of the quote. The CLIENT shall ensure that it has the necessary rights to the elements provided, and only the CLIENT's responsibility may be engaged in this regard.</li>

                <li className="cgv-li">Guarantee the PROVIDER against any action that may be brought against it because of the nature of the data or information (texts, images, sounds) that would have been provided or chosen by the CLIENT.</li>

                <li className="cgv-li">Respect all applicable laws and regulations, including, without limitation, laws and regulations concerning intellectual property, protection of personal data, obligations of confidentiality or non-disclosure and the protection of minors for information communicated to the PROVIDER.</li>

                <li className="cgv-li">To pay within the time limits defined by these General Terms and Conditions of Sale the sums due to the PROVIDER.</li>

                <li className="cgv-li">Not to sell or use for another product the source codes, which remain the property of the PROVIDER, except with the written authorization of the PROVIDER. All studies, reports, written information, estimates, specifications, whether for a fee or free of charge, carried out by the PROVIDER with the aim of providing services to the CLIENT, remain the exclusive property of the PROVIDER. The CLIENT undertakes not to transmit them.</li>

                <li className="cgv-li">Authorize the PROVIDER to quote the name and corporate name of the CLIENT, as well as its URL, screen shots of its web pages, as a reference for the commercial promotion of the PROVIDER.</li>

                <li className="cgv-li">Authorize the PROVIDER to mention its realization for the CLIENT as a reference in the context of its commercial prospecting, external communication and advertising. Unless explicitly stated otherwise by the CLIENT, the PROVIDER reserves the right to include in the project a commercial reference clearly indicating its contribution, such as the formula "Developed by ZenTown", accompanied, when the medium allows it, by a hypertext link pointing to the commercial site of its activity (https://www.zentown.dev).</li>

                <li className="cgv-li">Respect the provisions relating to the mandatory legal notices to be inserted on its website under the modified law of September 30, 1986 and those relating to information technology, files and freedoms, in particular those relating to the declaration of automated processing of personal information to the National Commission for Information Technology and Freedoms (C.N.I.L.).</li>

                <li className="cgv-li">Notify the PROVIDER of any modification concerning its situation (in particular change of postal or electronic address) at the latest within two (2) weeks following this change, with the exception of the change of its e-mail address which must be notified to the PROVIDER at the latest forty-eight (48) hours after the said change.</li>
            </ul>
        </p>
        <h3 className="legal-sub-title">ARTICLE 4 - SPECIFICATIONS</h3>

        <p>Within the framework of a contract for the development of a website, web application, mobile application or software, specifications will be established by the CLIENT and may be subject to modifications and adaptations by mutual agreement between the CLIENT and the PROVIDER until the drafting of a final version satisfactory to both parties.
        <br />
        The specifications will then be signed by the CLIENT and the PROVIDER and may not be subject to modification thereafter, unless mutually agreed, explicit and written by both parties. The specifications will serve as a reference and basis for the establishment of a free quote by the PROVIDER.
        <br /><br />
        In situations where the specifications do not give sufficiently precise indications or recommendations on how to approach the development and/or creation of an element included in the order, both parties agree that the choice of design is left to the free interpretation of the PROVIDER.
        </p>
        <h3 className="legal-sub-title">ARTICLE 5 - QUOTATION AND PAYMENT</h3>

        <h3 className="legal-sub-title">5.1 MEANS OF PAYMENT</h3>
        <p>
            The payment of the sums due to the PROVIDER by the CLIENT within the framework of this contract may be made by cash, bank transfer, or online by credit card via the Paypal platform.
        </p>
        <h3 className="legal-sub-title">5.2 FOR A WEB OR SOFTWARE CREATION</h3>
        <p>
            Within the framework of a contract for the development of a website, web application, mobile application or software, an estimate will be made free of charge by the PROVIDER after acceptance and signature of the specifications by the CLIENT and the PROVIDER. The quote is valid for one (1) month from its date of issue and does not bind the CLIENT as long as the CLIENT has not confirmed having accepted the offer.
        <br /><br />
        The quote will be sent to the CLIENT by e-mail or by post, at the CLIENT's preference. This quotation must be dated, signed and stamped "GOOD FOR AGREEMENT" by the CLIENT, then returned to the PROVIDER by e-mail or by post.
        <br /><br />
        Upon signature of the quotation, the CLIENT shall pay a deposit of twenty-five (25) % of the total amount due for the product concerned by this contract. The development of the product concerned by the present contract will only begin upon receipt of the deposit and the estimate duly signed and completed.
        <br /><br />
        The payment of the remainder of the sum due to the PROVIDER by the CLIENT, i.e. seventy-five (75) % of the total sum, will be made imperatively within two (2) working days following the delivery of the product. The CLIENT will be notified no later than two (2) working days of the final delivery date of its product by e-mail, and will also receive a confirmation e-mail on the day in question. This confirmation e-mail will signify the completion of the work.
        </p>
        <h3 className="legal-sub-title">5.3 FOR A MAINTENANCE SERVICE</h3>
        <p>
            An estimate at the single rate of four hundred (400) euros is carried out free of charge by the PROVIDER as part of the maintenance service. The quote is valid for one (1) month from its date of issue and is not binding on the CLIENT until the CLIENT has confirmed that it has accepted the offer.
        <br /><br />
        The quotation will be sent to the CLIENT by e-mail or post, at the CLIENT's preference. This quotation must be dated, signed and stamped "GOOD FOR AGREEMENT" by the CLIENT, then returned to the PROVIDER by e-mail or by post.
        <br /><br />
        The contract will only take effect once the PROVIDER has received the signed and duly completed estimate, and once the CLIENT has received payment in full of the sum appearing on the estimate.
        <br /><br />
        Any additional hour of maintenance will be the subject of a separate quotation, under the same conditions as the above-mentioned maintenance contract, and will be invoiced at the single rate of fifty (50) euros (all taxes included).
        </p>
        <h3 className="legal-sub-title">ARTICLES 6 - WARRANTY</h3>

        <h3 className="legal-sub-title">6.1 WARRANTY FOR WEB OR SOFTWARE CREATION</h3>
        <p>
            Under a contract for the development of a website, web application, mobile application or software, for a period of fifteen (15) days following the end of the work, the CLIENT may request minor changes in content or aesthetics. The PROVIDER undertakes to correct any technical or aesthetic anomaly for which the PROVIDER is responsible and which it or the CLIENT identifies, namely the content of the source code as well as the configuration of the hosting of the web site, web application or mobile application.
        </p>
        <h3 className="legal-sub-title">6.2 WARRANTY FOR THE MAINTENANCE SERVICE</h3>
        <p>
            The PROVIDER undertakes to correct as soon as possible, free of charge and without counting the hours covered by the maintenance service, any anomaly resulting from an intervention on its part within the framework of the maintenance service.
        </p>
        <h3 className="legal-sub-title">ARTICLE 7 - LIABILITY</h3>
        <p>
            The operation of the service or product concerned by this contract may be interrupted to allow the PROVIDER to carry out the maintenance operations necessary for the execution of the said contract. However, the PROVIDER undertakes, when conditions permit, to carry out these interventions during the hours that are least penalizing for the client. The suspension of access to the product or service concerned by this contract during maintenance operations will not give right to the payment of any compensation.
        <br /><br />
        The PROVIDER will not be held responsible in any case in the following cases:
        <ul className="cgv-ul">
                <li className="cgv-li">Use in a way not provided for or explicitly authorized by this contract of the products or services concerned by it.</li>

                <li className="cgv-li">Use of the products or services covered by the contract in an environment or configuration that does not meet the technical requirements indicated by the PROVIDER, or in connection with programs or data of third parties not explicitly approved by the PROVIDER.</li>

                <li className="cgv-li">Loss of data of the CLIENT following an intervention of the CLIENT or a third party designated by the CLIENT on the products or services concerned by the present contract.</li>

                <li className="cgv-li">Damages resulting from a fault or negligence of the CLIENT, or that the CLIENT could have avoided by calling upon the PROVIDER's advice.</li>

                <li className="cgv-li">Major technical incident likely to hinder the realization of the contract (attacks, wars, natural disasters, cases of force majeure or prolonged interruption of the Internet or electricity network beyond its control).</li>

                <li className="cgv-li">Indirect damages, in particular financial or commercial damages, loss of orders, loss of data, loss of profit, damage to the brand image, loss of profits or CLIENTs (in particular in the event of a defect or hacking of the system).</li>

                <li className="cgv-li">Malicious intrusions by third parties on servers, e-mail boxes and databases relating to the products and services covered by this contract.</li>

                <li className="cgv-li">Contamination by computer virus of the equipment, software and data of the CLIENT.</li>
            </ul>
        Under no circumstances can the PROVIDER be held responsible for the loss of documents required to perform the services or products concerned by this contract. The CLIENT is required to send only copies or documents without replacement value. The PROVIDER reserves the right to refuse any document, text or image that is contrary to its ethics, good morals or does not comply with the legislation in force.
        <br /><br />
        The PROVIDER declines all legal and moral responsibility if the CLIENT has misled the PROVIDER as to the future content of the site that is contrary to good morals or of an illegal nature, whether during or after the mission.
        </p>
        <h3 className="legal-sub-title">ARTICLE 8 - INABILITY TO WORK</h3>
        <p>
            The PROVIDER undertakes to notify the CLIENT no later than the second working day of his inability to work.
        <br /><br />
        In the event of incapacity for work due to illness or accident, the PROVIDER reserves the right to terminate the current contract, or to modify the estimated delivery time without the CLIENT being able to demand the payment of compensation.
        </p>
        <h3 className="legal-sub-title">ARTICLE 9 - TERMINATION</h3>

        <h3 className="legal-sub-title">9.1 CANCELLATION</h3>
        <p>
            In case of termination by the CLIENT of a contract for the creation of a website, application or software before its term, the CLIENT agrees to pay within fifteen (15) days a pro rata amount of the total amount of the invoice, calculated over a period of time starting with the signing of the estimate, and ending with the estimated delivery date as notified on the estimate. In all cases, the amount of the sum concerned may not be less than the amount of the deposit.
        <br /><br />
        In the event of breach of a contract concerning a maintenance service before its term by the CLIENT, the PROVIDER will retain the sums received in full.
        </p>
        <h3 className="legal-sub-title">9.2 BREACH OF OBLIGATIONS</h3>
        <p>
            In the event of failure by the PROVIDER or the CLIENT to meet one of its substantial obligations, the other party may, within thirty (30) days from the date of receipt or, failing that, from the date of first presentation of a registered letter of formal notice with acknowledgement of receipt that has remained unsuccessful, terminate this contract by operation of law, without notice or judicial or other procedure and without prejudice to any other rights or actions, in particular with a view to claiming damages to which it may be entitled.
        <br /><br />
        If the breach of obligations is the responsibility of the CLIENT, the CLIENT shall pay a sum in accordance with the same conditions as those set forth in Article 9.1.
        <br /><br />
        If the breach of obligations is the responsibility of the PROVIDER, the PROVIDER undertakes to return to the CLIENT all sums already received for the execution of this contract within fifteen (15) days.
        </p>
        <h3 className="legal-sub-title">9.3 FORCE MAJEURE</h3>
        <p>
            Cases of force majeure are those usually recognized as such by jurisprudence, in particular: events of an unforeseeable and irresistible nature, beyond the control of the parties, against which they could not reasonably protect themselves and whose consequences they could not mitigate, or could only do so by incurring disproportionate expenses.
        <br /><br />
        The PROVIDER and the CLIENT agree that cases of force majeure justify the suspension of the parties' obligations. Consequently, neither the CLIENT nor the PROVIDER may be held responsible for the non-execution, failure or delay in the implementation of the tasks concerned by this contract.
        <br /><br />
        Force majeure suspends, for the duration of its existence, the obligations generated by this contract. If the force majeure should persist for more than three (3) months, the CLIENT or the PROVIDER may decide unilaterally to terminate the contract, without this termination being considered to be at fault. No sum received by the PROVIDER may be reimbursed to the CLIENT, and the CLIENT shall not be required to pay any additional sum.
        <br /><br />
        The termination, in this particular case, must be notified by a dated and signed letter, sent by registered mail with acknowledgement of receipt or by e-mail.
        </p>
        <h3 className="legal-sub-title">ARTICLE 10 - SETTLEMENT OF DISPUTES</h3>
        <p>
            Any dispute relating to the interpretation and execution of these general conditions of sale is subject to French law.
        <br /><br />
        If it is a private individual, the CLIENT may, under the terms of Article L.612-1 of the Consumer Code, appeal free of charge to a consumer mediator who will help to settle the dispute amicably. The CLIENT must have previously notified the PROVIDER in writing of its disagreement with the service provided.
        <br /><br />
        In the absence of an amicable resolution, the Commercial Court of Rennes will have sole jurisdiction for any dispute relating to the interpretation and execution of a contract and its consequences.
        </p>
    </div>;

    const frenchVersion = <div className="legalPageContainer">
        <h2 className="legal-main-title">Conditions Générales de Vente</h2>

        <h3 className="legal-sub-title">ARTICLE 1 – DÉFINITIONS</h3>

        <p>"PRESTATAIRE" désigne Sébastien BELMO, agissant également sous le nom commercial ZenTown, est une entreprise individuelle dont le SIRET est 524 289 469 00024. Le PRESTATAIRE se spécialise dans les services tels que la création, l'administration, la gestion et la maintenance de sites et d'applications web et mobile.
    <br /><br />
    "CLIENT" désigne toute personne physique majeure ou morale, ayant fait appel aux compétences du PRESTATAIRE dans le cadre des services proposés sur le site www.zentown.dev et se portant garante du paiement de la facture, quand bien même celle-ci serait établie au nom d'un tiers.</p>

        <h3 className="legal-sub-title">ARTICLE 2 - CHAMP D'APPLICATION</h3>

        <p>Les présentes Conditions Générales de Vente ont pour but de définir les droits et obligations des parties lors de la vente de produits et services réalisés par le PRESTATAIRE pour le CLIENT dans le cadre de ses activités d'interventions informatiques, développement, gestion et maintenance de logiciels et de sites et applications web et mobiles, dont les caractéristiques sont disponibles à l'adresse "www.zentown.dev".
    <br /><br />
    Le CLIENT faisant appel aux services du PRESTATAIRE reconnaît avoir pris connaissance des conditions générales de vente ci-présentes. Ces conditions, ainsi que le code du commerce et les conditions particulières énoncées s'il y a lieu dans les devis et propositions commerciales, réglementent seules les conditions de vente de produits et services du PRESTATAIRE.
    <br /><br />
    Le CLIENT est informé des Conditions Générales de Vente sur le devis et peut aussi les consulter à tout moment sur le site "www.zentown.dev". Ces conditions prévaudront sour toutes clauses et conditions contraires pouvant figurer sur les documents émanant du CLIENT.
    <br /><br />
    La signature du devis accompagné de la mention "BON POUR ACCORD" impliquent l'acceptation sans réserve des présentes Conditions Générales de Vente par le CLIENT, ainsi que son engagement à s'acquiter des sommes dûes. Le contrat est considéré comme conclu à réception du devis signé par le CLIENT avec la mention manuscrite « BON POUR ACCORD » et de l’acompte. Le début des travaux ne sera enclenché qu’après encaissement de l’acompte.
    <br /><br />
    Le PRESTATAIRE se réserve le droit de modifier à tout moment et sans préavis ses conditions générales de vente, ses formules et ses tarifs. Ces modifications n’impacteront en aucune manière les commandes en cours.</p>

        <h3 className="legal-sub-title">ARTICLE 3 - OBLIGATIONS DES PARTIES</h3>

        <h3 className="legal-sub-title">3.1 OBLIGATIONS DU PRESTATAIRE</h3>

        <p>De façon générale, dans le cadre d'un contrat le liant au CLIENT, le PRESTATAIRE s'engage à :
        <ul className="cgv-ul">
                <li className="cgv-li">Préserver la confidentialité de toutes les informations et documents que le PRESTATAIRE pourrait détenir du fait de l’exécution du présent contrat.</li>

                <li className="cgv-li">Assurer la confidentialité des informations communiquées par le CLIENT et à ne les communiquer à aucun tiers, même si le présent contrat arrive à son terme ou se trouve résilié.</li>

                <li className="cgv-li">Apporter tout le soin et l'expertise nécessaires à la mise en oeuvre d'un service de qualité, et tout mettre en oeuvre en vue de la satisfaction du CLIENT.</li>

                <li className="cgv-li">Respecter au mieux les délais d'exécution annoncés et informer régulièrement le CLIENT sur l'avancée de la réalisation du service concerné par le présent contrat.</li>
            </ul>
            Dans le cadre de l'exécution d'un contrat de développement de site web, application web, application mobile ou logiciel, le PRESTATAIRE s'engage à :
        <ul className="cgv-ul">
                <li className="cgv-li">Développer, sur ses propres ordinateurs et logiciels, dans ses locaux, les éléments décrits dans le devis.</li>

                <li className="cgv-li">Respecter scrupuleusement les indications et recommandations détaillées dans le cahier des charges.</li>

                <li className="cgv-li">Dans le cas des produits web (sites web, applications web et applications mobiles), prendre en charge le paiement et la mise en place technique du nom de domaine, des adresses e-mails et de l'hébergement du produit concerné pour une durée de douze (12) mois à compter de la date de mise en ligne (sauf mention contraire établie dans le devis et le cahier des charges sur demande du CLIENT).</li>

                <li className="cgv-li">Fournir les codes d'accès ainsi que tous les éléments nécéssaires au CLIENT afin que celui-ci puisse administrer et gérer en toute autonomie le produit qui aura été développé à son intention dans le cadre du présent contrat.</li>

                <li className="cgv-li">Donner une courte formation au CLIENT sur simple requête de celui-ci à l'utilisation du produit concerné par le présent contrat.</li>
            </ul>
            Dans le cadre de l'exécution d'un contrat de maintenance, le PRESTATAIRE s'engage à :
        <ul className="cgv-ul">
                <li className="cgv-li">Effectuer mensuellement des interventions de maintenance sur un seul et unique produit développé par le PRESTATAIRE pour le CLIENT et informer le CLIENT. Ces interventions comprennent la sauvegarde mensuelle des données relatives au produit concerné ainsi que la mise à jour (si applicable) des logiciels et technologies permettant le bon fonctionnement du produit concerné. Le PRESTATAIRE informera le CLIENT sous quarante-huit (48) heures de l'exécution de ces interventions de maintenance.</li>

                <li className="cgv-li">Répondre dans un délai de trois (3) jours ouvrés à toute demande d'intervention par le CLIENT concernant le produit concerné par le présent contrat.</li>

                <li className="cgv-li">Effectuer six (6) heures de travail sur requête du CLIENT dans les douze (12) mois suivant la signature du devis accompagné de la mention "BON POUR ACCORD" et de la réception du paiement. Ces heures seront réparties en fonction des besoins du CLIENT et de la disponibilité du PRESTATAIRE, durant des jours ouvrables et pendant des horaires de bureau (8h-12 et 13h30-18h). Ces six (6) heures se font sur un seul et unique produit développé par le PRESTATAIRE pour le CLIENT, et concernent des opérations d'ordre graphique ou de programmation.</li>

                <li className="cgv-li">Toute heure supplémentaire fera l'objet d'un devis supplémentaire et sera facturée cinquante (50) euros TTC (toutes taxes comprises). Toute heure supplémentaire prendra place sur les même plages horaires et calendaires que les six (6) heures incluses dans le service de maintenance et sous les même conditions.</li>
            </ul>
        </p>

        <h3 className="legal-sub-title">3.2 OBLIGATIONS DU CLIENT</h3>

        <p>Dans le cadre d'un contrat le liant au PRESTATAIRE, le CLIENT s'engage à :
    <ul className="cgv-ul">
                <li className="cgv-li">Dater, signer et apposer la mention "BON POUR ACCORD" sur le devis et l'envoyer au PRESTATAIRE par e-mail ou voie postale qui atteste que le CLIENT a lu et approuvé sans réserve les présentes Conditions Générales de Vente.</li>

                <li className="cgv-li">Collaborer activement avec le PRESTATAIRE en lui fournissant dans les délais utiles les informations et documents nécessaires à la bonne exécution du contrat. Le PRESTATAIRE ne pourra être tenu pour responsable en cas de retard dans l’exécution des travaux dû au non respect de cet engagement par le CLIENT.</li>

                <li className="cgv-li">Fournir tous les éléments textuels et graphiques nécessaires à la bonne réalisation du contrat, notamment dans des formats utilisables par le PRESTATAIRE en fonction des supports visés (contenus textuels, logos, attestations, informations pour les transferts de mails, images, sons et vidéos numériques et autres) au plus tard à la signature du devis. Le CLIENT s'assurera de disposer des droits nécessaires sur les éléments fournis, et seule la responsabilité du CLIENT pourra être engagée à ce titre.</li>

                <li className="cgv-li">Garantir le PRESTATAIRE contre toute action qui pourrait lui être intentée du fait du caractère des données ou informations (textes, images, sons) qui auraient été fournies ou choisies par le CLIENT.</li>

                <li className="cgv-li">Respecter toutes les lois et tous les règlements applicables, y compris, de façon non limitative, les lois et règlements concernant la propriété intellectuelle, la protection des données à caractère personnel, les obligations de confidentialité ou de non-divulgation et la protection des mineurs pour les éléments d’information communiqués au PRESTATAIRE.</li>

                <li className="cgv-li">Régler dans les délais définis par les présentes Conditions Générales de Vente les sommes dûes au PRESTATAIRE.</li>

                <li className="cgv-li">Ne pas vendre ni utiliser pour un autre produit les codes sources, qui restent la propriété du PRESTATAIRE, sauf autorisation écrite du PRESTATAIRE. Toute étude, rapport, information écrite, devis, cahier des charges, à titre onéreux ou gratuit, réalisés par le PRESTATIRE dans le but de fournir des prestations au CLIENT, restent la propriété exclusive du PRESTATIRE. Le CLIENT s’engage à ne pas les transmettre.</li>

                <li className="cgv-li">Autoriser le PRESTATAIRE à citer le nom et la dénomination sociale du CLIENT, ainsi que son URL, les copies d’écran de ses pages Web, à titre de référence pour la promotion commerciale du PRESTATAIRE.</li>

                <li className="cgv-li">Autoriser le PRESTATAIRE à mentionner sa réalisation pour le CLIENT comme référence dans le cadre de ses démarches de prospection commerciale, de communication externe et de publicité. Sauf mention contraire explicite du Client, le PRESTATAIRE se réserve la possibilité d’inclure dans la réalisation une mention commerciale indiquant clairement sa contribution, telle la formule "Développé par ZenTown", assortie lorsque le support le permet d’un lien hypertexte pointant vers le site commercial de son activité (https://www.zentown.dev).</li>

                <li className="cgv-li">Respecter les dispositions relatives aux mentions légales obligatoires à insérer sur son site internet en vertu de la loi du 30 septembre 1986 modifiée et celles relatives à l’informatique, aux fichiers et aux libertés, en particulier celles relatives aux déclarations des traitements automatisés d’informations nominatives auprès de la Commission Nationale de l’Informatique et des Libertés (C.N.I.L.).</li>

                <li className="cgv-li">Notifier le PRESTATAIRE de toute modification concernant sa situation (notamment changement d'adresse postale ou électronique) au plus tard dans les deux (2) semaines consécutives à ce changement, à l'exception du changement de son adresse e-mail qui devra être notifiée au PRESTATAIRE au plus tard quarante-huit (48) heures après le dit changement.</li>
            </ul>
        </p>

        <h3 className="legal-sub-title">ARTICLE 4 - CAHIER DES CHARGES</h3>

        <p>Dans le cadre d'un contrat de développement de site web, application web, application mobile ou logiciel, un cahier des charges sera établi par le CLIENT et pourra éventuellement être sujet à modifications et adaptations d'un commun accord entre le CLIENT et le PRESTATAIRE jusqu'à la rédaction d'une version finale satisfaisante pour les deux parties.
    <br />Le cahier des charges sera ensuite signé par le CLIENT et le PRESTATAIRE et ne pourra plus être sujet à modification par la suite, sauf accord mutuel, explicite et écrit des deux parties. Le cahier des charges servira de référence et base à l'établissement d'un devis gratuit par le PRESTATAIRE.
    <br /><br />
    Dans les situations où le cahier des charges ne donne pas d’indications ou de recommandations suffisamment précises sur la façon dont doit être abordée le développement et/ou la création d’un élément inclus dans la commande, les deux parties s’accordent sur le fait que le choix de la conception est laissé à la libre interprétation du PRESTATAIRE.</p>

        <h3 className="legal-sub-title">ARTICLE 5 - DEVIS ET PAIEMENT</h3>

        <h3 className="legal-sub-title">5.1 MOYENS DE PAIEMENT</h3>

        <p>Le réglement des sommes dûes au PRESTATAIRE par le CLIENT dans le cadre du présent contrat pourront s'effectuer par espèces, virement bancaire, ou en ligne par carte bleue via la plate-forme Paypal.</p>

        <h3 className="legal-sub-title">5.2 POUR UNE CREATION WEB OU LOGICIELLE</h3>

        <p>Dans le cadre d'un contrat de développement de site web, application web, application mobile ou logiciel, un devis sera réalisé gratuitement par le PRESTATAIRE après acceptation et signature du cahier des charges par le CLIENT et le PRESTATAIRE. Le devis est valable durant un (1) mois à compter de sa date d'émission et n'engage pas le CLIENT tant que celui-ci n'aura pas confirmé avoir accepté l'offre.
    <br /><br />
    Le devis sera envoyé au CLIENT par e-mail ou voie postale, à la préférence du CLIENT. Ce devis devra être daté, signé et estampillé de la mention "BON POUR ACCORD" par le CLIENT, puis être renvoyé au PRESTATAIRE par e-mail ou par voie postale.
    <br /><br />
    A la signature du devis, le client devra s'acquiter d'un acompte de vingt-cinq (25) % de la somme totale dûe pour le produit concerné par le présent contrat. Le développement du produit concerné par le présent contrat ne commencera qu'à réception de l'acompte et du devis dûment signé et complété.
    <br /><br />
    Le règlement du reste de la somme dûe au PRESTATAIRE par le CLIENT, soit soixante-quinze (75) % de la somme totale, se fera impérativement au plus tard dans les deux (2) jours ouvrés suivant la livraison du produit. Le CLIENT sera averti au plus tard deux (2) jours ouvrés de la date de livraison définitive de son produit par e-mail, et recevra également un e-mail de confirmation le jour dit. Cet e-mail de confirmation signifieara l'achèvement des travaux.</p>

        <h3 className="legal-sub-title">5.3 POUR UN SERVICE DE MAINTENANCE</h3>

        <p>Un devis au tarif unique de quatre cent (400) euros est réalisé gratuitement par le PRESTATAIRE dans le cadre du service de maintenance. Le devis est valable durant un (1) mois à compter de sa date d'émission et n'engage pas le CLIENT tant que celui-ci n'aura pas confirmé avoir accepté l'offre.
    <br /><br />
    Le devis sera envoyé au CLIENT par e-mail ou voie postale, à la préférence du CLIENT. Ce devis devra être daté, signé et estampillé de la mention "BON POUR ACCORD" par le CLIENT, puis être renvoyé au PRESTATAIRE par e-mail ou par voie postale.
    <br /><br />
    Le contrat ne prendra effet qu'à partir de la réception par le PRESTATAIRE du devis signé et dûment complété, et de la réception du paiement de la totalité de la somme figurant sur le devis par le CLIENT.
    <br /><br />
    Toute heure de maintenance supplémentaire fera l'objet d'un devis séparé, aux même conditions que le contrat de maintenance sus-cité, et sera facturée au tarif unique de cinquante (50) euros TTC (toutes taxes comprises).</p>

        <h3 className="legal-sub-title">ARTICLES 6 - GARANTIE</h3>

        <h3 className="legal-sub-title">6.1 GARANTIE POUR LA CREATION WEB OU LOGICIELLE</h3>

        <p>Dans le cadre d'un contrat de développement de site web, application web, application mobile ou logiciel, pour une durée de quinze (15) jours suivant la fin des travaux, le CLIENT pourra demander des modifications mineures de contenu ou d'ordre esthétique.
    <br />Le PRESTATAIRE s'engage à corriger toute anomalie d'ordre technique ou esthétique incombant à sa responsabilité et relevée par lui-même ou par le CLIENT, à savoir le contenu du code source ainsi que la configuration de l'hébergement du site web, application web ou application mobile.</p>

        <h3 className="legal-sub-title">6.2 GARANTIE POUR LE SERVICE DE MAINTENANCE</h3>

        <p>Le PRESTATAIRE s'engage à corriger dans les délais les plus brefs, gratuitement et sans décompte des heures relevant du service de maintenance, toute anomalie découlant d'une intervention de sa part dans le cadre du service de maintenance.</p>

        <h3 className="legal-sub-title">ARTICLE 7 - RESPONSABILITÉ</h3>

        <p>Le fonctionnement du service ou produit concerné par ce contrat pourra être interrompu pour permettre au PRESTATAIRE d’effectuer les opérations de maintenance nécessaires à l'exécution du dit contrat.
        Le PRESTATAIRE s’engage cependant, lorsque les conditions le permettent, à réaliser ces interventions pendant les heures les moins pénalisantes pour le client. La suspension de l’accès au produit ou service concerné par ce contrat durant les opérations de maintenance ne donnera droit au versement d’aucun dédommagement.
    <br /><br />
    Le PRESTATAIRE ne pourra en aucun cas être tenu responsable dans les cas suivants :
    <ul className="cgv-ul">
                <li className="cgv-li">Utilisation d'une façon non prévue ou explicitement autorisée par le présent contrat des produits ou services concernés par celui-ci.</li>

                <li className="cgv-li">Utilisation des produits ou services concernés par le contrat dans un environnement ou selon une configuration ne respectant pas les pré-requis techniques indiqués par le PRESTATAIRE, ou en lien avec des programmes ou données de tiers non explicitement approuvés par le PRESTATAIRE.</li>

                <li className="cgv-li">Perte de données du CLIENT faisant suite à une intervention du CLIENT ou d'un tiers désigné par celui-ci sur les produits ou services concernés par le présent contrat.</li>

                <li className="cgv-li">Dommages résultant d'une faute ou d'une négligence du CLIENT, ou que celui-ci aurait pu éviter en faisant appel aux conseils du PRESTATAIRE.</li>

                <li className="cgv-li">Incident technique majeur susceptible de faire obstacle à la réalisation du contrat (attentats, guerres, catastrophes naturelles, cas de force majeure ou coupure prolongée de réseau Internet ou électrique indépendante de sa volonté).</li>

                <li className="cgv-li">Préjudices indirects, notamment les préjudices financiers ou commerciaux, perte de commandes, perte de données, manque à gagner, atteinte à l’image de marque, perte de bénéfices ou de clients (notamment en cas de défectuosité ou de piratage du système).</li>

                <li className="cgv-li">Intrusions malveillantes de tiers sur les serveurs, boîtes e-mail et bases de données relatifs aux produits et services concernés par le présent contrat.</li>

                <li className="cgv-li">Contamination par virus informatique des équipements, logiciels et données du CLIENT.</li>

            </ul>

    En aucun cas le PRESTATAIRE ne pourra être tenu responsable de la perte de documents requis pour la réalisation des services ou produits concernés par le présent contrat. Le CLIENT est tenu de n’envoyer que des copies ou des documents sans valeur de remplacement. Le PRESTATAIRE se réserve le droit de refuser tout document, texte ou image, contraire à son éthique, aux bonnes mœurs ou non conforme à la législation en vigueur.
    <br /><br />
    Le PRESTATAIRE décline toute responsabilité légale et morale si le CLIENT a trompé le PRESTATAIRE quant au futur contenu du site contraire aux bonnes mœurs ou de nature illégale, que ce soit en cours de mission ou après.</p>

        <h3 className="legal-sub-title">ARTICLE 8 - INCAPACITE DE TRAVAIL</h3>

        <p>Le PRESTATAIRE s'engage à avertir le CLIENT au plus tard le deuxième jour ouvrable de son incapacité de travail.
    <br /><br />
    En cas d'incapacité de travail consécutive à une maladie ou à un accident, le PRESTATAIRE se réserve le droit de rompre le contrat en cours, ou de modifier la durée de livraison estimée sans que le CLIENT ne puisse exiger le versememnt d'indemnités.</p>

        <h3 className="legal-sub-title">ARTICLE 9 - RESILIATION</h3>

        <h3 className="legal-sub-title">9.1 ANNULATION</h3>

        <p>En cas de rupture par le CLIENT d'un contrat de création de site web, application ou logiciel avant son terme, le CLIENT s'engage à s'acquiter sous quinze (15) jours d'un somme au prorata du montant total de la facture, calculée sur une durée dont le point de départ est la signature du devis, et ayant pour fin la date de livraison estimée telle que notifiée sur le devis.
        Dans tous les cas, le montant de la somme concernée ne pourra être inférieure au montant de l'acompte.
    <br /><br />
    En cas de rupture d'un contrat concernant un service de maintenance avant son terme par le CLIENT, le PRESTATAIRE conservera les sommes perçues dans leur intégralité.</p>

        <h3 className="legal-sub-title">9.2 MANQUEMENT AUX OBLIGATIONS</h3>

        <p>En cas de manquement du PRESTATAIRE ou du CLIENT à une de ses obligations substantielles, l’autre partie pourra, sous trente (30) jours à compter de la date de réception ou, à défaut, de la date de première présentation d’une lettre de mise en demeure recommandée avec demande d’avis de réception restée infructueuse, prononcer la résiliation de plein droit du présent contrat, sans préavis ni procéure judiciaire ou autre et sans préjudice d'autres droits ou actions, notamment en vue de solliciter des dommages-intérêts auxquels elle pourrait prétendre.
    <br /><br />
    Si le manquement aux obligations incombe à la responsabilité du CLIENT, ce dernier devra s'acquiter d'une somme selon les conditions identiques à celles de l'article 9.1.
    <br /><br />
    Si le manquement aux obligations incombe à la responsabilité du PRESTATAIRE, ce dernier s'engage à restituer au CLIENT l'intégralité des sommes déjà perçues pour l'exécution de ce contrat sous quinze (15) jours.</p>

        <h3 className="legal-sub-title">9.3 FORCE MAJEURE</h3>

        <p>Les cas de force majeure sont ceux habituellement reconnus comme tels par la jurisprudence, notamment : les évènements présentenant un caractère imprévisible et irrésistible, échappant au contrôle des parties, contre lesquels elles ne pourraient pas raisonnablement se prémunir et dont elles ne pourraient pallier aux conséquences, ou ne le pourraient qu'en engageant des dépenses hors de proportion.
    <br /><br />
    Le PRESTATAIRE et le CLIENT conviennent que les cas de force majeure justifient la suspension des obligations des parties. Par conséquent, ni le ClIENT, ni le PRESTATAIRE ne pourra être tenu responsable de l'inéxécution, d'un manquement ou d'un retard pris dans la mise en oeuvre des tâches concernées par le présent contrat.
    <br /><br />
    La force majeure suspend, pendant toute la durée de son existence, les obligations générées par le présent contrat. Si la force majeure devait subsister plus de trois (3) mois, le CLIENT ou le PRESTATAIRE pourra décider unilatéralement de mettre fin au contrat, sans que cette résiliation ne puisse être considérée comme fautive. Aucune somme perçue par le PRESTATAIRE ne pourra être remboursée au CLIENT, et ce dernier ne devra s'acquiter d'aucune somme supplémentaire.
    <br /><br />
    La résiliation, dans ce cas particulier, devra être notifiée par une lettre datée et signée, envoyé par recommandé avec avis de réception ou par e-mail.</p>

        <h3 className="legal-sub-title">ARTICLE 10 - REGLEMENT DES LITIGES</h3>

        <p>Tout litige relatif à l’interprétation et à l’exécution des présentes conditions générales de vente est soumis au droit français.
    <br /><br />
    S'il est un particulier, le CLIENT peut, en vertu de l'article L.612-1 du Code de la Consommation, faire gratuitement appel à un médiateur de la consommation qui l'aidera à régler le litige à l'amiable. Le CLIENT devra préalablement avoir notifié par écrit au PRESTATAIRE son désaccord sur la prestation effectuée.
    <br /><br />
    A défaut de résolution amiable, le Tribunal de Commerce de Rennes sera seul compétent pour tout litige relatif à l’interprétation et l’exécution d’un contrat et de ses suites.</p>
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

export default Terms;