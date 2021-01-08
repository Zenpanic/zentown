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
import Legal from './Legal';
import Terms from './Terms';

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
    } else if (e === 'Legal') {
      setPage(<Legal />);
    } else if (e === 'Terms') {
      setPage(<Terms />);
    }
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Nav changePage={changePage} />
      {page}
      <Footer changePage={changePage} />
    </>
  );
}

export default App;
