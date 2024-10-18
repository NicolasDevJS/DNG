"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import styled from 'styled-components';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

const FooterWrapper = styled.footer`
  background-color: #1f2937; 
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
  color: #60a5fa; 
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
`;

const FooterLink = styled.a`
  color: #9ca3af;
  display: block;
  margin-bottom: 0.5rem;
  text-decoration: none;

  &:hover {
    color: #60a5fa; 
  }
`;

const ContactInfo = styled.p`
  color: #9ca3af; 
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
              <ContactInfo>Telefone: (11) 98765-4321</ContactInfo>
              <ContactInfo>Email: contato@empresa.com</ContactInfo>
            </FooterSection>
            <FooterSection>
              <FooterTitle>Links Úteis</FooterTitle>
              <FooterLink href="#">Início</FooterLink>
              <FooterLink href="#">Sobre Nós</FooterLink>
              <FooterLink href="#">Serviços</FooterLink>
              <FooterLink href="#">Contato</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterTitle>Redes Sociais</FooterTitle>
              <FooterLink href="#">LinkedIn</FooterLink>
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
            </FooterSection>
          </FooterContainer>
        </FooterWrapper>
      </body>
    </html>
  );
}
