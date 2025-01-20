import React from "react";
import Image from "next/image";
import styled from "styled-components";
import FadeInOnScroll from "../Scripts/FadeInOnScroll";
import { FaLinkedin } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nicolas from "../../../public/nicolas.png";
import davson from "../../../public/davson.png";
import venush from "../../../public/bovo.png";
import felipe from "../../../public/felipe.png";

const Section = styled.section`
  color: #000000;
  background-color: #fff;
  padding: 2rem 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 2.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 5rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: #4a5568;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const Paragraph = styled.p`
  max-width: 66.67%;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 1rem;
  color: #4a5568;
  padding-bottom: 0.5rem;
  text-align: ${({ justify }) => (justify ? "justify" : "center")};
`;

const CardContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  min-height: 500px;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #1a202c;
  margin-top: 1rem;
`;

const CardSubtitle = styled.h3`
  font-size: 1rem;
  color: #718096;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const SocialLinks = styled.span`
  display: inline-flex;
  align-items: center;
`;

const SocialLink = styled.a`
  color: #000000;
  margin-left: 0.5rem;

  svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 1rem;
  }
`;

const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
`;

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const teamMembers = [
  {
    name: "Nicolas Melo",
    title: "Desenvolvedor Full Stack Mobile e Web",
    image: nicolas,
    description:
      "Desenvolvedor full stack mobile, especialista em criar soluções inovadoras que maximizam eficiência, performance e oferecem experiências excepcionais.",
    linkedin: "https://www.linkedin.com/in/nicolasmelodev/",
  },
  {
    name: "Davson Oliveira",
    title: "Desenvolvedor Back-end",
    image: davson,
    description:
      "Desenvolvedor backend especializado em arquiteturas robustas, focado em alta performance, segurança, escalabilidade e integração para sistemas eficientes e confiáveis.",
    linkedin: "https://www.linkedin.com/in/davson-silva/",
  },
  {
    name: "Giuseppe Bovo",
    title: "Gerente administrativo",
    image: venush,
    description:
      "Responsável pela parte administrativa e executiva da DNG, gerenciando atividades e garantindo eficiência dos processos internos e uma boa relação cliente-empresa.",
    linkedin: "https://www.linkedin.com/in/giuseppe-bovo-801a93169/",
  },
  {
    name: "Felipe Emanuel",
    title: "Desenvolvedor Web",
    image: felipe,
    description:
      "Desenvolvedor web especializado em criar interfaces intuitivas e sistemas dinâmicos, focado em performance, responsividade e experiências imersivas para o usuário.",
    linkedin: "https://www.linkedin.com/in/felipe-emanuel-/",
  },
];

const About = () => {
  return (
    <Section id="sobre">
      <TitleWrapper />
      <FadeInOnScroll>
        <ContentWrapper>
          <Title>Sobre a nossa equipe</Title>
          <Paragraph>Bem-vindo(a) à DNG Consulting</Paragraph>
          <Paragraph justify>
            A DNG Consulting é uma equipe dedicada e apaixonada por tecnologia,
            focada em desenvolver soluções digitais personalizadas para
            alavancar o crescimento do seu negócio. Com ampla experiência no
            mercado, enfrentamos desafios com determinação e entregamos
            resultados excepcionais. Nosso compromisso é transformar a sua
            presença digital em algo único e impactante, sempre priorizando a
            satisfação e o sucesso dos nossos clientes.
          </Paragraph>
        </ContentWrapper>
      </FadeInOnScroll>

      <StyledSlider {...sliderSettings}>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <FadeInOnScroll>
              <CardContent>
                <StyledImageContainer>
                  <Image
                    alt={member.name}
                    src={member.image}
                    width={150}
                    height={150}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </StyledImageContainer>
                <CardTitle>{member.name}</CardTitle>
                <CardSubtitle>{member.title}</CardSubtitle>
                <CardText>{member.description}</CardText>
                <SocialLinks>
                  <SocialLink href={member.linkedin}>
                    <FaLinkedin />
                  </SocialLink>
                </SocialLinks>
              </CardContent>
            </FadeInOnScroll>
          </div>
        ))}
      </StyledSlider>
    </Section>
  );
};

export default About;
