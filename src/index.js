import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';

import locale_en from './translations/en.json';
import locale_fr from './translations/fr.json';

const data = {
  'en': locale_en,
  'fr': locale_fr
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <IntlProvider locale={language} messages={data[language]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
