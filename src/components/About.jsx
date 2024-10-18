import React from "react";
import Image from "next/image";
import styled from "styled-components";
import FadeInOnScroll from "../app/Scripts/FadeInOnScroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nicolas from "../../public/nicolas.png";
import davson from "../../public/davson.png";
import venush from "../../public/venush.png";
import felipe from "../../public/felipe.png";
import daniel from "../../public/daniel.png";

const Section = styled.section`
  color: #4a5568;
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

const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  color: #718096;
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
    description: "Especialista em desenvolvimento full stack mobile, meu foco é criar soluções inovadoras que maximizam a eficiência e a experiência do usuário. Com uma abordagem estratégica, busco otimizar a performance e funcionalidade de cada aplicativo.",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Davson Oliveira",
    title: "Desenvolvedor Back-end",
    image: davson,
    description:
      "Como dev meu objetivo é Reclamar quando o código não funciona, reclamo quando funciona. A cada erro, cobro a equipe inteira... mas resolver? Ah, isso deixo pra depois!",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Giusepp Venush",
    title: "Desenvolvedor Front-End",
    image: venush,
    description:
      "Meu trabalho é simples: garantir que vocês não acabem presos. Se der errado, foi só um 'mal-entendido' jurídico. Melhor deixar comigo!",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Henrique Silveira",
    title: "Desenvolvedor Front-End",
    image: felipe,
    description:
      "Como dev front-end amador, meu talento é transformar simples páginas em enigmas visuais. Se o layout quebrar, é só o meu toque 'artístico'!",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Daniel ???",
    title: "????? ??????",
    image: daniel,
    description:
      "?????? ?/??????? ???????? ???????? ??????? ???????",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
];

const About = () => {
  return (
    <Section id="sobre">
      <TitleWrapper />
      <FadeInOnScroll>
        <ContentWrapper>
          <Title>Sobre a nossa equipe</Title>
          <Paragraph>Bem-vindo(a) à VH Web Solutions,</Paragraph>
          <Paragraph justify>
            Somos uma equipe apaixonada por tecnologia, dedicada a criar
            soluções digitais inovadoras para impulsionar o seu negócio. Com uma
            vasta experiência no mercado, estamos prontos para enfrentar
            desafios e entregar resultados excepcionais, sempre com foco na
            satisfação dos nossos clientes. Nossa missão é tornar a sua presença
            online única e impactante.
          </Paragraph>
        </ContentWrapper>
      </FadeInOnScroll>

      <StyledSlider {...sliderSettings}>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <FadeInOnScroll>
              <CardContent>
                <Image
                  alt={member.name}
                  src={member.image}
                  width={192}
                  height={192}
                  style={{ borderRadius: "1rem" }}
                />
                <CardTitle>{member.name}</CardTitle>
                <CardSubtitle>{member.title}</CardSubtitle>
                <CardText>{member.description}</CardText>
                <SocialLinks>
                  <SocialLink href={member.linkedin}>
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink href={member.github}>
                    <FaGithub />
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
