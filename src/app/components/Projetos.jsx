import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa'; 
import Building from '../../../public/building.png';
import FadeInOnScroll from '../Scripts/FadeInOnScroll';

const Section = styled.section`
  color: #4a5568;
  background-color: #fdfdfd;
  padding: 3rem 0;
`;

const Container = styled.div`
  padding: 1.25rem;
  margin: 0 auto;
  max-width: 1140px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;
`;

const HeaderTitle = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
  h1 {
    font-size: 1.75rem;
    font-weight: 500;
    color: #1f2937;
  }
  div {
    width: 5rem;
    height: 0.25rem;
    background-color: #3b82f6;
    margin-top: 0.5rem;
    border-radius: 0.25rem;
  }
`;

const HeaderDescription = styled.p`
  flex: 1;
  color: #6b7280;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
`;

const ProjectCard = styled.div`
  padding: 1rem;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const CardContent = styled.div`
  background-color: #f3f4f6;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%; /* Makes all cards stretch to the same height */
  min-height: 400px; /* Ensures the minimum size for the cards */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05); /* Slightly enlarge the card */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add deeper shadow */
  }
`;

const CardImage = styled(Image)`
  border-radius: 0.5rem;
  object-fit: cover;
  width: 100%;
  height: 10rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  color: #3b82f6;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
`;

const CardSubtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

const CardText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const ViewSiteLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #3b82f6;
  font-size: 0.875rem;
  cursor: pointer;
  svg {
    margin-left: 0.5rem;
  }
`;

const projectsData = [
    {
      title: 'Website Corporativo',
      subtitle: 'TechCorp',
      description: 'Desenvolvimento de um site institucional moderno e responsivo para a TechCorp, destacando seus serviços de TI e soluções empresariais.',
      image: Building,
      link: '',
    },
    {
      title: 'Sistema Back-End',
      subtitle: 'API Financeira',
      description: 'Desenvolvemos uma API robusta para processar transações financeiras',
      image: Building,
      link: '#',
    },
    {
      title: 'Aplicativo Mobile',
      subtitle: 'DeliveryApp',
      description: 'Um aplicativo de entregas rápido e intuitivo, facilitando o pedido de refeições e serviços de entrega para usuários em todo o país.',
      image: Building,
      link: '#',
    },
    {
      title: 'Aplicativo Mobile',
      subtitle: 'FitLife',
      description: 'Aplicativo de fitness com personalização de treinos, acompanhamento de progresso e dicas de saúde, focado em promover uma vida saudável.',
      image: Building,
      link: '#',
    },
];

const Projetos = () => {
  return (
    <Section id="projetos">
      <Container>
        <FadeInOnScroll>
          <HeaderWrapper>
            <HeaderTitle>
              <h1>Todos os nossos projetos</h1>
              <div></div>
            </HeaderTitle>
            <HeaderDescription>
              Desde designs atraentes até sistemas funcionais, nossos projetos refletem uma mistura única de criatividade e inovação. Cada projeto conta uma história autêntica de colaboração, visão e sucesso conjunto.
            </HeaderDescription>
          </HeaderWrapper>
          
          <ProjectsWrapper>
            {projectsData.map((project, index) => (
              <ProjectCard key={index}>
                <CardContent>
                  <CardImage src={project.image} alt={project.subtitle} />
                  <CardTitle>{project.title}</CardTitle>
                  <CardSubtitle>{project.subtitle}</CardSubtitle>
                  <CardText>{project.description}</CardText>
                  <ViewSiteLink href={project.link}>
                    Ver site <FaArrowRight />
                  </ViewSiteLink>
                </CardContent>
              </ProjectCard>
            ))}
          </ProjectsWrapper>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
};

export default Projetos;
