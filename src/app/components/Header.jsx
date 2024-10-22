"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import styled from "styled-components";

// Styled Components
const HeaderWrapper = styled.header`
  background-color: #1f2937;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 20;
  height: 80px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  margin-left: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;

  &.active span:nth-child(1) {
    transform: rotate(45deg) translateY(0.25rem);
  }
  &.active span:nth-child(2) {
    opacity: 0;
  }
  &.active span:nth-child(3) {
    transform: rotate(-45deg) translateY(-0.25rem);
  }

  span {
    background-color: white;
    display: block;
    height: 0.2rem;
    width: 1.75rem;
    margin-bottom: 0.3rem;
    transition: all 0.3s ease;
  }
`;

const Nav = styled.nav`
  display: ${({ isMobile, menuOpen }) =>
    isMobile && !menuOpen ? "none" : "flex"};
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: center;
  align-items: center;
  background-color: ${({ isMobile }) => (isMobile ? "#1f2937" : "transparent")};
  position: ${({ isMobile, menuOpen }) =>
    isMobile && menuOpen ? "fixed" : "static"};
  top: ${({ isMobile, menuOpen }) => (isMobile && menuOpen ? "80px" : "auto")};
  width: ${({ isMobile }) => (isMobile ? "100%" : "auto")};
  height: ${({ isMobile }) => (isMobile ? "calc(100vh - 80px)" : "auto")};
`;

const NavLink = styled(Link)`
  color: white;
  cursor: pointer;
  padding: 1rem;
  text-align: center;
  &:hover {
    color: lightgray;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Container>
        <LogoContainer>
          <Image src={Logo} alt="Logo" width={56} height={56} />
        </LogoContainer>

        <Nav isMobile={isMobile} menuOpen={menuOpen}>
          <NavLink to="home" spy={true} smooth={true} offset={-60} duration={500}>
            Início
          </NavLink>
          <NavLink to="sobre" spy={true} smooth={true} offset={-60} duration={500}>
            Sobre
          </NavLink>
          <NavLink to="servicos" spy={true} smooth={true} offset={-60} duration={500}>
            Serviços
          </NavLink>
          <NavLink to="projetos" spy={true} smooth={true} offset={-120} duration={500}>
            Projetos
          </NavLink>
          <NavLink to="contato" spy={true} smooth={true} offset={-60} duration={500}>
            Contato
          </NavLink>
        </Nav>

        <SocialContainer>
          <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={{ fontSize: "2rem", color: "#25D366" }} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin style={{ fontSize: "2rem", color: "#0077B5" }} />
          </a>
        </SocialContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
