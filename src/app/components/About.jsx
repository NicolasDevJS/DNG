import React from "react";
import styled from "styled-components";
import FadeInOnScroll from "../Scripts/FadeInOnScroll";
import { FaLinkedin } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.section`
  color: #000000;
  background-color: #fdfdfd;
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
  align-items: flex-start;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  min-height: 500px;
  height: 100%; 

  @media (max-width: 768px) {
    min-height: 400px;
  }
`;


const CardTitle = styled.h2`
  font-size: 1.75rem; 
  font-weight: 700; 
  color: #1a202c;
  margin-top: 1rem;
`;

const CardSubtitle = styled.h3`
  font-size: 1.1rem;
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
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%; 
  margin-top: 1rem;
`;


const SocialLink = styled.a`
  color: #0e76a8;

  svg {
    height: 3rem;
    width: 2rem;
  }

  &:hover {
    color: #005582;
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


const ExperiencesList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  width: 100%;
  margin-top: 1rem;
`;

const ExperienceItem = styled.li`
  margin-bottom: 1rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 500;
    color: #2d3748;
  }

  p {
    font-size: 0.95rem;
    color: #4a5568;
    margin: 0.25rem 0 0 0;
  }
`;


const teamMembers = [
  {
    name: "Nicolas Melo",
    title: "Desenvolvedor Full Stack Mobile e Web",
    description:
      "Desenvolvedor full stack mobile, especialista em criar soluções inovadoras que maximizam eficiência, performance e oferecem experiências excepcionais.",
    linkedin: "https://www.linkedin.com/in/nicolasmelodev/",
    experiences: [
      {
        title: "Plataforma de Gestão Empresarial",
        position: "Líder de Desenvolvimento",
        description:
          "Liderou a equipe no desenvolvimento de uma aplicação web escalável utilizando .NET e Azure, melhorando a performance em 30%.",
      },
      {
        title: "App de Serviços Financeiros",
        position: "Desenvolvedor Mobile",
        description:
          "Desenvolveu um aplicativo mobile multiplataforma que alcançou mais de 50.000 downloads na App Store e Google Play.",
      },
      {
        title: "Sistema de Automação Comercial",
        position: "Arquitetura de Soluções",
        description:
          "Projetou e implementou a arquitetura de um sistema de gestão empresarial, garantindo alta disponibilidade e segurança.",
      },
    ],
  },
  {
    name: "Davson Oliveira",
    title: "Desenvolvedor Back-end",
    description:
      "Desenvolvedor backend especializado em arquiteturas robustas, focado em alta performance, segurança, escalabilidade e integração para sistemas eficientes e confiáveis.",
    linkedin: "https://www.linkedin.com/in/davson-silva/",
    experiences: [
      {
        title: "Sistema de Gestão Empresarial",
        position: "Engenheiro de Software",
        description:
          "Desenvolveu APIs RESTful utilizando .NET Core e implementou soluções de banco de dados otimizadas para grandes volumes de dados.",
      },
      {
        title: "Integração com Cloud Azure",
        position: "Especialista em Cloud",
        description:
          "Implementou serviços no Azure, incluindo Azure Functions e Azure SQL, garantindo alta disponibilidade e escalabilidade dos sistemas.",
      },
      {
        title: "Plataforma de E-commerce",
        position: "Desenvolvedor Back-end",
        description:
          "Arquitetou e desenvolveu microserviços para uma plataforma de e-commerce, melhorando a modularidade e facilitando a manutenção.",
      },
    ],
  },
  {
    name: "Giuseppe Bovo",
    title: "Gerente Administrativo",
    description:
      "Responsável pela parte administrativa e executiva da DNG, gerenciando atividades e garantindo eficiência dos processos internos e uma boa relação cliente-empresa.",
    linkedin: "https://www.linkedin.com/in/giuseppe-bovo-801a93169/",
    experiences: [
      {
        title: "Gerenciamento de Projetos Digitais",
        position: "Gerente de Projetos",
        description:
          "Supervisionou múltiplos projetos simultaneamente, garantindo a entrega dentro do prazo e do orçamento estipulados.",
      },
      {
        title: "Otimização de Fluxos Operacionais",
        position: "Analista de Processos",
        description:
          "Implementou melhorias nos processos internos que resultaram em um aumento de 20% na eficiência operacional.",
      },
      {
        title: "Atendimento e Relacionamento B2B",
        position: "Coordenador de Atendimento",
        description:
          "Desenvolveu estratégias de relacionamento que aumentaram a satisfação dos clientes em 15%.",
      },
    ],
  },
  {
    name: "Felipe Emanuel",
    title: "Desenvolvedor Web",
    description:
      "Desenvolvedor web especializado em criar interfaces intuitivas e sistemas dinâmicos, focado em performance, responsividade e experiências imersivas para o usuário.",
    linkedin: "https://www.linkedin.com/in/felipe-emanuel-/",
    experiences: [
      {
        title: "Loja Virtual de Moda",
        position: "Desenvolvedor Front-end",
        description:
          "Criou uma plataforma de e-commerce responsiva que aumentou as vendas online em 25% no primeiro semestre após o lançamento.",
      },
      {
        title: "Dashboard de Business Intelligence",
        position: "Desenvolvedor Full Stack",
        description:
          "Desenvolveu um dashboard interativo para análise de dados em tempo real, melhorando a tomada de decisões estratégicas.",
      },
      {
        title: "Portal de Educação Online",
        position: "Desenvolvedor Web",
        description:
          "Implementou funcionalidades avançadas em uma aplicação web, aumentando a interatividade e a satisfação dos usuários.",
      },
    ],
  },
];

const About = () => {
  return (
    <Section id="sobre">
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
                <CardTitle>{member.name}</CardTitle>
                <CardSubtitle>{member.title}</CardSubtitle>
                <CardText>{member.description}</CardText>
                {member.experiences && member.experiences.length > 0 && (
                  <ExperiencesList>
                    {member.experiences.map((exp, idx) => (
                      <ExperienceItem key={idx}>
                        <h4>
                          {exp.title} - <em>{exp.position}</em>
                        </h4>
                        <p>{exp.description}</p>
                      </ExperienceItem>
                    ))}
                  </ExperiencesList>
                )}

                <SocialLinks>
                  <SocialLink
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} no LinkedIn`}
                  >
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
