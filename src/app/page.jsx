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
    <div>
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
