"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Card, Typography, Button } from 'antd';
import { IconFileText, IconQuote } from '@tabler/icons-react';
import '@ant-design/v5-patch-for-react-19';

const { Title, Paragraph, Text } = Typography;


export default function articleView() {
    const searchParams = useSearchParams()

    const [project, setProject] = useState(null)


    const projects = [
        {
            label: "Introduzindo teoria dos grafos no processamento de imagens",
            value: "1",
            conferencia: "Conferência Internacional de Processamento de Imagens",
            dataConferencia: "2023-11-15",
            local: "São Paulo, Brasil",
            link: "https://www.google.com",
            keywords: ["grafos", "processamento de imagens", "teoria dos grafos"],
            abstract: "Este trabalho explora como a teoria dos grafos pode ser aplicada no processamento de imagens, abordando conceitos fundamentais e aplicações práticas.",
            doi: '10.1109/ISSREW55968.2022.00071'
        },
        {
            label: "Utilizando IA generativa na recuperação hormonal",
            value: "2",
            conferencia: "Simpósio de Inteligência Artificial em Saúde",
            dataConferencia: "2023-09-20",
            local: "Lisboa, Portugal",
            link: "https://www.google.com",
            keywords: ["IA generativa", "recuperação hormonal", "saúde"],
            abstract: "Investigação sobre o uso de IA generativa para otimizar protocolos de recuperação hormonal em terapias personalizadas.",
            doi: '10.1109/ISSREW55968.2022.00071'
        },
        {
            label: "Análise de redes sociais utilizando grafos",
            value: "3",
            conferencia: "Workshop de Análise de Redes Sociais",
            dataConferencia: "2024-02-10",
            local: "Nova York, EUA",
            link: "https://www.google.com",
            keywords: ["redes sociais", "análise de dados", "teoria dos grafos"],
            abstract: "Discussão sobre a aplicação de grafos para analisar interações e padrões em redes sociais.",
            doi: '10.1109/ISSREW55968.2022.00071'
        },
        {
            label: "Otimização de rotas de entrega com algoritmos de grafos",
            value: "4",
            conferencia: "Conferência de Logística e Transporte",
            dataConferencia: "2023-08-25",
            local: "Berlim, Alemanha",
            link: "https://www.google.com",
            keywords: ["rotas de entrega", "algoritmos de grafos", "logística"],
            abstract: "Este estudo aborda o uso de algoritmos baseados em grafos para otimizar rotas de entrega, reduzindo custos e melhorando a eficiência.",
            doi: '10.1109/ISSREW55968.2022.00071'
        },
        {
            label: "Detecção de comunidades em redes complexas",
            value: "5",
            conferencia: "Encontro de Ciência de Redes",
            dataConferencia: "2024-03-05",
            local: "Tóquio, Japão",
            link: "https://www.google.com",
            keywords: ["comunidades", "redes complexas", "teoria dos grafos"],
            abstract: "Uma abordagem inovadora para identificar comunidades em redes complexas utilizando algoritmos avançados de grafos.",
            doi: '10.1109/ISSREW55968.2022.00071'
        },
        {
            label: "Aplicação de grafos na bioinformática para análise de sequências genéticas",
            value: "6",
            conferencia: "Congresso de Bioinformática",
            dataConferencia: "2023-10-12",
            local: "Londres, Reino Unido",
            link: "https://www.google.com",
            keywords: ["bioinformática", "grafos", "sequências genéticas"],
            abstract: "Exploração do uso de teoria dos grafos na análise de sequências genéticas para avanços em bioinformática.",
            doi: '10.1109/ISSREW55968.2022.00071'
        },
        {
            label: "Modelagem de redes de transporte público usando teoria dos grafos",
            value: "7",
            conferencia: "Fórum de Mobilidade Urbana",
            dataConferencia: "2023-07-30",
            local: "Paris, França",
            link: "https://www.google.com",
            keywords: ["redes de transporte", "mobilidade urbana", "grafos"],
            abstract: "Modelagem e análise de redes de transporte público utilizando técnicas baseadas em grafos para melhorar a eficiência.",
            doi: '10.1109/ISSREW55968.2022.00071'
        },
        {
            label: "Visualização de dados complexos com grafos interativos",
            value: "8",
            conferencia: "Conferência de Visualização de Dados",
            dataConferencia: "2024-04-18",
            local: "San Francisco, EUA",
            link: "https://www.google.com",
            keywords: ["visualização de dados", "grafos interativos", "dados complexos"],
            abstract: "Uso de grafos interativos para representar e compreender grandes conjuntos de dados complexos.",
            doi: '10.1109/ISSREW55968.2022.00071'
        },
        {
            label: "Algoritmos de grafos para recomendação de produtos em e-commerce",
            value: "9",
            conferencia: "Simpósio de Tecnologia para E-commerce",
            dataConferencia: "2023-06-15",
            local: "Hong Kong, China",
            link: "https://www.google.com",
            keywords: ["e-commerce", "recomendação de produtos", "algoritmos de grafos"],
            abstract: "Desenvolvimento de algoritmos de grafos para melhorar sistemas de recomendação em plataformas de e-commerce.",
            doi: '10.1109/ISSREW55968.2022.00071'
        },
        {
            label: "Análise de vulnerabilidades em redes de computadores usando grafos",
            value: "10",
            conferencia: "Conferência de Segurança Cibernética",
            dataConferencia: "2024-05-20",
            local: "Sydney, Austrália",
            link: "https://www.google.com",
            keywords: ["segurança cibernética", "redes de computadores", "grafos"],
            abstract: "Aplicação de teoria dos grafos para identificar e mitigar vulnerabilidades em redes de computadores.",
            doi: '10.1109/ISSREW55968.2022.00071'
        }
    ]


    function getProjectByID(id) {
        let project = projects.filter((e) => {
            return e.value === id;
        });
        return project.length > 0 ? project[0] : null;
    }


    function dateFormat(dataPub) {

        // alert(dataPub)
        let dataItens = dataPub.split('-')
        let entryData = new Date(
            parseInt(dataItens[0]),
            parseInt(dataItens[1]) - 1,
            parseInt(dataItens[2])
        );

        return entryData.toDateString()
    }


    function keywordsFormater(keywords) {
        let finalString = ''
        for (const e of keywords) {
            finalString += e + ', '
        }
        return finalString.slice(0, -2);
    }



    useEffect(() => {
        const search = searchParams.get('articleID')
        if (search) {
            setProject(getProjectByID(search))
        }
    }, [])
    return (
        <>
            {project != null ?
                <div>
                    <div id="infoDivv" className="pl-5">
                        <div id="topDiv" className="flex mt-[40px] mb-[20px] flex-wrap items-center justify-between pr-5">
                            <Title level={1} className='w-[70%]' style={{ color: '#156D86', marginBottom: "0px" }}>{project.label}</Title>
                            <div>
                                <Button style={{ backgroundColor: '#D9D9D9', marginRight: '5px' }}>Cite article <IconQuote style={{ width: '22px', height: "26px" }} /></Button>
                                <Button className="bg-customBlueGreen text-white">Go to Article <IconFileText style={{ width: '22px', height: "26px" }} /></Button>
                            </div>

                            <div id="doi" className="mt-1">
                                <Text className="text-md text-customBlueGreen">DOI: {project.doi}</Text>
                            </div>
                        </div>
                        <div id="infoDiv" >
                            <div id="conferenceLocal" className="mb-3">
                                <Text className="text-xl"><strong className="text-customBlueGreen">Published In:</strong> {project.conferencia}</Text>
                            </div>
                            <div id="conferenceDate" className="mb-3">
                                <Text className="text-xl"><strong className="text-customBlueGreen">Date of Conference:</strong> {dateFormat(project.dataConferencia)}</Text>
                                <Text className="text-xl ml-10"><strong className="text-customBlueGreen">Conference Local:</strong> {project.local}</Text>
                            </div>
                            <div id="keywords" className="mb-3">
                                <Text className="text-xl"><strong className="text-customBlueGreen">Keywords:</strong> {keywordsFormater(project.keywords)}</Text>
                            </div>
                        </div>
                    </div>
                    <div id="abstract">

                    </div>
                </div>
                :
                <div>
                    <Title level={2} className='memberTypeTitle' style={{ marginTop: '10px', marginBottom: '5px' }}>Artigo não encontrado</Title>
                </div>
            }
        </>
    )
}