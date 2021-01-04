import React, { useState } from 'react';
import './App.css';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import 'tachyons';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {

  const [page, setPage] = useState(<Home />);

  const changePage = (e) => {
    if (e === 'Home') {
      setPage(<Home />);
    } else if (e === 'Services') {
      setPage(<Services changePage={changePage} />);
    } else if (e === 'Portfolio') {
      setPage(<Portfolio />);
    } else if (e === 'Contact') {
      setPage(<Contact />);
    }
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Nav changePage={changePage} />
      {page}
      <Footer />
    </>
  );
}

export default App;
