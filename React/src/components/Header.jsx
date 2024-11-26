import React from 'react';
import { TopHeader } from './Styles';
// import Logo from '../images/logo.png';
import Logo from '../images/download.png'
const Header = () => {
  return (
    <TopHeader>
      <img src={Logo} alt="Mohammed Manas" />
      <a href="https://github.com/MohdManas" target="_blank" rel="noreferrer">
        <i className="fa fa-github"></i>
      </a>
    </TopHeader>
  );
};

export default Header;