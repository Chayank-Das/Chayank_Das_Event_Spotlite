// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 4rem;
  background-color: #f9f9f9;
  color: #333;
  font-size: 0.9rem;
  border-top: 1px solid #ddd;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const FooterDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin-top: 1rem;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SupportTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const SupportLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;

  &:hover {
    text-decoration: underline;
    color: #333;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <LeftSection>
        <FooterTitle>EventSpot Lite</FooterTitle>
        <FooterDescription>Discover, Attend, Enjoy!</FooterDescription>
        <Copyright>EventSpot ©</Copyright>
      </LeftSection>
      <RightSection>
        <SupportTitle>Support</SupportTitle>
        <SupportLink href="#help-center">Help Center</SupportLink>
        <SupportLink href="#assistance">Assistance</SupportLink>
        <SupportLink href="#user-manual">User Manual</SupportLink>
        <SupportLink href="#get-in-touch">Get in Touch</SupportLink>
      </RightSection>
    </FooterContainer>
  );
}

export default Footer;
