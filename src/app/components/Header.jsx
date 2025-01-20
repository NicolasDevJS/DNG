"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #000000;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 20;

  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    height: 60px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  margin-left: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    background-color: white;
    height: 2px;
    width: 20px;
    margin: 3px 0;
    transition: all 0.3s ease;
  }

  &.active span:nth-child(1) {
  transform: rotate(45deg) translateY(10px); 
}

&.active span:nth-child(2) {
  opacity: 0; 
}

&.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-11px); /* Alinha o terceiro traço */
}
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    background-color: #1f2937;
    z-index: 10;
    padding: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  cursor: pointer;
  padding: 1rem;
  text-align: center;
  &:hover {
    color: lightgray;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
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
          <LogoText>DNG</LogoText>
        </LogoContainer>

        {isMobile && (
          <Hamburger onClick={toggleMenu} className={menuOpen ? "active" : ""}>
            <span />
            <span />
            <span />
          </Hamburger>
        )}

        <Nav menuOpen={menuOpen}>
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

          <SocialContainer>
            <a href="https://api.whatsapp.com/send?phone=5511988336947" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ fontSize: "1.5rem", color: "#25D366" }} />
            </a>
            <a href="https://www.linkedin.com/company/dng/" target="_blank" rel="noopener noreferrer">
              <CiLinkedin style={{ fontSize: "1.5rem", color: "#0077B5" }} />
            </a>
          </SocialContainer>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
