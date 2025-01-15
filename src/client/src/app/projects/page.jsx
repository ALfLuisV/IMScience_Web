"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Card, Typography, Button, Modal, Carousel, ConfigProvider } from 'antd';
import { IconFileText, IconQuote, IconCopy } from '@tabler/icons-react';
import '@ant-design/v5-patch-for-react-19';
import userImage from '../../../public/user.png'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ModalCitation from '@/components/citationBox/citation'

import img1 from '../../../public/grafoInterativo.jpg'
import img2 from '../../../public/imgGrafo.jpg'
import img3 from '../../../public/post-redes.png'
import img4 from '../../../public/redesGrafos.png'
import img5 from '../../../public/redesSociaisGrafos.png'

const { Title, Paragraph, Text } = Typography;


export default function projects() {
    const [articles, setArticles] = useState(null)

    const projects = [
        {
            label: "Introduzindo teoria dos grafos no processamento de imagens",
            value: "1",
            conferencia: "Conferência Internacional de Processamento de Imagens",
            dataConferencia: "2023-11-15",
            local: "São Paulo, Brasil",
            img: '/imgGrafo.jpg',
            link: "https://www.google.com",
            keywords: ["grafos", "processamento de imagens", "teoria dos grafos"],
            abstract: "Este trabalho aborda a aplicação da teoria dos grafos no processamento de imagens, destacando segmentação, detecção, reconhecimento e soluções híbridas com avanços em visão computacional.",
            doi: '10.1109/ISSREW55968.2022.00071',
            authors: [
                {
                    nome: "Maria Silva",
                    role: "Pesquisador(a)",
                    description: "Maria Silva é doutoranda em inteligência artificial aplicada à linguística. Seu trabalho foca no desenvolvimento de assistentes virtuais que melhoram a comunicação humana. Maria é uma entusiasta da interseção entre tecnologia e linguagem e já publicou artigos em conferências renomadas. Ela também é ativa em comunidades de código aberto, contribuindo para projetos voltados à educação. Sua paixão é tornar a tecnologia mais intuitiva e acessível.",
                    profilePic: userImage,
                    id: '6',
                    entryDate: "11/02/2016",
                },
                {
                    nome: "Ricardo Lopes",
                    role: "Orientador",
                    description: "Ricardo Lopes é professor com foco em inteligência artificial para diagnósticos médicos. Ele trabalha em projetos que buscam automatizar a análise de exames complexos. Ricardo colabora com hospitais e laboratórios para validar suas pesquisas. Além disso, é mentor de estudantes interessados em saúde digital. Ele acredita que a tecnologia deve sempre buscar melhorar a qualidade de vida das pessoas.",
                    profilePic: userImage,
                    id: '13',
                    entryDate: "09/08/2019",
                },
                {
                    nome: "Paula Castro",
                    role: "Pesquisador(a)",
                    description: "Paula Castro é doutoranda em blockchain e segurança de dados. Sua pesquisa busca integrar tecnologias de segurança em sistemas descentralizados. Paula já publicou artigos em conferências de segurança cibernética e é reconhecida por sua criatividade. Ela também organiza eventos para popularizar o uso ético da tecnologia blockchain. Em seu tempo livre, gosta de explorar novos conceitos na área de computação quântica.",
                    profilePic: userImage,
                    id: '14',
                    entryDate: "25/07/2022",
                },
                {
                    nome: "Tiago Oliveira",
                    role: "Pesquisador(a)",
                    description: "Tiago Oliveira é mestrando em computação e desenvolve algoritmos para otimizar operações logísticas. Seu trabalho ajuda empresas a planejar rotas e reduzir custos operacionais. Tiago já recebeu prêmios por sua pesquisa e inovação tecnológica. Ele também se dedica a ensinar técnicas de programação para iniciantes. Fora da academia, Tiago gosta de explorar soluções tecnológicas para mobilidade urbana.",
                    profilePic: userImage,
                    id: '15',
                    entryDate: "11/01/2023",
                },
                {
                    nome: "Isabela Martins",
                    role: "Bolsista",
                    description: "Isabela Martins é estudante de graduação com interesse em inteligência artificial aplicada à educação. Ela desenvolve ferramentas que ajudam estudantes a aprender de maneira personalizada. Isabela já participou de hackathons e ganhou prêmios por sua inovação. Em sua universidade, ela é uma das líderes de um grupo de estudos sobre tecnologia educacional. Fora dos estudos, gosta de criar conteúdo educativo para redes sociais.",
                    profilePic: userImage,
                    id: '16',
                    entryDate: "19/03/2020",
                },
                {
                    nome: "Victor Teixeira",
                    role: "Coorientador",
                    description: "Victor Teixeira é um especialista em sistemas distribuídos e computação em nuvem. Ele lidera projetos que buscam aumentar a eficiência de processamento em redes complexas. Victor é autor de diversos artigos acadêmicos e frequentemente ministra palestras em eventos internacionais. Ele acredita que a computação em nuvem é essencial para o futuro da tecnologia. Em seu tempo livre, ele participa de iniciativas que promovem a inclusão digital.",
                    profilePic: userImage,
                    id: '17',
                    entryDate: "27/05/2018",
                }
            ]
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
            doi: '10.1109/ISSREW55968.2022.00071',
            authors: [
                {
                    nome: "Ana Ribeiro",
                    role: "Pesquisador(a)",
                    description: "Ana Ribeiro é doutoranda em computação e desenvolve sistemas que melhoram a eficiência energética em dispositivos IoT. Sua pesquisa já foi apresentada em importantes conferências internacionais. Ana também colabora com startups para integrar tecnologia sustentável em produtos do mercado. Em seu tempo livre, ela organiza eventos de divulgação científica para inspirar jovens a entrarem no mundo da tecnologia. Sua dedicação é reconhecida tanto dentro quanto fora do meio acadêmico.",
                    profilePic: userImage,
                    id: '2',
                    entryDate: "28/06/2024",
                },
                {
                    nome: "Pedro Costa",
                    role: "Orientador",
                    description: "Pedro Costa é professor e pesquisador dedicado à modelagem matemática em sistemas complexos. Ele aplica seus conhecimentos para resolver problemas na engenharia e no meio ambiente. Pedro orienta estudantes em projetos inovadores e promove workshops para disseminar conhecimento. Seus interesses acadêmicos incluem otimização e análise preditiva. Fora da universidade, ele gosta de participar de eventos sobre tecnologia e sustentabilidade.",
                    profilePic: userImage,
                    id: '5',
                    entryDate: "23/09/2021",
                },
                {
                    nome: "Juliana Mendes",
                    role: "Bolsista",
                    description: "Juliana Mendes é estudante de graduação interessada em ciência de dados e big data. Ela trabalha em projetos que analisam grandes volumes de dados para prever tendências. Juliana é conhecida por sua curiosidade e vontade de aprender, sendo destaque em sua turma. Ela também participa de grupos de estudos sobre inteligência artificial aplicada. Fora da faculdade, gosta de criar visualizações de dados interativas para plataformas online.",
                    profilePic: userImage,
                    id: '8',
                    entryDate: "18/11/2017",
                },
                {
                    nome: "Lara Nunes",
                    role: "Bolsista",
                    description: "Lara Nunes é estudante de graduação fascinada pelo design e desenvolvimento de jogos digitais. Ela já criou protótipos de jogos interativos e participa de competições de game design. Lara acredita que jogos podem ser uma poderosa ferramenta educacional e de inclusão. Em sua universidade, colabora com colegas para criar experiências imersivas e inovadoras. Fora dos estudos, gosta de explorar novas tecnologias gráficas e motores de jogos.",
                    profilePic: userImage,
                    id: '12',
                    entryDate: "03/12/2020",
                },
                {
                    nome: "Tiago Oliveira",
                    role: "Pesquisador(a)",
                    description: "Tiago Oliveira é mestrando em computação e desenvolve algoritmos para otimizar operações logísticas. Seu trabalho ajuda empresas a planejar rotas e reduzir custos operacionais. Tiago já recebeu prêmios por sua pesquisa e inovação tecnológica. Ele também se dedica a ensinar técnicas de programação para iniciantes. Fora da academia, Tiago gosta de explorar soluções tecnológicas para mobilidade urbana.",
                    profilePic: userImage,
                    id: '15',
                    entryDate: "11/01/2023",
                },
                {
                    nome: "Camila Farias",
                    role: "Pesquisador(a)",
                    description: "Camila Farias é doutoranda em estatística aplicada, com foco em métodos avançados de análise de dados. Sua pesquisa busca criar modelos preditivos que possam ser aplicados a problemas reais, como previsão de doenças. Camila já recebeu prêmios por sua abordagem inovadora e é uma defensora do uso ético da ciência de dados. Fora do meio acadêmico, ela organiza eventos para capacitar jovens na área de dados.",
                    profilePic: userImage,
                    id: '18',
                    entryDate: "12/09/2021",
                }
            ]
        },
        {
            label: "Análise de redes sociais utilizando grafos",
            value: "3",
            conferencia: "Workshop de Análise de Redes Sociais",
            dataConferencia: "2024-02-10",
            local: "Nova York, EUA",
            img: '/redesSociaisGrafos.png',
            link: "https://www.google.com",
            keywords: ["redes sociais", "análise de dados", "teoria dos grafos"],
            abstract: "Discussão sobre a aplicação de grafos para analisar interações e padrões em redes sociais.",
            doi: '10.1109/ISSREW55968.2022.00071',
            authors: [
                {
                    nome: "Carla Ferreira",
                    role: "Bolsista",
                    description: "Carla Ferreira é estudante de graduação apaixonada por design de interfaces e experiência do usuário. Ela já participou de competições estudantis, onde apresentou projetos de aplicativos para inclusão digital. Seu foco é criar soluções acessíveis que possam transformar vidas. Carla é membro de um grupo de estudos sobre acessibilidade digital e colabora com ONGs locais. Ela acredita que tecnologia e inclusão devem caminhar juntas.",
                    profilePic: userImage,
                    id: '4',
                    entryDate: "14/07/2022",
                },
                {
                    nome: "Pedro Costa",
                    role: "Orientador",
                    description: "Pedro Costa é professor e pesquisador dedicado à modelagem matemática em sistemas complexos. Ele aplica seus conhecimentos para resolver problemas na engenharia e no meio ambiente. Pedro orienta estudantes em projetos inovadores e promove workshops para disseminar conhecimento. Seus interesses acadêmicos incluem otimização e análise preditiva. Fora da universidade, ele gosta de participar de eventos sobre tecnologia e sustentabilidade.",
                    profilePic: userImage,
                    id: '5',
                    entryDate: "23/09/2021",
                },
                {
                    nome: "Beatriz Souza",
                    role: "Pesquisador(a)",
                    description: "Beatriz Souza é doutoranda em visão computacional aplicada à robótica autônoma. Sua pesquisa explora formas de tornar os robôs mais conscientes de seu ambiente. Beatriz já participou de projetos interdisciplinares envolvendo engenheiros e cientistas de dados. Ela acredita que a robótica pode ser uma ferramenta para melhorar a qualidade de vida das pessoas. Em seu tempo livre, Beatriz participa de eventos de divulgação científica.",
                    profilePic: userImage,
                    id: '10',
                    entryDate: "30/06/2023",
                },
                {
                    nome: "Tiago Oliveira",
                    role: "Pesquisador(a)",
                    description: "Tiago Oliveira é mestrando em computação e desenvolve algoritmos para otimizar operações logísticas. Seu trabalho ajuda empresas a planejar rotas e reduzir custos operacionais. Tiago já recebeu prêmios por sua pesquisa e inovação tecnológica. Ele também se dedica a ensinar técnicas de programação para iniciantes. Fora da academia, Tiago gosta de explorar soluções tecnológicas para mobilidade urbana.",
                    profilePic: userImage,
                    id: '15',
                    entryDate: "11/01/2023",
                }
            ]
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
            doi: '10.1109/ISSREW55968.2022.00071',
            authors: [
                {
                    nome: "João Almeida",
                    role: "Pesquisador(a)",
                    description: "João Almeida é mestre em computação com foco no desenvolvimento de algoritmos para medicina. Atualmente, ele pesquisa formas de usar redes neurais para diagnosticar doenças raras. Ele acredita no potencial da computação para salvar vidas e trabalha para conectar ciência e saúde. João participa de grupos de pesquisa multidisciplinares que reúnem médicos e engenheiros. Fora do trabalho, gosta de compartilhar seus conhecimentos em workshops e cursos de programação.",
                    profilePic: userImage,
                    id: '3',
                    entryDate: "01/10/2018",
                },
                {
                    nome: "Lucas Lima",
                    role: "Pesquisador(a)",
                    description: "Lucas Lima é mestrando em ciência da computação e trabalha com integração de IoT em ambientes urbanos. Ele desenvolve soluções para cidades inteligentes, combinando eficiência e sustentabilidade. Lucas já apresentou seus projetos em feiras acadêmicas e recebeu prêmios por sua inovação. Além disso, é mentor de estudantes interessados na área de computação. Ele acredita que a tecnologia pode transformar cidades em espaços mais humanos.",
                    profilePic: userImage,
                    id: '7',
                    entryDate: "07/05/2019",
                },
                {
                    nome: "Beatriz Souza",
                    role: "Pesquisador(a)",
                    description: "Beatriz Souza é doutoranda em visão computacional aplicada à robótica autônoma. Sua pesquisa explora formas de tornar os robôs mais conscientes de seu ambiente. Beatriz já participou de projetos interdisciplinares envolvendo engenheiros e cientistas de dados. Ela acredita que a robótica pode ser uma ferramenta para melhorar a qualidade de vida das pessoas. Em seu tempo livre, Beatriz participa de eventos de divulgação científica.",
                    profilePic: userImage,
                    id: '10',
                    entryDate: "30/06/2023",
                },
                {
                    nome: "Fernando Rocha",
                    role: "Pesquisador(a)",
                    description: "Fernando Rocha é mestrando em engenharia computacional, com foco em simulações de estruturas mecânicas. Ele desenvolve modelos que ajudam engenheiros a prever falhas estruturais. Fernando já apresentou seus projetos em conferências de engenharia ao redor do mundo. Ele também é membro ativo de um laboratório de inovação tecnológica em sua universidade. Fora do ambiente acadêmico, gosta de ensinar programação a jovens estudantes.",
                    profilePic: userImage,
                    id: '11',
                    entryDate: "15/04/2021",
                },
                {
                    nome: "Lara Nunes",
                    role: "Bolsista",
                    description: "Lara Nunes é estudante de graduação fascinada pelo design e desenvolvimento de jogos digitais. Ela já criou protótipos de jogos interativos e participa de competições de game design. Lara acredita que jogos podem ser uma poderosa ferramenta educacional e de inclusão. Em sua universidade, colabora com colegas para criar experiências imersivas e inovadoras. Fora dos estudos, gosta de explorar novas tecnologias gráficas e motores de jogos.",
                    profilePic: userImage,
                    id: '12',
                    entryDate: "03/12/2020",
                }
            ]
        },
        {
            label: "Detecção de comunidades em redes complexas",
            value: "5",
            conferencia: "Encontro de Ciência de Redes",
            dataConferencia: "2024-03-05",
            local: "Tóquio, Japão",
            img: '/redesGrafos.png',
            link: "https://www.google.com",
            keywords: ["comunidades", "redes complexas", "teoria dos grafos"],
            abstract: "Teoria dos grafos aplicada ao processamento de imagens melhora segmentação, detecção, reconhecimento e eficiência em visão computacional e inteligência artificial.",
            doi: '10.1109/ISSREW55968.2022.00071',
            authors: [
                {
                    nome: "Marcelo Souza Cunha da Silva",
                    role: "Orientador",
                    description: "Marcelo Souza é um professor com vasta experiência em inteligência artificial e aprendizado de máquina. Ele lidera projetos acadêmicos que conectam ciência e indústria, explorando soluções inovadoras. É autor de diversos artigos publicados em revistas internacionais e mentor de jovens pesquisadores. Marcelo acredita na tecnologia como uma ferramenta poderosa para resolver desafios globais. Seu trabalho também inclui palestras sobre ética e impacto da IA na sociedade.",
                    profilePic: userImage,
                    id: '1',
                    entryDate: "17/03/2020"
                },
                {
                    nome: "Ana Ribeiro",
                    role: "Pesquisador(a)",
                    description: "Ana Ribeiro é doutoranda em computação e desenvolve sistemas que melhoram a eficiência energética em dispositivos IoT. Sua pesquisa já foi apresentada em importantes conferências internacionais. Ana também colabora com startups para integrar tecnologia sustentável em produtos do mercado. Em seu tempo livre, ela organiza eventos de divulgação científica para inspirar jovens a entrarem no mundo da tecnologia. Sua dedicação é reconhecida tanto dentro quanto fora do meio acadêmico.",
                    profilePic: userImage,
                    id: '2',
                    entryDate: "28/06/2024",
                },
                {
                    nome: "Juliana Mendes",
                    role: "Bolsista",
                    description: "Juliana Mendes é estudante de graduação interessada em ciência de dados e big data. Ela trabalha em projetos que analisam grandes volumes de dados para prever tendências. Juliana é conhecida por sua curiosidade e vontade de aprender, sendo destaque em sua turma. Ela também participa de grupos de estudos sobre inteligência artificial aplicada. Fora da faculdade, gosta de criar visualizações de dados interativas para plataformas online.",
                    profilePic: userImage,
                    id: '8',
                    entryDate: "18/11/2017",
                },
                {
                    nome: "Paula Castro",
                    role: "Pesquisador(a)",
                    description: "Paula Castro é doutoranda em blockchain e segurança de dados. Sua pesquisa busca integrar tecnologias de segurança em sistemas descentralizados. Paula já publicou artigos em conferências de segurança cibernética e é reconhecida por sua criatividade. Ela também organiza eventos para popularizar o uso ético da tecnologia blockchain. Em seu tempo livre, gosta de explorar novos conceitos na área de computação quântica.",
                    profilePic: userImage,
                    id: '14',
                    entryDate: "25/07/2022",
                }
            ]
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
            doi: '10.1109/ISSREW55968.2022.00071',
            authors: [
                {
                    nome: "Maria Silva",
                    role: "Pesquisador(a)",
                    description: "Maria Silva é doutoranda em inteligência artificial aplicada à linguística. Seu trabalho foca no desenvolvimento de assistentes virtuais que melhoram a comunicação humana. Maria é uma entusiasta da interseção entre tecnologia e linguagem e já publicou artigos em conferências renomadas. Ela também é ativa em comunidades de código aberto, contribuindo para projetos voltados à educação. Sua paixão é tornar a tecnologia mais intuitiva e acessível.",
                    profilePic: userImage,
                    id: '6',
                    entryDate: "11/02/2016",
                },
                {
                    nome: "Ricardo Lopes",
                    role: "Orientador",
                    description: "Ricardo Lopes é professor com foco em inteligência artificial para diagnósticos médicos. Ele trabalha em projetos que buscam automatizar a análise de exames complexos. Ricardo colabora com hospitais e laboratórios para validar suas pesquisas. Além disso, é mentor de estudantes interessados em saúde digital. Ele acredita que a tecnologia deve sempre buscar melhorar a qualidade de vida das pessoas.",
                    profilePic: userImage,
                    id: '13',
                    entryDate: "09/08/2019",
                }

            ]
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
            doi: '10.1109/ISSREW55968.2022.00071',
            authors: [
                {
                    nome: "Lucas Lima",
                    role: "Pesquisador(a)",
                    description: "Lucas Lima é mestrando em ciência da computação e trabalha com integração de IoT em ambientes urbanos. Ele desenvolve soluções para cidades inteligentes, combinando eficiência e sustentabilidade. Lucas já apresentou seus projetos em feiras acadêmicas e recebeu prêmios por sua inovação. Além disso, é mentor de estudantes interessados na área de computação. Ele acredita que a tecnologia pode transformar cidades em espaços mais humanos.",
                    profilePic: userImage,
                    id: '7',
                    entryDate: "07/05/2019",
                },
                {
                    nome: "Fernando Rocha",
                    role: "Pesquisador(a)",
                    description: "Fernando Rocha é mestrando em engenharia computacional, com foco em simulações de estruturas mecânicas. Ele desenvolve modelos que ajudam engenheiros a prever falhas estruturais. Fernando já apresentou seus projetos em conferências de engenharia ao redor do mundo. Ele também é membro ativo de um laboratório de inovação tecnológica em sua universidade. Fora do ambiente acadêmico, gosta de ensinar programação a jovens estudantes.",
                    profilePic: userImage,
                    id: '11',
                    entryDate: "15/04/2021",
                },
                {
                    nome: "Ricardo Lopes",
                    role: "Orientador",
                    description: "Ricardo Lopes é professor com foco em inteligência artificial para diagnósticos médicos. Ele trabalha em projetos que buscam automatizar a análise de exames complexos. Ricardo colabora com hospitais e laboratórios para validar suas pesquisas. Além disso, é mentor de estudantes interessados em saúde digital. Ele acredita que a tecnologia deve sempre buscar melhorar a qualidade de vida das pessoas.",
                    profilePic: userImage,
                    id: '13',
                    entryDate: "09/08/2019",
                },
                {
                    nome: "Victor Teixeira",
                    role: "Coorientador",
                    description: "Victor Teixeira é um especialista em sistemas distribuídos e computação em nuvem. Ele lidera projetos que buscam aumentar a eficiência de processamento em redes complexas. Victor é autor de diversos artigos acadêmicos e frequentemente ministra palestras em eventos internacionais. Ele acredita que a computação em nuvem é essencial para o futuro da tecnologia. Em seu tempo livre, ele participa de iniciativas que promovem a inclusão digital.",
                    profilePic: userImage,
                    id: '17',
                    entryDate: "27/05/2018",
                }
            ]
        },
        {
            label: "Visualização de dados complexos com grafos interativos",
            value: "8",
            conferencia: "Conferência de Visualização de Dados",
            dataConferencia: "2024-04-18",
            local: "San Francisco, EUA",
            img: '/grafoInterativo.jpg',
            link: "https://www.google.com",
            keywords: ["visualização de dados", "grafos interativos", "dados complexos"],
            abstract: "Uso de grafos interativos para representar e compreender grandes conjuntos de dados complexos.",
            doi: '10.1109/ISSREW55968.2022.00071',
            authors: [
                {
                    nome: "João Almeida",
                    role: "Pesquisador(a)",
                    description: "João Almeida é mestre em computação com foco no desenvolvimento de algoritmos para medicina. Atualmente, ele pesquisa formas de usar redes neurais para diagnosticar doenças raras. Ele acredita no potencial da computação para salvar vidas e trabalha para conectar ciência e saúde. João participa de grupos de pesquisa multidisciplinares que reúnem médicos e engenheiros. Fora do trabalho, gosta de compartilhar seus conhecimentos em workshops e cursos de programação.",
                    profilePic: userImage,
                    id: '3',
                    entryDate: "01/10/2018",
                },
                {
                    nome: "Carla Ferreira",
                    role: "Bolsista",
                    description: "Carla Ferreira é estudante de graduação apaixonada por design de interfaces e experiência do usuário. Ela já participou de competições estudantis, onde apresentou projetos de aplicativos para inclusão digital. Seu foco é criar soluções acessíveis que possam transformar vidas. Carla é membro de um grupo de estudos sobre acessibilidade digital e colabora com ONGs locais. Ela acredita que tecnologia e inclusão devem caminhar juntas.",
                    profilePic: userImage,
                    id: '4',
                    entryDate: "14/07/2022",
                },
                {
                    nome: "Rafael Santos",
                    role: "Orientador",
                    description: "Rafael Santos é professor especializado em segurança cibernética e criptografia. Ele lidera projetos que buscam proteger dados sensíveis em redes distribuídas. Rafael já publicou diversos artigos sobre ataques cibernéticos e métodos de mitigação. Ele também organiza eventos para conscientizar empresas sobre a importância da segurança digital. Fora da academia, Rafael atua como consultor para startups na área de cibersegurança.",
                    profilePic: userImage,
                    id: '9',
                    entryDate: "04/09/2020",
                },
                {
                    nome: "Fernando Rocha",
                    role: "Pesquisador(a)",
                    description: "Fernando Rocha é mestrando em engenharia computacional, com foco em simulações de estruturas mecânicas. Ele desenvolve modelos que ajudam engenheiros a prever falhas estruturais. Fernando já apresentou seus projetos em conferências de engenharia ao redor do mundo. Ele também é membro ativo de um laboratório de inovação tecnológica em sua universidade. Fora do ambiente acadêmico, gosta de ensinar programação a jovens estudantes.",
                    profilePic: userImage,
                    id: '11',
                    entryDate: "15/04/2021",
                },
                {
                    nome: "Paula Castro",
                    role: "Pesquisador(a)",
                    description: "Paula Castro é doutoranda em blockchain e segurança de dados. Sua pesquisa busca integrar tecnologias de segurança em sistemas descentralizados. Paula já publicou artigos em conferências de segurança cibernética e é reconhecida por sua criatividade. Ela também organiza eventos para popularizar o uso ético da tecnologia blockchain. Em seu tempo livre, gosta de explorar novos conceitos na área de computação quântica.",
                    profilePic: userImage,
                    id: '14',
                    entryDate: "25/07/2022",
                },
                {
                    nome: "Camila Farias",
                    role: "Pesquisador(a)",
                    description: "Camila Farias é doutoranda em estatística aplicada, com foco em métodos avançados de análise de dados. Sua pesquisa busca criar modelos preditivos que possam ser aplicados a problemas reais, como previsão de doenças. Camila já recebeu prêmios por sua abordagem inovadora e é uma defensora do uso ético da ciência de dados. Fora do meio acadêmico, ela organiza eventos para capacitar jovens na área de dados.",
                    profilePic: userImage,
                    id: '18',
                    entryDate: "12/09/2021",
                }
            ]
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
            doi: '10.1109/ISSREW55968.2022.00071',
            authors: [
                {
                    nome: "Ana Ribeiro",
                    role: "Pesquisador(a)",
                    description: "Ana Ribeiro é doutoranda em computação e desenvolve sistemas que melhoram a eficiência energética em dispositivos IoT. Sua pesquisa já foi apresentada em importantes conferências internacionais. Ana também colabora com startups para integrar tecnologia sustentável em produtos do mercado. Em seu tempo livre, ela organiza eventos de divulgação científica para inspirar jovens a entrarem no mundo da tecnologia. Sua dedicação é reconhecida tanto dentro quanto fora do meio acadêmico.",
                    profilePic: userImage,
                    id: '2',
                    entryDate: "28/06/2024",
                },
                {
                    nome: "João Almeida",
                    role: "Pesquisador(a)",
                    description: "João Almeida é mestre em computação com foco no desenvolvimento de algoritmos para medicina. Atualmente, ele pesquisa formas de usar redes neurais para diagnosticar doenças raras. Ele acredita no potencial da computação para salvar vidas e trabalha para conectar ciência e saúde. João participa de grupos de pesquisa multidisciplinares que reúnem médicos e engenheiros. Fora do trabalho, gosta de compartilhar seus conhecimentos em workshops e cursos de programação.",
                    profilePic: userImage,
                    id: '3',
                    entryDate: "01/10/2018",
                },
                {
                    nome: "Fernando Rocha",
                    role: "Pesquisador(a)",
                    description: "Fernando Rocha é mestrando em engenharia computacional, com foco em simulações de estruturas mecânicas. Ele desenvolve modelos que ajudam engenheiros a prever falhas estruturais. Fernando já apresentou seus projetos em conferências de engenharia ao redor do mundo. Ele também é membro ativo de um laboratório de inovação tecnológica em sua universidade. Fora do ambiente acadêmico, gosta de ensinar programação a jovens estudantes.",
                    profilePic: userImage,
                    id: '11',
                    entryDate: "15/04/2021",
                },
                {
                    nome: "Lara Nunes",
                    role: "Bolsista",
                    description: "Lara Nunes é estudante de graduação fascinada pelo design e desenvolvimento de jogos digitais. Ela já criou protótipos de jogos interativos e participa de competições de game design. Lara acredita que jogos podem ser uma poderosa ferramenta educacional e de inclusão. Em sua universidade, colabora com colegas para criar experiências imersivas e inovadoras. Fora dos estudos, gosta de explorar novas tecnologias gráficas e motores de jogos.",
                    profilePic: userImage,
                    id: '12',
                    entryDate: "03/12/2020",
                },
                {
                    nome: "Isabela Martins",
                    role: "Bolsista",
                    description: "Isabela Martins é estudante de graduação com interesse em inteligência artificial aplicada à educação. Ela desenvolve ferramentas que ajudam estudantes a aprender de maneira personalizada. Isabela já participou de hackathons e ganhou prêmios por sua inovação. Em sua universidade, ela é uma das líderes de um grupo de estudos sobre tecnologia educacional. Fora dos estudos, gosta de criar conteúdo educativo para redes sociais.",
                    profilePic: userImage,
                    id: '16',
                    entryDate: "19/03/2020",
                },
                {
                    nome: "Victor Teixeira",
                    role: "Orientador",
                    description: "Victor Teixeira é um especialista em sistemas distribuídos e computação em nuvem. Ele lidera projetos que buscam aumentar a eficiência de processamento em redes complexas. Victor é autor de diversos artigos acadêmicos e frequentemente ministra palestras em eventos internacionais. Ele acredita que a computação em nuvem é essencial para o futuro da tecnologia. Em seu tempo livre, ele participa de iniciativas que promovem a inclusão digital.",
                    profilePic: userImage,
                    id: '17',
                    entryDate: "27/05/2018",
                }
            ]
        },
        {
            label: "Análise de vulnerabilidades em redes de computadores usando grafos",
            value: "10",
            conferencia: "Conferência de Segurança Cibernética",
            dataConferencia: "2024-05-20",
            local: "Sydney, Austrália",
            img: '/post-redes.png',
            link: "https://www.google.com",
            keywords: ["segurança cibernética", "redes de computadores", "grafos"],
            abstract: "Aplicação de teoria dos grafos para identificar e mitigar vulnerabilidades em redes de computadores.",
            doi: '10.1109/ISSREW55968.2022.00071',
            authors: [
                {
                    nome: "Ana Ribeiro",
                    role: "Pesquisador(a)",
                    description: "Ana Ribeiro é doutoranda em computação e desenvolve sistemas que melhoram a eficiência energética em dispositivos IoT. Sua pesquisa já foi apresentada em importantes conferências internacionais. Ana também colabora com startups para integrar tecnologia sustentável em produtos do mercado. Em seu tempo livre, ela organiza eventos de divulgação científica para inspirar jovens a entrarem no mundo da tecnologia. Sua dedicação é reconhecida tanto dentro quanto fora do meio acadêmico.",
                    profilePic: userImage,
                    id: '2',
                    entryDate: "28/06/2024",
                },
                {
                    nome: "Carla Ferreira",
                    role: "Bolsista",
                    description: "Carla Ferreira é estudante de graduação apaixonada por design de interfaces e experiência do usuário. Ela já participou de competições estudantis, onde apresentou projetos de aplicativos para inclusão digital. Seu foco é criar soluções acessíveis que possam transformar vidas. Carla é membro de um grupo de estudos sobre acessibilidade digital e colabora com ONGs locais. Ela acredita que tecnologia e inclusão devem caminhar juntas.",
                    profilePic: userImage,
                    id: '4',
                    entryDate: "14/07/2022",
                },
                {
                    nome: "Lucas Lima",
                    role: "Pesquisador(a)",
                    description: "Lucas Lima é mestrando em ciência da computação e trabalha com integração de IoT em ambientes urbanos. Ele desenvolve soluções para cidades inteligentes, combinando eficiência e sustentabilidade. Lucas já apresentou seus projetos em feiras acadêmicas e recebeu prêmios por sua inovação. Além disso, é mentor de estudantes interessados na área de computação. Ele acredita que a tecnologia pode transformar cidades em espaços mais humanos.",
                    profilePic: userImage,
                    id: '7',
                    entryDate: "07/05/2019",
                },
                {
                    nome: "Lara Nunes",
                    role: "Bolsista",
                    description: "Lara Nunes é estudante de graduação fascinada pelo design e desenvolvimento de jogos digitais. Ela já criou protótipos de jogos interativos e participa de competições de game design. Lara acredita que jogos podem ser uma poderosa ferramenta educacional e de inclusão. Em sua universidade, colabora com colegas para criar experiências imersivas e inovadoras. Fora dos estudos, gosta de explorar novas tecnologias gráficas e motores de jogos.",
                    profilePic: userImage,
                    id: '12',
                    entryDate: "03/12/2020",
                }
            ]
        }
    ]

    function keywordsGenerator(array) {
        return array.join(" • ")
    }


    function sortByDate(a, b) {
        let dataA = a.dataConferencia.split('-') //verificar se a data da conferencia, é a data de lançamento do artigo
        let dataB = b.dataConferencia.split('-')


        let entryDataA = new Date(
            parseInt(dataA[0]), //ano
            parseInt(dataA[1]) - 1, //mês
            parseInt(dataA[2]) //dia
        );

        let entryDataB = new Date(
            parseInt(dataB[0]), //ano
            parseInt(dataB[1]) - 1, //mês
            parseInt(dataB[2]) //dia
        );

        return entryDataB - entryDataA;
    }


    function arraySort() {
        setArticles(projects.sort(sortByDate))
    }

    function carouselCardGenerator() {
        if (articles != null) {
            let cards = []

            for (let step = 0; step < 5; step++) {
                cards.push(
                    <div key={step} className="h-[32rem] bg-cover bg-center">
                        <div
                            className="h-[32rem]"
                            style={{
                                zIndex: '15',
                                backgroundSize: "100% 100%",
                                backgroundPosition: "0px 0px",
                                backgroundImage: "radial-gradient(200% 200% at 129% 22%, #073AFF00 29%, #156d86 54%)",
                                paddingTop: '220px'
                            }}
                        >
                            <div className="w-[30%] ml-14">
                                <Paragraph style={{ marginBottom: '4px', color: 'white', fontWeight: "400" }}>{keywordsGenerator(articles[step].keywords)}</Paragraph>
                                <Title level={2} className="z-40" style={{ color: 'white', marginTop: '4px', marginBottom: '10px' }}>{articles[step].label}</Title>
                                <Paragraph style={{ color: 'white' }} className="text-md">{articles[step].abstract}</Paragraph>
                                <Link href={`/articleView?articleID=${articles[step].value}`} passHref>
                                    <Button style={{color: '#156d86'}}>Veja o Artigo <IconFileText stroke={1.25} style={{ width: '22px', height: "26px", color: '#156d86' }} /></Button>
                                </Link>
                            </div>
                            <img
                                id='backgroundImage'
                                src={articles[step].img}
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
                    </div >
                )
            }

            return cards
        }
    }

    // useEffect(() => {
    //     articles != null ? console.log(articles) : console.log("array articles vazio")
    // }, [articles])

    useEffect(() => {
        projects.length != 0 ? arraySort() : console.log("array inicial vazio")
    }, [])
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Carousel: {
                            arrowSize: 32,
                            dotWidth: 48,
                            dotHeight: 8
                        },
                    },
                }}
            >
                <div>
                    <div id="carousel">
                        <Carousel effect="fade" autoplay arrows speed={900}>
                            {carouselCardGenerator()}
                        </Carousel>
                    </div>
                </div>
            </ConfigProvider>
        </>
    )
}