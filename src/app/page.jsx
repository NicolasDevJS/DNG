"use client";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/header";
import Servicos from "../components/Servicos";
import About from "../components/About ";
import Etapas from "../components/Etapas";
import Projetos from "../components/Projetos";

const Page = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <About/>
      <Servicos/>
      <Etapas/>
      <Projetos/>
    </div>
  );
};

export default Page;
