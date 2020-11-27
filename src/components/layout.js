import React, { useState } from 'react';


import { LayoutWrapper } from './styles/LayoutWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Hamburger from './Hamburger';
import OverlayMenu from './OverlayMenu';

import nyYorkColors from './constants/colors';

import 'bootstrap/dist/css/bootstrap-grid.css';

const Layout = ({children}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <LayoutWrapper theme={nyYorkColors}>
        <Hamburger handleOverlayMenu={handleOverlayMenu} />
        <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
        <Header theme={nyYorkColors}  />
          <main id="main" className="site-main" role="main" >
            {children}
          </main>
        <Footer />
      </LayoutWrapper>
    </>
  );
};




export default Layout;
