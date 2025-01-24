"use client";
import { useState, useEffect } from "react";
import Banner from "../app/components/Banner";
import Header from "../app/components/Header";
import Servicos from "../app/components/Servicos";
import About from "../app/components/About"; 
import Etapas from "../app/components/Etapas";
import Projetos from "../app/components/Projetos";

const Page = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      width: "100vw", 
      minHeight: "100vh", 
      overflowX: "hidden", 
      backgroundColor: "white"  // Define o fundo vermelho
    }}>
      {isReady && <Header />}
      <Banner />
      <About />
      <Servicos />
      <Etapas />
      <Projetos />
    </div>
  );
};

export default Page;
