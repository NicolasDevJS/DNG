import React from "react";
import Image from "next/image";
import styled from "styled-components";
import ImgEtapas from "../../public/10624.png";
import FadeInOnScroll from "../app/Scripts/FadeInOnScroll";
import {
  FaCommentDots,
  FaPencilAlt,
  FaRegSmile,
  FaDesktop,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const Section = styled.section`
  color: #4a5568;
  background-color: #ffffff;
  padding: 2rem 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 5%;
  min-height: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Timeline = styled.div`
  width: 600px;
  padding-right: 2.5rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;

const Step = styled.div`
  position: relative;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;

  .icon {
    background-color: #3b82f6;
    color: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    z-index: 2;
    flex-shrink: 0; /* Prevents the icon from being squished */
  }

  @media (max-width: 768px) {
    .icon {
      width: 3.5rem;  /* Slightly smaller size for mobile */
      height: 3.5rem;
    }
  }
`;


const StepContent = styled.div`
  padding-left: 1.5rem;
  h2 {
    font-size: 1rem;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 0.5rem;
  }
  p {
    color: #4a5568;
  }
`;

const ProjectImageWrapper = styled.div`
  width: 500px;
  height: auto;
  margin-top: 80px;

  @media (max-width: 768px) {
    display: none; /* Hide image on mobile */
  }
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
`;

const Etapas = () => {
  return (
    <Section>
      <Container>
        <FadeInOnScroll>
          <Timeline>
            <Step>
              <div className="icon">
                <FaCommentDots size={20} />
              </div>
              <StepContent>
                <h2>Primeira Etapa</h2>
                <p>
                  Vamos conversar para ter uma visão ampliada do seu projeto e
                  fazer seu orçamento.
                </p>
              </StepContent>
            </Step>

            <Step>
              <div className="icon">
                <FaPencilAlt size={20} />
              </div>
              <StepContent>
                <h2>Segunda Etapa</h2>
                <p>
                  Iremos enviar o contrato com todas as informações, prazos e
                  pós finalização.
                </p>
              </StepContent>
            </Step>

            <Step>
              <div className="icon">
                <FaDesktop size={20} />
              </div>
              <StepContent>
                <h2>Terceira Etapa</h2>
                <p>
                  Processo de criação, planejamento e organização da equipe para
                  realizar o projeto.
                </p>
              </StepContent>
            </Step>

            <Step>
              <div className="icon">
                <FaRegSmile size={20} />
              </div>
              <StepContent>
                <h2>Quarta Etapa</h2>
                <p>
                  Enviamos o material para Feedbacks, deixando o Website do
                  jeito que você quiser.
                </p>
              </StepContent>
            </Step>

            <Step>
              <div className="icon">
                <FiCheckCircle size={20} />
              </div>
              <StepContent>
                <h2>Projeto Entregue!</h2>
                <p>
                  Seu Website está na internet e pode ser acessado de qualquer
                  aparelho.
                </p>
              </StepContent>
            </Step>
          </Timeline>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <ProjectImageWrapper>
            <ProjectImage src={ImgEtapas} alt="Etapas" />
          </ProjectImageWrapper>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
};

export default Etapas;
