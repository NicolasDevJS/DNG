"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import styled from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

const FooterWrapper = styled.footer`
  background-color:rgb(0, 0, 0); 
  color: #e5e7eb; 
  padding: 0rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
`;

const FooterSection = styled.div`
  margin-bottom: 1.5rem;
  flex: 1;
  min-width: 250px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterTitle = styled.h3`
  color:rgb(255, 255, 255); 
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
`;

const FooterLink = styled.a`
  color:rgb(255, 255, 255);
  display: block;
  margin-bottom: 0.5rem;
  text-decoration: none;

  &:hover {
    color:rgb(0, 115, 255); 
  }
`;

const ContactInfo = styled.p`
  color:rgb(255, 255, 255); 
  margin-bottom: 0.5rem;
`;

const Copyright = styled.p`
  margin-top: 1rem;
  color: #6b7280; 
  font-size: 0.875rem;
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FooterWrapper>
          <FooterContainer>
            <FooterSection>
              <FooterTitle>Contato</FooterTitle>
              <ContactInfo>Telefone: (11) 98833-6347</ContactInfo>
              <ContactInfo>contato@dngconsulting.com.br</ContactInfo>
            </FooterSection>
            <FooterSection>
              <FooterTitle>Redes Sociais</FooterTitle>
              <FooterLink href="https://www.linkedin.com/company/dng/">LinkedIn</FooterLink>
              <FooterLink href="#">Instagram</FooterLink>
            </FooterSection>
          </FooterContainer>
        </FooterWrapper>
      </body>
    </html>
  );
}
