import React, { useState, useEffect } from "react";
import BannerImage from "../../../public/banner.png";
import FadeInOnScroll from "../Scripts/FadeInOnScroll";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Section = styled.section`
  position: relative;
  background-image: url(${(props) => props.bgImage});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8); 
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1.25rem;
  text-align: center;
  color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 66.67%;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: white;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background-color: #128c7e;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #0e76a8;
  color: #ffffff;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Banner = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = BannerImage.src;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <Section id="home" bgImage={BannerImage.src}> 
      {bgLoaded && ( 
        <Container>
          <ContentWrapper>
            <FadeInOnScroll delay={200}>
              <Title>
                INOVAÇÃO DIGITAL QUE IMPULSIONA O SUCESSO DO SEU NEGÓCIO!
              </Title>
            </FadeInOnScroll>
            <FadeInOnScroll delay={400}>
              <Paragraph>
                Na DNG Consulting, somos movidos pela inovação e compromisso em impulsionar o
                seu negócio para novos patamares no mundo digital. Enfrentamos
                desafios com entusiasmo, entregando soluções personalizadas que
                superam expectativas. Nosso foco é criar experiências digitais
                excepcionais, garantindo que cada projeto reflita a singularidade
                e o sucesso de nossos clientes.
              </Paragraph>
            </FadeInOnScroll>
            <FadeInOnScroll delay={600}>
              <ButtonGroup>
              <Button href="https://api.whatsapp.com/send?phone=5511988336947" target="_blank">
                  Entre em contato{" "}
                  <FaWhatsapp style={{ marginLeft: "0.5rem", fontSize: "2rem" }} />
                </Button>
                <SecondaryButton href="https://linkedin.com">
                  Visite nosso Feed{" "}
                  <CiLinkedin style={{ marginLeft: "0.5rem", fontSize: "2rem" }} />
                </SecondaryButton>
              </ButtonGroup>
            </FadeInOnScroll>
          </ContentWrapper>
        </Container>
      )}
    </Section>
  );
};

export default Banner;