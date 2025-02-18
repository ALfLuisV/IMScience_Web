"use client";

import { useEffect, useState } from "react";
import { Carousel, Typography, Button } from "antd";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function CarouselOnly() {
  const [recentArticles, setRecentArticles] = useState(null);

  const projects = [
    {
      label: "Introduzindo teoria dos grafos no processamento de imagens",
      value: "1",
      img: "/imgGrafo.jpg",
      keywords: ["grafos", "processamento de imagens", "teoria dos grafos"],
      abstract:
        "Este trabalho aborda a aplicação da teoria dos grafos no processamento de imagens, destacando segmentação, detecção, reconhecimento e soluções híbridas com avanços em visão computacional.",
    },
    {
      label: "Utilizando IA generativa na recuperação hormonal",
      value: "2",
      img: "/grafoInterativo.jpg",
      keywords: ["IA generativa", "recuperação hormonal", "saúde"],
      abstract:
        "Investigação sobre o uso de IA generativa para otimizar protocolos de recuperação hormonal em terapias personalizadas.",
    },
    {
      label: "Análise de redes sociais utilizando grafos",
      value: "3",
      img: "/redesSociaisGrafos.png",
      keywords: ["redes sociais", "análise de dados", "teoria dos grafos"],
      abstract:
        "Discussão sobre a aplicação de grafos para analisar interações e padrões em redes sociais.",
    },
    {
      label: "Otimização de rotas de entrega com algoritmos de grafos",
      value: "4",
      img: "/grafoInterativo.jpg",
      keywords: ["rotas de entrega", "algoritmos de grafos", "logística"],
      abstract:
        "Este estudo aborda o uso de algoritmos baseados em grafos para otimizar rotas de entrega, reduzindo custos e melhorando a eficiência.",
    },
    {
      label: "Detecção de comunidades em redes complexas",
      value: "5",
      img: "/redesGrafos.png",
      keywords: ["comunidades", "redes complexas", "teoria dos grafos"],
      abstract:
        "Teoria dos grafos aplicada ao processamento de imagens melhora segmentação, detecção, reconhecimento e eficiência em visão computacional e inteligência artificial.",
    },
  ];

  function arraySort() {
    let arrayAux = [];
    projects.sort((a, b) => b.value - a.value); // Ordena por valor (exemplo)
    for (let e = 0; e < 5; e++) {
      arrayAux.push(projects[e]);
    }
    setRecentArticles(arrayAux);
  }

  function carouselCardGenerator() {
    if (recentArticles != null) {
      return recentArticles.map((article, index) => (
        <div key={index} className="h-[32rem] bg-cover bg-center">
          <div
            className="h-[32rem]"
            style={{
              zIndex: "15",
              backgroundSize: "100% 100%",
              backgroundPosition: "0px 0px",
              backgroundImage:
                "radial-gradient(200% 200% at 129% 22%, #073AFF00 29%, #156d86 54%)",
              paddingTop: "220px",
            }}
          >
            <div className="w-[30%] ml-14">
              <div
                className="flex"
                style={{ marginBottom: "4px", color: "white", fontWeight: "400" }}
              >
                {article.keywords.map((keyword, i) => (
                  <span key={i}>
                    {keyword}
                    {i < article.keywords.length - 1 && (
                      <span>&nbsp;&bull;&nbsp;</span>
                    )}
                  </span>
                ))}
              </div>
              <Title
                level={2}
                className="z-40"
                style={{
                  color: "white",
                  marginTop: "4px",
                  marginBottom: "10px",
                }}
              >
                {article.label}
              </Title>
              <Paragraph style={{ color: "white" }} className="text-md">
                {article.abstract}
              </Paragraph>
              <Link href={`/articleView?articleID=${article.value}`} passHref>
                <Button
                  style={{ color: "#156d86", fontSize: "17px" }}
                  className="w-[200px] h-[40px] rounded-2xl"
                >
                  Veja o Artigo
                </Button>
              </Link>
            </div>
            <img
              id="backgroundImage"
              src={article.img}
              alt="backgroundImage"
              className="h-[32rem]"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "-1",
              }}
            />
          </div>
        </div>
      ));
    }
  }

  useEffect(() => {
    arraySort();
  }, []);

  return (
    <Carousel effect="fade" autoplay arrows speed={900} autoplaySpeed={4000}>
      {carouselCardGenerator()}
    </Carousel>
  );
}
