// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.secondary};
  color: #fff;
  padding: 2rem;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 Positiva. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
