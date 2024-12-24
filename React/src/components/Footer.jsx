import React from 'react';

import { FooterContainer } from './Styles';

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} -{' '}
      <a target="_blank" rel="noreferrer">
        Mohammed Manas
      </a>
    </FooterContainer>
  );
};

export default Footer;