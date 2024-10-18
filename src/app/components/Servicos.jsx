import React from "react";
import styled from "styled-components";
import FadeInOnScroll from "../Scripts/FadeInOnScroll";
import { CiMemoPad, CiViewBoard, CiSettings } from "react-icons/ci";

const Section = styled.section`
  color: #4a5568;
  .container {
    padding: 1.25rem;
    margin: 0 auto;
    max-width: 1140px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: #1a202c;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
  font-size: 0.75rem;
  color: #3b82f6;
  font-weight: 500;
  letter-spacing: 0.05em;
`;

const ServiceCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceCard = styled.div`
  background-color: #f7fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  height: 100%;
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ServiceIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #778899;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
`;

const ServiceContent = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  color: #1a202c;
`;

const ServiceDescription = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const ContactLink = styled.a`
  color: #3b82f6;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-left: 0.5rem;
    width: 1rem;
    height: 1rem;
  }
`;

const Servicos = () => {
  return (
    <Section id="servicos">
      <div className="container">
        <FadeInOnScroll>
          <div className="text-center mb-10">
            <Title>Serviços</Title>
            <Subtitle>DISPONÍVEIS NO MOMENTO</Subtitle>
          </div>

          <ServiceCardWrapper>
            <ServiceCard>
              <ServiceIcon>
                <CiMemoPad size={32} />
              </ServiceIcon>
              <ServiceContent>
                <ServiceTitle>Criação de Sites</ServiceTitle>
                <ServiceDescription>
                  Desenvolvemos sites e aplicativos responsivos, otimizados e
                  personalizados para oferecer a melhor experiência digital ao
                  seu negócio.
                </ServiceDescription>
                <ContactLink href="https://api.whatsapp.com/send/">
                  Entre em contato
                </ContactLink>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>
                <CiViewBoard size={32} />
              </ServiceIcon>
              <ServiceContent>
                <ServiceTitle>Sistemas Personalizados</ServiceTitle>
                <ServiceDescription>
                  Desenvolvemos sistemas específicos e exclusivos, totalmente
                  personalizados para atender às necessidades únicas do seu
                  negócio!
                </ServiceDescription>
                <ContactLink href="https://api.whatsapp.com/send/">
                  Entre em contato
                </ContactLink>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>
                <CiSettings size={32} />
              </ServiceIcon>
              <ServiceContent>
                <ServiceTitle>Manutenção</ServiceTitle>
                <ServiceDescription>
                  Oferecemos serviços completos de hospedagem, DevOps, SEO e
                  manutenção contínua para garantir o desempenho ideal e o
                  sucesso duradouro do seu site.
                </ServiceDescription>
                <ContactLink href="https://api.whatsapp.com/send/">
                  Entre em contato
                </ContactLink>
              </ServiceContent>
            </ServiceCard>
          </ServiceCardWrapper>
        </FadeInOnScroll>
      </div>
    </Section>
  );
};

export default Servicos;
