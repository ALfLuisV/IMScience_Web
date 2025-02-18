"use client"
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import userImage from '../../../public/user.png';
import { Card, Typography } from 'antd';
import { IconBrandInstagram, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const { Title, Paragraph } = Typography;


export default function members() {

    const router = useRouter()

    const [member, setMember] = useState([])
    const searchParams = useSearchParams()
    const [graphicData, setGraphicData] = useState([])

    const membros = [
        {
            nome: "Marcelo Souza",
            role: "Professor",
            description: "Marcelo Souza é um professor com vasta experiência em inteligência artificial e aprendizado de máquina. Ele lidera projetos acadêmicos que conectam ciência e indústria, explorando soluções inovadoras. É autor de diversos artigos publicados em revistas internacionais e mentor de jovens pesquisadores. Marcelo acredita na tecnologia como uma ferramenta poderosa para resolver desafios globais. Seu trabalho também inclui palestras sobre ética e impacto da IA na sociedade.",
            profilePic: userImage,
            id: '1',
            entryDate: "17/03/2020",
            projects: [
                {
                    label: "Detecção de comunidades em redes complexas",
                    value: "5",
                    ano: "2020"

                }
            ]
        },
        {
            nome: "Ana Ribeiro",
            role: "PhD Student",
            description: "Ana Ribeiro é doutoranda em computação e desenvolve sistemas que melhoram a eficiência energética em dispositivos IoT. Sua pesquisa já foi apresentada em importantes conferências internacionais. Ana também colabora com startups para integrar tecnologia sustentável em produtos do mercado. Em seu tempo livre, ela organiza eventos de divulgação científica para inspirar jovens a entrarem no mundo da tecnologia. Sua dedicação é reconhecida tanto dentro quanto fora do meio acadêmico.",
            profilePic: userImage,
            id: '2',
            entryDate: "28/06/2024",
            projects: [
                {
                    label: "Algoritmos de grafos para recomendação de produtos em e-commerce",
                    value: "9",
                    ano: "2021"
                },
                {
                    label: "Detecção de comunidades em redes complexas",
                    value: "5",
                    ano: "2020"
                },
                {
                    label: "Utilizando IA generativa na recuperação hormonal",
                    value: "2",
                    ano: "2019"
                },
                {
                    label: "Análise de vulnerabilidades em redes de computadores usando grafos",
                    value: "10",
                    ano: "2019"
                }
            ]
        },
        {
            nome: "João Almeida",
            role: "MSc Student",
            description: "João Almeida é mestre em computação com foco no desenvolvimento de algoritmos para medicina. Atualmente, ele pesquisa formas de usar redes neurais para diagnosticar doenças raras. Ele acredita no potencial da computação para salvar vidas e trabalha para conectar ciência e saúde. João participa de grupos de pesquisa multidisciplinares que reúnem médicos e engenheiros. Fora do trabalho, gosta de compartilhar seus conhecimentos em workshops e cursos de programação.",
            profilePic: userImage,
            id: '3',
            entryDate: "01/10/2018",
            projects: [
                {
                    label: "Otimização de rotas de entrega com algoritmos de grafos",
                    value: "4",
                    ano: "2023"
                },
                {
                    label: "Visualização de dados complexos com grafos interativos",
                    value: "8",
                    ano: "2023"
                },
                {
                    label: "Algoritmos de grafos para recomendação de produtos em e-commerce",
                    value: "9",
                    ano: "2021"
                }
            ]
        },
        {
            nome: "Carla Ferreira",
            role: "Undergrad Student",
            description: "Carla Ferreira é estudante de graduação apaixonada por design de interfaces e experiência do usuário. Ela já participou de competições estudantis, onde apresentou projetos de aplicativos para inclusão digital. Seu foco é criar soluções acessíveis que possam transformar vidas. Carla é membro de um grupo de estudos sobre acessibilidade digital e colabora com ONGs locais. Ela acredita que tecnologia e inclusão devem caminhar juntas.",
            profilePic: userImage,
            id: '4',
            entryDate: "14/07/2022",
            projects: [
                {
                    label: "Visualização de dados complexos com grafos interativos",
                    value: "8",
                    ano: "2023"
                },
                {
                    label: "Análise de vulnerabilidades em redes de computadores usando grafos",
                    value: "10",
                    ano: "2019"
                },
                {
                    label: "Análise de redes sociais utilizando grafos",
                    value: "3",
                    ano: "2021"
                }
            ]
        },
        {
            nome: "Pedro Costa",
            role: "Professor",
            description: "Pedro Costa é professor e pesquisador dedicado à modelagem matemática em sistemas complexos. Ele aplica seus conhecimentos para resolver problemas na engenharia e no meio ambiente. Pedro orienta estudantes em projetos inovadores e promove workshops para disseminar conhecimento. Seus interesses acadêmicos incluem otimização e análise preditiva. Fora da universidade, ele gosta de participar de eventos sobre tecnologia e sustentabilidade.",
            profilePic: userImage,
            id: '5',
            entryDate: "23/09/2021",
            projects: [
                {
                    label: "Análise de redes sociais utilizando grafos",
                    value: "3",
                    ano: "2021"
                },
                {
                    label: "Utilizando IA generativa na recuperação hormonal",
                    value: "2",
                    ano: "2019"
                }
            ]
        },
        {
            nome: "Maria Silva",
            role: "PhD Student",
            description: "Maria Silva é doutoranda em inteligência artificial aplicada à linguística. Seu trabalho foca no desenvolvimento de assistentes virtuais que melhoram a comunicação humana. Maria é uma entusiasta da interseção entre tecnologia e linguagem e já publicou artigos em conferências renomadas. Ela também é ativa em comunidades de código aberto, contribuindo para projetos voltados à educação. Sua paixão é tornar a tecnologia mais intuitiva e acessível.",
            profilePic: userImage,
            id: '6',
            entryDate: "11/02/2016",
            projects: [
                {
                    label: "Aplicação de grafos na bioinformática para análise de sequências genéticas",
                    value: "6",
                    ano: "2022"
                },
                {
                    label: "Introduzindo teoria dos grafos no processamento de imagens",
                    value: "1",
                    ano: "2022"
                }
            ]
        },
        {
            nome: "Lucas Lima",
            role: "MSc Student",
            description: "Lucas Lima é mestrando em ciência da computação e trabalha com integração de IoT em ambientes urbanos. Ele desenvolve soluções para cidades inteligentes, combinando eficiência e sustentabilidade. Lucas já apresentou seus projetos em feiras acadêmicas e recebeu prêmios por sua inovação. Além disso, é mentor de estudantes interessados na área de computação. Ele acredita que a tecnologia pode transformar cidades em espaços mais humanos.",
            profilePic: userImage,
            id: '7',
            entryDate: "07/05/2019",
            projects: [
                {
                    label: "Análise de vulnerabilidades em redes de computadores usando grafos",
                    value: "10",
                    ano: "2019"
                },
                {
                    label: "Otimização de rotas de entrega com algoritmos de grafos",
                    value: "4",
                    ano: "2023"
                },
                {
                    label: "Modelagem de redes de transporte público usando teoria dos grafos",
                    value: "7",
                    ano: "2021"
                }
            ]
        },
        {
            nome: "Juliana Mendes",
            role: "Undergrad Student",
            description: "Juliana Mendes é estudante de graduação interessada em ciência de dados e big data. Ela trabalha em projetos que analisam grandes volumes de dados para prever tendências. Juliana é conhecida por sua curiosidade e vontade de aprender, sendo destaque em sua turma. Ela também participa de grupos de estudos sobre inteligência artificial aplicada. Fora da faculdade, gosta de criar visualizações de dados interativas para plataformas online.",
            profilePic: userImage,
            id: '8',
            entryDate: "18/11/2017",
            projects: [
                {
                    label: "Detecção de comunidades em redes complexas",
                    value: "5",
                    ano: "2020"
                },
                {
                    label: "Utilizando IA generativa na recuperação hormonal",
                    value: "2",
                    ano: "2019"
                }
            ]
        },
        {
            nome: "Rafael Santos",
            role: "Professor",
            description: "Rafael Santos é professor especializado em segurança cibernética e criptografia. Ele lidera projetos que buscam proteger dados sensíveis em redes distribuídas. Rafael já publicou diversos artigos sobre ataques cibernéticos e métodos de mitigação. Ele também organiza eventos para conscientizar empresas sobre a importância da segurança digital. Fora da academia, Rafael atua como consultor para startups na área de cibersegurança.",
            profilePic: userImage,
            id: '9',
            entryDate: "04/09/2020",
            projects: [
                {
                    label: "Visualização de dados complexos com grafos interativos",
                    value: "8",
                    ano: "2023"
                }
            ]
        },
        {
            nome: "Beatriz Souza",
            role: "PhD Student",
            description: "Beatriz Souza é doutoranda em visão computacional aplicada à robótica autônoma. Sua pesquisa explora formas de tornar os robôs mais conscientes de seu ambiente. Beatriz já participou de projetos interdisciplinares envolvendo engenheiros e cientistas de dados. Ela acredita que a robótica pode ser uma ferramenta para melhorar a qualidade de vida das pessoas. Em seu tempo livre, Beatriz participa de eventos de divulgação científica.",
            profilePic: userImage,
            id: '10',
            entryDate: "30/06/2023",
            projects: [
                {
                    label: "Otimização de rotas de entrega com algoritmos de grafos",
                    value: "4",
                    ano: "2023"
                },
                {
                    label: "Análise de redes sociais utilizando grafos",
                    value: "3",
                    ano: "2021"
                }
            ]
        },
        {
            nome: "Fernando Rocha",
            role: "MSc Student",
            description: "Fernando Rocha é mestrando em engenharia computacional, com foco em simulações de estruturas mecânicas. Ele desenvolve modelos que ajudam engenheiros a prever falhas estruturais. Fernando já apresentou seus projetos em conferências de engenharia ao redor do mundo. Ele também é membro ativo de um laboratório de inovação tecnológica em sua universidade. Fora do ambiente acadêmico, gosta de ensinar programação a jovens estudantes.",
            profilePic: userImage,
            id: '11',
            entryDate: "15/04/2021",
            projects: [
                {
                    label: "Algoritmos de grafos para recomendação de produtos em e-commerce",
                    value: "9",
                    ano: "2021"
                },
                {
                    label: "Modelagem de redes de transporte público usando teoria dos grafos",
                    value: "7",
                    ano: "2021"
                },
                {
                    label: "Otimização de rotas de entrega com algoritmos de grafos",
                    value: "4",
                    ano: "2023"
                },
                {
                    label: "Visualização de dados complexos com grafos interativos",
                    value: "8",
                    ano: "2023"
                }
            ]
        },
        {
            nome: "Lara Nunes",
            role: "Undergrad Student",
            description: "Lara Nunes é estudante de graduação fascinada pelo design e desenvolvimento de jogos digitais. Ela já criou protótipos de jogos interativos e participa de competições de game design. Lara acredita que jogos podem ser uma poderosa ferramenta educacional e de inclusão. Em sua universidade, colabora com colegas para criar experiências imersivas e inovadoras. Fora dos estudos, gosta de explorar novas tecnologias gráficas e motores de jogos.",
            profilePic: userImage,
            id: '12',
            entryDate: "03/12/2020",
            projects: [
                {
                    label: "Utilizando IA generativa na recuperação hormonal",
                    value: "2",
                    ano: "2019"
                },
                {
                    label: "Otimização de rotas de entrega com algoritmos de grafos",
                    value: "4",
                    ano: "2023"
                },
                {
                    label: "Análise de vulnerabilidades em redes de computadores usando grafos",
                    value: "10",
                    ano: "2019"
                },
                {
                    label: "Algoritmos de grafos para recomendação de produtos em e-commerce",
                    value: "9",
                    ano: "2021"
                }
            ]
        },
        {
            nome: "Ricardo Lopes",
            role: "Professor",
            description: "Ricardo Lopes é professor com foco em inteligência artificial para diagnósticos médicos. Ele trabalha em projetos que buscam automatizar a análise de exames complexos. Ricardo colabora com hospitais e laboratórios para validar suas pesquisas. Além disso, é mentor de estudantes interessados em saúde digital. Ele acredita que a tecnologia deve sempre buscar melhorar a qualidade de vida das pessoas.",
            profilePic: userImage,
            id: '13',
            entryDate: "09/08/2019",
            projects: [
                {
                    label: "Modelagem de redes de transporte público usando teoria dos grafos",
                    value: "7",
                    ano: "2021"
                },
                {
                    label: "Aplicação de grafos na bioinformática para análise de sequências genéticas",
                    value: "6",
                    ano: "2022"
                },
                {
                    label: "Introduzindo teoria dos grafos no processamento de imagens",
                    value: "1",
                    ano: "2022"
                }
            ]
        },
        {
            nome: "Paula Castro",
            role: "PhD Student",
            description: "Paula Castro é doutoranda em blockchain e segurança de dados. Sua pesquisa busca integrar tecnologias de segurança em sistemas descentralizados. Paula já publicou artigos em conferências de segurança cibernética e é reconhecida por sua criatividade. Ela também organiza eventos para popularizar o uso ético da tecnologia blockchain. Em seu tempo livre, gosta de explorar novos conceitos na área de computação quântica.",
            profilePic: userImage,
            id: '14',
            entryDate: "25/07/2022",
            projects: [
                {
                    label: "Introduzindo teoria dos grafos no processamento de imagens",
                    value: "1",
                    ano: "2022"
                },
                {
                    label: "Detecção de comunidades em redes complexas",
                    value: "5",
                    ano: "2020"
                },
                {
                    label: "Visualização de dados complexos com grafos interativos",
                    value: "8",
                    ano: "2023"
                }
            ]
        },
        {
            nome: "Tiago Oliveira",
            role: "MSc Student",
            description: "Tiago Oliveira é mestrando em computação e desenvolve algoritmos para otimizar operações logísticas. Seu trabalho ajuda empresas a planejar rotas e reduzir custos operacionais. Tiago já recebeu prêmios por sua pesquisa e inovação tecnológica. Ele também se dedica a ensinar técnicas de programação para iniciantes. Fora da academia, Tiago gosta de explorar soluções tecnológicas para mobilidade urbana.",
            profilePic: userImage,
            id: '15',
            entryDate: "11/01/2023",
            projects: [
                {
                    label: "Introduzindo teoria dos grafos no processamento de imagens",
                    value: "1",
                    ano: "2022"
                },
                {
                    label: "Análise de redes sociais utilizando grafos",
                    value: "3",
                    ano: "2021"
                },
                {
                    label: "Utilizando IA generativa na recuperação hormonal",
                    value: "2",
                    ano: "2019"
                }
            ]
        },
        {
            nome: "Isabela Martins",
            role: "Undergrad Student",
            description: "Isabela Martins é estudante de graduação com interesse em inteligência artificial aplicada à educação. Ela desenvolve ferramentas que ajudam estudantes a aprender de maneira personalizada. Isabela já participou de hackathons e ganhou prêmios por sua inovação. Em sua universidade, ela é uma das líderes de um grupo de estudos sobre tecnologia educacional. Fora dos estudos, gosta de criar conteúdo educativo para redes sociais.",
            profilePic: userImage,
            id: '16',
            entryDate: "19/03/2020",
            projects: [
                {
                    label: "Introduzindo teoria dos grafos no processamento de imagens",
                    value: "1",
                    ano: "2022"
                },
                {
                    label: "Algoritmos de grafos para recomendação de produtos em e-commerce",
                    value: "9",
                    ano: "2021"
                }
            ]
        },
        {
            nome: "Victor Teixeira",
            role: "Professor",
            description: "Victor Teixeira é um especialista em sistemas distribuídos e computação em nuvem. Ele lidera projetos que buscam aumentar a eficiência de processamento em redes complexas. Victor é autor de diversos artigos acadêmicos e frequentemente ministra palestras em eventos internacionais. Ele acredita que a computação em nuvem é essencial para o futuro da tecnologia. Em seu tempo livre, ele participa de iniciativas que promovem a inclusão digital.",
            profilePic: userImage,
            id: '17',
            entryDate: "27/05/2018",
            projects: [
                {
                    label: "Algoritmos de grafos para recomendação de produtos em e-commerce",
                    value: "9",
                    ano: "2021"
                },
                {
                    label: "Introduzindo teoria dos grafos no processamento de imagens",
                    value: "1",
                    ano: "2022"
                },
                {
                    label: "Modelagem de redes de transporte público usando teoria dos grafos",
                    value: "7",
                    ano: "2021"
                }
            ]
        },
        {
            nome: "Camila Farias",
            role: "PhD Student",
            description: "Camila Farias é doutoranda em estatística aplicada, com foco em métodos avançados de análise de dados. Sua pesquisa busca criar modelos preditivos que possam ser aplicados a problemas reais, como previsão de doenças. Camila já recebeu prêmios por sua abordagem inovadora e é uma defensora do uso ético da ciência de dados. Fora do meio acadêmico, ela organiza eventos para capacitar jovens na área de dados.",
            profilePic: userImage,
            id: '18',
            entryDate: "12/09/2021",
            projects: [
                {
                    label: "Utilizando IA generativa na recuperação hormonal",
                    value: "2",
                    ano: "2019"
                },
                {
                    label: "Visualização de dados complexos com grafos interativos",
                    value: "8",
                    ano: "2023"
                }
            ]
        },
        {
            nome: "André Moreira",
            role: "MSc Student",
            description: "André Moreira é mestrando em processamento de sinais aplicado a tecnologias médicas. Ele desenvolve algoritmos que ajudam na detecção precoce de problemas cardíacos. André acredita no potencial da tecnologia para salvar vidas e dedica seu tempo a projetos de impacto social. Ele também é tutor em cursos de introdução à computação para estudantes iniciantes. Fora da pesquisa, André é apaixonado por música e fotografia.",
            profilePic: userImage,
            id: '19',
            entryDate: "06/02/2019",
            projects: [
                {
                    label: "Visualização de dados complexos com grafos interativos",
                    value: "8",
                    ano: "2023"
                },
                {
                    label: "Otimização de rotas de entrega com algoritmos de grafos",
                    value: "4",
                    ano: "2023"
                },
                {
                    label: "Introduzindo teoria dos grafos no processamento de imagens",
                    value: "1",
                    ano: "2022"
                }
            ]
        },
        {
            nome: "Helena Alves",
            role: "Undergrad Student",
            description: "Helena Alves é estudante de graduação com interesse em segurança de redes e sistemas operacionais. Ela é membro ativa de um grupo de pesquisa que busca desenvolver ferramentas para melhorar a proteção digital. Helena acredita que a segurança cibernética é um dos pilares da tecnologia moderna. Além disso, ela se dedica a aprender linguagens de programação voltadas para sistemas de baixo nível. Fora dos estudos, ela é entusiasta de jogos de tabuleiro estratégicos.",
            profilePic: userImage,
            id: '20',
            entryDate: "03/11/2023",
            projects: [
                {
                    label: "Aplicação de grafos na bioinformática para análise de sequências genéticas",
                    value: "6",
                    ano: "2022"
                }
            ]
        },
        {
            nome: "Gabriel Pinto",
            role: "Professor",
            description: "Gabriel Pinto é um renomado pesquisador na área de heurísticas e algoritmos genéticos. Ele orienta alunos de doutorado em projetos que buscam resolver problemas de otimização complexos. Gabriel é autor de vários livros e artigos sobre inteligência artificial e seus impactos. Ele também organiza workshops para promover a colaboração entre academia e indústria. Fora do ambiente acadêmico, Gabriel gosta de viajar e explorar diferentes culturas.",
            profilePic: userImage,
            id: '21',
            entryDate: "14/08/2015",
            projects: [
                {
                    label: "Introduzindo teoria dos grafos no processamento de imagens",
                    value: "1",
                    ano: "2022"
                },
                {
                    label: "Análise de vulnerabilidades em redes de computadores usando grafos",
                    value: "10",
                    ano: "2019"
                }
            ]
        },
        {
            nome: "Sofia Gomes",
            role: "PhD Student",
            description: "Sofia Gomes é doutoranda em neurociência computacional e pesquisa o uso de redes neurais para analisar padrões cerebrais. Sua pesquisa é pioneira na integração de IA com estudos clínicos. Sofia já publicou trabalhos que receberam reconhecimento em conferências internacionais. Ela acredita que a tecnologia pode ser uma aliada na melhoria da saúde mental. Além disso, Sofia participa de programas de mentoria para mulheres na ciência.",
            profilePic: userImage,
            id: '22',
            entryDate: "27/01/2022",
            projects: [
                {
                    label: "Análise de redes sociais utilizando grafos",
                    value: "3",
                    ano: "2021"
                }
            ]
        },
        {
            nome: "Rodrigo Dias",
            role: "MSc Student",
            description: "Rodrigo Dias é mestrando em aprendizado por reforço aplicado à robótica. Ele trabalha no desenvolvimento de robôs autônomos capazes de se adaptar a ambientes dinâmicos. Rodrigo já apresentou seus projetos em feiras de tecnologia e recebeu destaque pela inovação. Ele também colabora com startups para aplicar sua pesquisa em soluções práticas. Fora da academia, Rodrigo gosta de explorar novas tecnologias no campo da robótica.",
            profilePic: userImage,
            id: '23',
            entryDate: "21/04/2020",
            projects: [
                {
                    label: "Detecção de comunidades em redes complexas",
                    value: "5",
                    ano: "2020"
                },
                {
                    label: "Visualização de dados complexos com grafos interativos",
                    value: "8",
                    ano: "2023"
                },
                {
                    label: "Modelagem de redes de transporte público usando teoria dos grafos",
                    value: "7",
                    ano: "2021"
                },
                {
                    label: "Utilizando IA generativa na recuperação hormonal",
                    value: "2",
                    ano: "2019"
                }
            ]
        },
        {
            nome: "Elaine Vieira",
            role: "Undergrad Student",
            description: "Elaine Vieira é estudante de graduação com foco em acessibilidade digital. Ela desenvolve projetos que buscam criar ferramentas inclusivas para pessoas com deficiência. Elaine acredita que a tecnologia deve ser acessível a todos e trabalha em iniciativas voltadas para inclusão. Ela também participa de hackathons e eventos de inovação tecnológica. Fora dos estudos, Elaine gosta de escrever artigos sobre tecnologia e inclusão.",
            profilePic: userImage,
            id: '24',
            entryDate: "08/10/2019",
            projects: [
                {
                    label: "Algoritmos de grafos para recomendação de produtos em e-commerce",
                    value: "9",
                    ano: "2021"
                },
                {
                    label: "Análise de redes sociais utilizando grafos",
                    value: "3",
                    ano: "2021"
                },
                {
                    label: "Otimização de rotas de entrega com algoritmos de grafos",
                    value: "4",
                    ano: "2023"
                },
                {
                    label: "Aplicação de grafos na bioinformática para análise de sequências genéticas",
                    value: "6",
                    ano: "2022"
                }
            ]
        },
        {
            nome: "Daniel Barros",
            role: "Professor",
            description: "Daniel Barros é professor com experiência em modelagem computacional de sistemas ecológicos. Ele trabalha em projetos que buscam prever o impacto de mudanças climáticas em diferentes ecossistemas. Daniel é autor de artigos que combinam ciência ambiental e tecnologia. Ele também colabora com ONGs para aplicar suas pesquisas em conservação ambiental. Fora do ambiente acadêmico, Daniel gosta de fotografia da natureza e esportes ao ar livre.",
            profilePic: userImage,
            id: '25',
            entryDate: "11/07/2021",
            projects: [
                {
                    label: "Utilizando IA generativa na recuperação hormonal",
                    value: "2",
                    ano: "2019"
                },
                {
                    label: "Aplicação de grafos na bioinformática para análise de sequências genéticas",
                    value: "6",
                    ano: "2022"
                },
                {
                    label: "Introduzindo teoria dos grafos no processamento de imagens",
                    value: "1",
                    ano: "2022"
                }
            ]
        },
        {
            nome: "Luiza Melo",
            role: "PhD Student",
            description: "Luiza Melo é doutoranda em análise de dados espaciais e geoprocessamento. Ela pesquisa formas de usar big data para melhorar o planejamento urbano. Luiza já apresentou suas descobertas em conferências internacionais de geotecnologia. Ela acredita que os dados podem ajudar a criar cidades mais sustentáveis e inteligentes. Fora da pesquisa, Luiza participa de iniciativas que ensinam tecnologia para comunidades carentes.",
            profilePic: userImage,
            id: '26',
            entryDate: "05/02/2018",
            projects: [
                {
                    label: "Utilizando IA generativa na recuperação hormonal",
                    value: "2",
                    ano: "2019"
                },
                {
                    label: "Análise de vulnerabilidades em redes de computadores usando grafos",
                    value: "10",
                    ano: "2019"
                }
            ]
        },
        {
            nome: "Eduardo Xavier",
            role: "MSc Student",
            description: "Eduardo Xavier é mestrando em redes de comunicação, com foco em tecnologias para 5G. Ele desenvolve soluções para melhorar a conectividade em áreas remotas. Eduardo é conhecido por sua habilidade em resolver problemas complexos de engenharia de rede. Ele também colabora com empresas para testar suas tecnologias em cenários reais. Fora da academia, Eduardo é apaixonado por esportes e gosta de praticar ciclismo.",
            profilePic: userImage,
            id: '27',
            entryDate: "19/09/2023",
            projects: [
                {
                    label: "Detecção de comunidades em redes complexas",
                    value: "5",
                    ano: "2020"
                },
                {
                    label: "Modelagem de redes de transporte público usando teoria dos grafos",
                    value: "7",
                    ano: "2021"
                },
                {
                    label: "Visualização de dados complexos com grafos interativos",
                    value: "8",
                    ano: "2023"
                }
            ]
        },
        {
            nome: "Alice Fonseca",
            role: "Undergrad Student",
            description: "Alice Fonseca é estudante de graduação interessada em visualização de dados e design de interfaces. Ela desenvolve dashboards interativos que ajudam a interpretar grandes volumes de dados. Alice é membro de um grupo de pesquisa em ciência de dados e já participou de competições internacionais. Ela acredita que a visualização é uma ferramenta essencial para a tomada de decisões. Fora da universidade, Alice gosta de desenhar e explorar novas ferramentas de design.",
            profilePic: userImage,
            id: '28',
            entryDate: "13/05/2020",
            projects: [
                {
                    label: "Algoritmos de grafos para recomendação de produtos em e-commerce",
                    value: "9",
                    ano: "2021"
                },
                {
                    label: "Detecção de comunidades em redes complexas",
                    value: "5",
                    ano: "2020"
                },
                {
                    label: "Análise de redes sociais utilizando grafos",
                    value: "3",
                    ano: "2021"
                },
                {
                    label: "Aplicação de grafos na bioinformática para análise de sequências genéticas",
                    value: "6",
                    ano: "2022"
                },
                {
                    label: "Visualização de dados complexos com grafos interativos",
                    value: "8",
                    ano: "2023"
                }
            ]
        },
        {
            nome: "Matheus Antunes",
            role: "Professor",
            description: "Matheus Antunes é especialista em sistemas de tempo real e computação embarcada. Ele lidera projetos que buscam integrar tecnologias em dispositivos do cotidiano, como carros autônomos. Matheus já publicou diversos artigos em revistas científicas e é palestrante em eventos internacionais. Ele também orienta alunos em projetos de pesquisa inovadores. Fora do trabalho, Matheus gosta de estudar história da ciência e tecnologia.",
            profilePic: userImage,
            id: '29',
            entryDate: "22/11/2022",
            projects: [
                {
                    label: "Detecção de comunidades em redes complexas",
                    value: "5",
                    ano: "2020"
                }
            ]
        },
        {
            nome: "Renata Carvalho",
            role: "PhD Student",
            description: "Renata Carvalho é doutoranda em energias renováveis e inteligência artificial. Sua pesquisa busca desenvolver sistemas inteligentes para otimizar a geração e consumo de energia limpa. Renata já recebeu prêmios por sua contribuição ao campo de energia sustentável. Ela também participa de eventos que incentivam mulheres a ingressarem na ciência e tecnologia. Fora da pesquisa, Renata gosta de viajar e aprender novos idiomas.",
            profilePic: userImage,
            id: '30',
            entryDate: "10/04/2019",
            projects: [
                {
                    label: "Aplicação de grafos na bioinformática para análise de sequências genéticas",
                    value: "6",
                    ano: "2022"
                }
            ]
        }
    ];


    function getMembroById(id) {
        for (const e of membros) {
            if (id == e.id) return e
        }
    }

    function createGraphicArray() {
        let aux = []
        let data = new Date()
        let dataAno = data.getFullYear()
        let anoInicial = dataAno - 10

        while (anoInicial <= dataAno) {
            let item = {
                ano: anoInicial.toString(),
                pubs: 0,
            }
            aux.push(item)
            anoInicial += 1
        }

        setGraphicData(aux)
    }

    function fetGraphicValues() {
        let arrayAux = [...graphicData]

        for (const e of member.projects) {
            for (const a of arrayAux) {
                if (a.ano == e.ano) {
                    a.pubs += 1;
                }
            }
        }
        setGraphicData(arrayAux)
    }


    function cardGenerator(array) {
        if (array.length != 0) {
            const cards = array.map((project, i) => (
                <Card key={i} className="mr-3 w-[20rem] mb-5">
                    <a href={`/articleView?articleID=${project.value}`}>
                        <Title level={4} className='memberTypeTitle' style={{ color: '#156D86', marginTop: '5px', marginBottom: '5px' }}>{project.label}</Title>
                    </a>
                    <div className='buttonDiv'>
                        <Paragraph className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Paragraph>
                    </div>
                </Card>
            ))
            return cards
        }
        return <Text style={{ width: '100%', textAlign: 'center', marginBottom: '15px' }}>Não foram encontrados publicações relacionadas a este membro</Text>
    }


    useEffect(() => {
        const search = searchParams.get('memberID')
        setMember(getMembroById(search))
        createGraphicArray()
    }, [])

    useEffect(() => {
        if (member.length != 0 && graphicData.length != 0) fetGraphicValues()
    }, [member])
    return (
        <Suspense>
            <>
            (member.length != 0 ?
            <div>
                <div className="flex mt-10 ml-8">
                    <div id="picDiv" className="mr-5">
                        <img src='/user.png' alt={`${member.nome} profile`} className='w-[100px] h-[100px]' />
                    </div>
                    <div id="infoDiv" className="w-[50%]">
                        <div id="name">
                            <Title level={2} style={{ color: '#156D86', marginBottom: '0px' }}>{member.nome}</Title>
                        </div>
                        <div id="position">
                            <Title level={5} style={{ color: '#156D86' }}>{member.role.toUpperCase()}</Title>
                        </div>
                        <div id="description" >
                            <Paragraph className=" text-xl text-justify">
                                {member.description}
                            </Paragraph>
                        </div>
                        <div className="flex">
                            <div id="social" className="w-[20%]">
                                <Title level={5} style={{ color: '#156D86' }}>How to find:</Title>
                                <div className="flex">
                                    <img src='/google-scholar.svg' alt={`${member.nome} scholarGoogle`} className='w-[25px] h-[25px] mr-[5px]' />
                                    <img src='/dblp-svgrepo-com.svg' alt={`${member.nome} dblp`} className='w-[25px] h-[25px] mr-[5px]' />
                                    <img src='/ResearchGate_icon_SVG.svg' alt={`${member.nome} researchGate`} className='w-[25px] h-[25px] mr-[5px]' />
                                </div>
                            </div>
                            <div id="contact">
                                <Title level={5} style={{ color: '#156D86', marginBottom: '2px' }}>Social Medias:</Title>
                                <div className="flex">
                                    <IconBrandLinkedin stroke={1.5} style={{ color: '#156D86', width: '30px', height: '30px', marginTop: '2px' }} />
                                    <IconBrandInstagram stroke={1.5} style={{ color: '#156D86', width: '34px', height: '34px' }} />
                                    <IconMail stroke={1.5} style={{ color: '#156D86', width: '34px', height: '34px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: '7rem' }}>
                        <Title level={3} style={{ color: '#156D86', marginTop: '6px' }}>Contributions:</Title>
                        <div style={{
                            backgroundColor: '#fafafa',
                            width: '450px',
                            height: '250px',
                            padding: '25px 25px 25px 25px',
                            borderRadius: '30px'
                        }}>
                            <LineChart
                                width={400}
                                height={200}
                                data={graphicData}
                            >
                                <Tooltip
                                    content={({ payload, label }) => {
                                        if (payload && payload.length) {
                                            const { ano, pubs } = payload[0].payload; // Captura 'ano' e 'pubs' dos dados
                                            return (
                                                <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '5px' }}>
                                                    <p><strong>Year:</strong> {ano}</p>
                                                    <p><strong>Publications:</strong> {pubs}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Line type="monotone" dataKey="pubs" stroke="#156D86" />
                            </LineChart>
                        </div>
                    </div>
                </div>
                <div id="projects" className="ml-8 mt-8">
                    <Title level={3} style={{ color: '#156D86' }}>Publications:</Title>
                    <div id="projectsContainer" className="flex flex-wrap mb-10">
                        {cardGenerator(member.projects)}
                    </div>
                </div>
            </div>
            : <div>
                <Title level={1}> Houve um problema na exibição do recurso</Title>
            </div>
            )
            </>
        </Suspense>);
}