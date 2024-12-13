import HeaderHP from '../components/Header';
import FooterHP from '../components/footer';
import '../styles/team.css'
import '../assets/user.png'
import userImage from '../assets/user.png';
import { Card, Typography, Button, Collapse, Input, Checkbox, Select, Space, DatePicker } from 'antd';


const { RangePicker } = DatePicker;
const { Search } = Input;
const { Title } = Typography;


const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
};

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const onSearch = (value, _e, info) => console.log(info?.source, value);





const membros = [
    {
        nome: 'Marcelo Souza',
        role: 'Professor',
        description: 'Marcelo Souza é um professor com vasta experiência em inteligência artificial e aprendizado de máquina. Ele lidera projetos acadêmicos que conectam ciência e indústria, explorando soluções inovadoras. É autor de diversos artigos publicados em revistas internacionais e mentor de jovens pesquisadores. Marcelo acredita na tecnologia como uma ferramenta poderosa para resolver desafios globais. Seu trabalho também inclui palestras sobre ética e impacto da IA na sociedade.',
        profilePic: userImage
    },
    {
        nome: 'Ana Ribeiro',
        role: 'PhD Student',
        description: 'Ana Ribeiro é doutoranda em computação e desenvolve sistemas que melhoram a eficiência energética em dispositivos IoT. Sua pesquisa já foi apresentada em importantes conferências internacionais. Ana também colabora com startups para integrar tecnologia sustentável em produtos do mercado. Em seu tempo livre, ela organiza eventos de divulgação científica para inspirar jovens a entrarem no mundo da tecnologia. Sua dedicação é reconhecida tanto dentro quanto fora do meio acadêmico.',
        profilePic: userImage,
    },
    {
        nome: 'João Almeida',
        role: 'MSc Student',
        description: 'João Almeida é mestre em computação com foco no desenvolvimento de algoritmos para medicina. Atualmente, ele pesquisa formas de usar redes neurais para diagnosticar doenças raras. Ele acredita no potencial da computação para salvar vidas e trabalha para conectar ciência e saúde. João participa de grupos de pesquisa multidisciplinares que reúnem médicos e engenheiros. Fora do trabalho, gosta de compartilhar seus conhecimentos em workshops e cursos de programação.',
        profilePic: userImage,
    },
    {
        nome: 'Carla Ferreira',
        role: 'Undergrad Student',
        description: 'Carla Ferreira é estudante de graduação apaixonada por design de interfaces e experiência do usuário. Ela já participou de competições estudantis, onde apresentou projetos de aplicativos para inclusão digital. Seu foco é criar soluções acessíveis que possam transformar vidas. Carla é membro de um grupo de estudos sobre acessibilidade digital e colabora com ONGs locais. Ela acredita que tecnologia e inclusão devem caminhar juntas.',
        profilePic: userImage,
    },
    {
        nome: 'Pedro Costa',
        role: 'Professor',
        description: 'Pedro Costa é professor e pesquisador dedicado à modelagem matemática em sistemas complexos. Ele aplica seus conhecimentos para resolver problemas na engenharia e no meio ambiente. Pedro orienta estudantes em projetos inovadores e promove workshops para disseminar conhecimento. Seus interesses acadêmicos incluem otimização e análise preditiva. Fora da universidade, ele gosta de participar de eventos sobre tecnologia e sustentabilidade.',
        profilePic: userImage,
    },
    {
        nome: 'Maria Silva',
        role: 'PhD Student',
        description: 'Maria Silva é doutoranda em inteligência artificial aplicada à linguística. Seu trabalho foca no desenvolvimento de assistentes virtuais que melhoram a comunicação humana. Maria é uma entusiasta da interseção entre tecnologia e linguagem e já publicou artigos em conferências renomadas. Ela também é ativa em comunidades de código aberto, contribuindo para projetos voltados à educação. Sua paixão é tornar a tecnologia mais intuitiva e acessível.',
        profilePic: userImage,
    },
    {
        nome: 'Lucas Lima',
        role: 'MSc Student',
        description: 'Lucas Lima é mestrando em ciência da computação e trabalha com integração de IoT em ambientes urbanos. Ele desenvolve soluções para cidades inteligentes, combinando eficiência e sustentabilidade. Lucas já apresentou seus projetos em feiras acadêmicas e recebeu prêmios por sua inovação. Além disso, é mentor de estudantes interessados na área de computação. Ele acredita que a tecnologia pode transformar cidades em espaços mais humanos.',
        profilePic: userImage,
    },
    {
        nome: 'Juliana Mendes',
        role: 'Undergrad Student',
        description: 'Juliana Mendes é estudante de graduação interessada em ciência de dados e big data. Ela trabalha em projetos que analisam grandes volumes de dados para prever tendências. Juliana é conhecida por sua curiosidade e vontade de aprender, sendo destaque em sua turma. Ela também participa de grupos de estudos sobre inteligência artificial aplicada. Fora da faculdade, gosta de criar visualizações de dados interativas para plataformas online.',
        profilePic: userImage,
    },
    {
        nome: 'Rafael Santos',
        role: 'Professor',
        description: 'Rafael Santos é professor especializado em segurança cibernética e criptografia. Ele lidera projetos que buscam proteger dados sensíveis em redes distribuídas. Rafael já publicou diversos artigos sobre ataques cibernéticos e métodos de mitigação. Ele também organiza eventos para conscientizar empresas sobre a importância da segurança digital. Fora da academia, Rafael atua como consultor para startups na área de cibersegurança.',
        profilePic: userImage,
    },
    {
        nome: 'Beatriz Souza',
        role: 'PhD Student',
        description: 'Beatriz Souza é doutoranda em visão computacional aplicada à robótica autônoma. Sua pesquisa explora formas de tornar os robôs mais conscientes de seu ambiente. Beatriz já participou de projetos interdisciplinares envolvendo engenheiros e cientistas de dados. Ela acredita que a robótica pode ser uma ferramenta para melhorar a qualidade de vida das pessoas. Em seu tempo livre, Beatriz participa de eventos de divulgação científica.',
        profilePic: userImage,
    },
    {
        nome: 'Fernando Rocha',
        role: 'MSc Student',
        description: 'Fernando Rocha é mestrando em engenharia computacional, com foco em simulações de estruturas mecânicas. Ele desenvolve modelos que ajudam engenheiros a prever falhas estruturais. Fernando já apresentou seus projetos em conferências de engenharia ao redor do mundo. Ele também é membro ativo de um laboratório de inovação tecnológica em sua universidade. Fora do ambiente acadêmico, gosta de ensinar programação a jovens estudantes.',
        profilePic: userImage,
    },
    {
        nome: 'Lara Nunes',
        role: 'Undergrad Student',
        description: 'Lara Nunes é estudante de graduação fascinada pelo design e desenvolvimento de jogos digitais. Ela já criou protótipos de jogos interativos e participa de competições de game design. Lara acredita que jogos podem ser uma poderosa ferramenta educacional e de inclusão. Em sua universidade, colabora com colegas para criar experiências imersivas e inovadoras. Fora dos estudos, gosta de explorar novas tecnologias gráficas e motores de jogos.',
        profilePic: userImage,
    },
    {
        nome: 'Ricardo Lopes',
        role: 'Professor',
        description: 'Ricardo Lopes é professor com foco em inteligência artificial para diagnósticos médicos. Ele trabalha em projetos que buscam automatizar a análise de exames complexos. Ricardo colabora com hospitais e laboratórios para validar suas pesquisas. Além disso, é mentor de estudantes interessados em saúde digital. Ele acredita que a tecnologia deve sempre buscar melhorar a qualidade de vida das pessoas.',
        profilePic: userImage,
    },
    {
        nome: 'Paula Castro',
        role: 'PhD Student',
        description: 'Paula Castro é doutoranda em blockchain e segurança de dados. Sua pesquisa busca integrar tecnologias de segurança em sistemas descentralizados. Paula já publicou artigos em conferências de segurança cibernética e é reconhecida por sua criatividade. Ela também organiza eventos para popularizar o uso ético da tecnologia blockchain. Em seu tempo livre, gosta de explorar novos conceitos na área de computação quântica.',
        profilePic: userImage,
    },
    {
        nome: 'Tiago Oliveira',
        role: 'MSc Student',
        description: 'Tiago Oliveira é mestrando em computação e desenvolve algoritmos para otimizar operações logísticas. Seu trabalho ajuda empresas a planejar rotas e reduzir custos operacionais. Tiago já recebeu prêmios por sua pesquisa e inovação tecnológica. Ele também se dedica a ensinar técnicas de programação para iniciantes. Fora da academia, Tiago gosta de explorar soluções tecnológicas para mobilidade urbana.',
        profilePic: userImage,
    },
    {
        nome: 'Isabela Martins',
        role: 'Undergrad Student',
        description: 'Isabela Martins é estudante de graduação com interesse em inteligência artificial aplicada à educação. Ela desenvolve ferramentas que ajudam estudantes a aprender de maneira personalizada. Isabela já participou de hackathons e ganhou prêmios por sua inovação. Em sua universidade, ela é uma das líderes de um grupo de estudos sobre tecnologia educacional. Fora dos estudos, gosta de criar conteúdo educativo para redes sociais.',
        profilePic: userImage,
    },
    {
        nome: 'Victor Teixeira',
        role: 'Professor',
        description: 'Victor Teixeira é um especialista em sistemas distribuídos e computação em nuvem. Ele lidera projetos que buscam aumentar a eficiência de processamento em redes complexas. Victor é autor de diversos artigos acadêmicos e frequentemente ministra palestras em eventos internacionais. Ele acredita que a computação em nuvem é essencial para o futuro da tecnologia. Em seu tempo livre, ele participa de iniciativas que promovem a inclusão digital.',
        profilePic: userImage,
    },
    {
        nome: 'Camila Farias',
        role: 'PhD Student',
        description: 'Camila Farias é doutoranda em estatística aplicada, com foco em métodos avançados de análise de dados. Sua pesquisa busca criar modelos preditivos que possam ser aplicados a problemas reais, como previsão de doenças. Camila já recebeu prêmios por sua abordagem inovadora e é uma defensora do uso ético da ciência de dados. Fora do meio acadêmico, ela organiza eventos para capacitar jovens na área de dados.',
        profilePic: userImage,
    },
    {
        nome: 'André Moreira',
        role: 'MSc Student',
        description: 'André Moreira é mestrando em processamento de sinais aplicado a tecnologias médicas. Ele desenvolve algoritmos que ajudam na detecção precoce de problemas cardíacos. André acredita no potencial da tecnologia para salvar vidas e dedica seu tempo a projetos de impacto social. Ele também é tutor em cursos de introdução à computação para estudantes iniciantes. Fora da pesquisa, André é apaixonado por música e fotografia.',
        profilePic: userImage,
    },
    {
        nome: 'Helena Alves',
        role: 'Undergrad Student',
        description: 'Helena Alves é estudante de graduação com interesse em segurança de redes e sistemas operacionais. Ela é membro ativa de um grupo de pesquisa que busca desenvolver ferramentas para melhorar a proteção digital. Helena acredita que a segurança cibernética é um dos pilares da tecnologia moderna. Além disso, ela se dedica a aprender linguagens de programação voltadas para sistemas de baixo nível. Fora dos estudos, ela é entusiasta de jogos de tabuleiro estratégicos.',
        profilePic: userImage,
    },
    {
        nome: 'Gabriel Pinto',
        role: 'Professor',
        description: 'Gabriel Pinto é um renomado pesquisador na área de heurísticas e algoritmos genéticos. Ele orienta alunos de doutorado em projetos que buscam resolver problemas de otimização complexos. Gabriel é autor de vários livros e artigos sobre inteligência artificial e seus impactos. Ele também organiza workshops para promover a colaboração entre academia e indústria. Fora do ambiente acadêmico, Gabriel gosta de viajar e explorar diferentes culturas.',
        profilePic: userImage,
    },
    {
        nome: 'Sofia Gomes',
        role: 'PhD Student',
        description: 'Sofia Gomes é doutoranda em neurociência computacional e pesquisa o uso de redes neurais para analisar padrões cerebrais. Sua pesquisa é pioneira na integração de IA com estudos clínicos. Sofia já publicou trabalhos que receberam reconhecimento em conferências internacionais. Ela acredita que a tecnologia pode ser uma aliada na melhoria da saúde mental. Além disso, Sofia participa de programas de mentoria para mulheres na ciência.',
        profilePic: userImage,
    },
    {
        nome: 'Rodrigo Dias',
        role: 'MSc Student',
        description: 'Rodrigo Dias é mestrando em aprendizado por reforço aplicado à robótica. Ele trabalha no desenvolvimento de robôs autônomos capazes de se adaptar a ambientes dinâmicos. Rodrigo já apresentou seus projetos em feiras de tecnologia e recebeu destaque pela inovação. Ele também colabora com startups para aplicar sua pesquisa em soluções práticas. Fora da academia, Rodrigo gosta de explorar novas tecnologias no campo da robótica.',
        profilePic: userImage,
    },
    {
        nome: 'Elaine Vieira',
        role: 'Undergrad Student',
        description: 'Elaine Vieira é estudante de graduação com foco em acessibilidade digital. Ela desenvolve projetos que buscam criar ferramentas inclusivas para pessoas com deficiência. Elaine acredita que a tecnologia deve ser acessível a todos e trabalha em iniciativas voltadas para inclusão. Ela também participa de hackathons e eventos de inovação tecnológica. Fora dos estudos, Elaine gosta de escrever artigos sobre tecnologia e inclusão.',
        profilePic: userImage,
    },
    {
        nome: 'Daniel Barros',
        role: 'Professor',
        description: 'Daniel Barros é professor com experiência em modelagem computacional de sistemas ecológicos. Ele trabalha em projetos que buscam prever o impacto de mudanças climáticas em diferentes ecossistemas. Daniel é autor de artigos que combinam ciência ambiental e tecnologia. Ele também colabora com ONGs para aplicar suas pesquisas em conservação ambiental. Fora do ambiente acadêmico, Daniel gosta de fotografia da natureza e esportes ao ar livre.',
        profilePic: userImage,
    },
    {
        nome: 'Luiza Melo',
        role: 'PhD Student',
        description: 'Luiza Melo é doutoranda em análise de dados espaciais e geoprocessamento. Ela pesquisa formas de usar big data para melhorar o planejamento urbano. Luiza já apresentou suas descobertas em conferências internacionais de geotecnologia. Ela acredita que os dados podem ajudar a criar cidades mais sustentáveis e inteligentes. Fora da pesquisa, Luiza participa de iniciativas que ensinam tecnologia para comunidades carentes.',
        profilePic: userImage,
    },
    {
        nome: 'Eduardo Xavier',
        role: 'MSc Student',
        description: 'Eduardo Xavier é mestrando em redes de comunicação, com foco em tecnologias para 5G. Ele desenvolve soluções para melhorar a conectividade em áreas remotas. Eduardo é conhecido por sua habilidade em resolver problemas complexos de engenharia de rede. Ele também colabora com empresas para testar suas tecnologias em cenários reais. Fora da academia, Eduardo é apaixonado por esportes e gosta de praticar ciclismo.',
        profilePic: userImage,
    },
    {
        nome: 'Alice Fonseca',
        role: 'Undergrad Student',
        description: 'Alice Fonseca é estudante de graduação interessada em visualização de dados e design de interfaces. Ela desenvolve dashboards interativos que ajudam a interpretar grandes volumes de dados. Alice é membro de um grupo de pesquisa em ciência de dados e já participou de competições internacionais. Ela acredita que a visualização é uma ferramenta essencial para a tomada de decisões. Fora da universidade, Alice gosta de desenhar e explorar novas ferramentas de design.',
        profilePic: userImage,
    },
    {
        nome: 'Matheus Antunes',
        role: 'Professor',
        description: 'Matheus Antunes é especialista em sistemas de tempo real e computação embarcada. Ele lidera projetos que buscam integrar tecnologias em dispositivos do cotidiano, como carros autônomos. Matheus já publicou diversos artigos em revistas científicas e é palestrante em eventos internacionais. Ele também orienta alunos em projetos de pesquisa inovadores. Fora do trabalho, Matheus gosta de estudar história da ciência e tecnologia.',
        profilePic: userImage,
    },
    {
        nome: 'Renata Carvalho',
        role: 'PhD Student',
        description: 'Renata Carvalho é doutoranda em energias renováveis e inteligência artificial. Sua pesquisa busca desenvolver sistemas inteligentes para otimizar a geração e consumo de energia limpa. Renata já recebeu prêmios por sua contribuição ao campo de energia sustentável. Ela também participa de eventos que incentivam mulheres a ingressarem na ciência e tecnologia. Fora da pesquisa, Renata gosta de viajar e aprender novos idiomas.',
        profilePic: userImage,
    }
];

const optionsCheckbox = [
    {
        label: 'Professors',
        value: 'Professor',
    },
    {
        label: 'PhD Students',
        value: 'PhD Student',
    },
    {
        label: 'MSc Students',
        value: 'MSc Student',
    },
    {
        label: 'Undergrad Students',
        value: 'Undergrad Student',
    },
];
const projects = [
    {
        label: 'Introduzindo teoria dos grafos no processamento de imagens',
        value: '1'
    },
    {
        label: 'Utilizando IA generativa na recuperação hormonal',
        value: '2'
    },
    {
        label: 'Análise de redes sociais utilizando grafos',
        value: '3'
    },
    {
        label: 'Otimização de rotas de entrega com algoritmos de grafos',
        value: '4'
    },
    {
        label: 'Detecção de comunidades em redes complexas',
        value: '5'
    },
    {
        label: 'Aplicação de grafos na bioinformática para análise de sequências genéticas',
        value: '6'
    },
    {
        label: 'Modelagem de redes de transporte público usando teoria dos grafos',
        value: '7'
    },
    {
        label: 'Visualização de dados complexos com grafos interativos',
        value: '8'
    },
    {
        label: 'Algoritmos de grafos para recomendação de produtos em e-commerce',
        value: '9'
    },
    {
        label: 'Análise de vulnerabilidades em redes de computadores usando grafos',
        value: '10'
    }
];


const Membros = () => {

    function cardGenerator(array, type) {

        const arrayFiltrado = array.filter(member => member.role === type);

        const cards = arrayFiltrado.map((member, i) => (
            <Card key={i} className='memberCard'>
                <div className='picDiv'>
                    <img src={member.profilePic} alt={`${member.nome} profile`} className='profilePic' />
                </div>
                <Title level={4} className='memberTypeTitle' style={{ color: '#156D86', marginTop: '5px', marginBottom: '5px' }}>{member.nome}</Title>
                <p className='roleName'>{member.role.toUpperCase()}</p>
                <div className='buttonDiv'>
                    <Button type="primary" className='seeMoreButton'>SEE MORE</Button>
                </div>
            </Card>
        ))

        return cards
    }


    return (
        <div>
            <HeaderHP />
            
            <Title level={2}  style={{ color: '#156D86', textAlign: 'center' }}>OUR TEAM</Title>
            <div className='mainContent'>
                <div className='filterArea'>
                    <Title level={4} className='memberTypeTitle' style={{ color: '#156D86' }}>Filters</Title>
                    <div className='filterInputs'>
                        <div className='filterDiv'>
                            <Title level={5} style={{ color: '#156D86', marginTop: "10px" }}>Name:</Title>
                            <Search placeholder="type member's name..." onSearch={onSearch} enterButton />
                        </div>
                        <div id='checkboxGroup' className='filterDiv'>
                            <Title level={5} style={{ color: '#156D86', marginTop: "10px" }}>Member type:</Title>
                            <Checkbox.Group options={optionsCheckbox} onChange={onChange} />
                        </div>
                        <div id='selectDiv' className='filterDiv'>
                            <Title level={5} style={{ color: '#156D86', marginTop: "10px" }}>Project:</Title>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Select projects..."
                                onChange={handleChange}
                                options={projects}
                                showSearch
                            />
                        </div>
                        <div id='datePicker'>
                            <Title level={5} style={{ color: '#156D86', marginTop: "10px" }}>Date of entry:</Title>
                            <RangePicker />
                        </div>
                        <div>
                            <Button type="primary" id='filterButton'>Filter</Button>
                        </div>
                    </div>
                </div>
                <div className='membersArea' >
                    <div className='memberCategory'>
                        <Title level={3} className='memberTypeTitle' style={{ color: '#156D86' }}>Professors</Title>
                        <div className='membersCardArea'>
                            {cardGenerator(membros, 'Professor')}
                        </div>
                    </div>
                    <div className='memberCategory'>
                        <Title level={3} className='memberTypeTitle' style={{ color: '#156D86' }}>PhD Students</Title>
                        <div className='membersCardArea'>
                            {cardGenerator(membros, 'PhD Student')}
                        </div>
                    </div>
                    <div className='memberCategory'>
                        <Title level={3} className='memberTypeTitle' style={{ color: '#156D86' }}>MSc Students</Title>
                        <div className='membersCardArea'>
                            {cardGenerator(membros, 'MSc Student')}
                        </div>
                    </div>
                    <div className='memberCategory'>
                        <Title level={3} className='memberTypeTitle' style={{ color: '#156D86' }}>Undergrad Students</Title>
                        <div className='membersCardArea'>
                            {cardGenerator(membros, 'Undergrad Student')}
                        </div>
                    </div>
                    {/* {cardGenerator(membros, 'PhD Student')} */}
                </div>
            </div>
            <FooterHP />
        </div>
    )

}

export default Membros;