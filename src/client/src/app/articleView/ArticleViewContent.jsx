"use client"
// export const dynamic = 'force-dynamic';
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import { Card, Typography, Button, Modal } from 'antd';
import { IconFileText, IconQuote, IconCopy } from '@tabler/icons-react';
import '@ant-design/v5-patch-for-react-19';
import userImage from '../../../public/user.png'
import { useRouter } from 'next/navigation';
import ModalCitation from '@/components/citationBox/citation'


const { Title, Paragraph, Text } = Typography;


export default function ArticleViewContent({projects}) {
    const searchParams = useSearchParams()
    const router = useRouter()



    const [project, setProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState('Copy')
    const [enableCopyButton, setEnableCopyButton] = useState(false)




    


    const showModal = () => {
        setIsModalOpen(true);
        setEnableCopyButton(false)
        setCopyButtonText('Copy')
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



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


    function citationGenerator() {
        let textAuthors = []
        let citation = ''
        for (const e of project.authors) {
            textAuthors.push(e.nome.split(' '))
        }

        console.log(textAuthors)

        for (const z of textAuthors) {
            z.reverse()
            citation = citation + z[0].toUpperCase() + ', '
            z.reverse()
            citation = citation + z[0] + '; '
        }

        citation = citation.slice(0, -2) + '. '

        let ano = project.dataConferencia.split('-')
        let local = project.local.split(' ')
        citation += project.label + '. In: ' + project.conferencia.toUpperCase() + ', ' + ano[0] + ', ' + local[0] + '  DOI:' + project.doi + '.'


        return citation
    }

    function copyText(text) {
        navigator.clipboard.writeText(text).then(() => {
            setCopyButtonText('Coppied!')
            setEnableCopyButton(true)
        })
    }



    function keywordsFormater(keywords) {
        let finalString = ''
        for (const e of keywords) {
            finalString += e + ', '
        }
        return finalString.slice(0, -2);
    }

    function gerarRota(id) {
        router.push(`/memberView?memberID=${id}`)
    };

    function cardGenerator(array) {


        if (array.length != 0) {
            const cards = array.map((member, i) => (
                <Card key={i} className='memberCard'>
                    <div className='picDiv'>
                        <img src='/user.png' alt={`${member.nome} profile`} className='profilePic' />
                    </div>
                    <Title level={4} className='memberTypeTitle' style={{ color: '#156D86', marginTop: '5px', marginBottom: '5px' }}>{member.nome}</Title>
                    <p className='roleName'>{member.role.toUpperCase()}</p>
                    <div className='buttonDiv'>
                        <a href={`/memberView?memberID=${member.id}`} rel="noopener noreferrer">
                            <Button type="primary" className='seeMoreButton' onClick={(e) => { gerarRota(member.id) }}>SEE MORE</Button>
                        </a>
                    </div>
                </Card>
            ))

            return cards
        }
        return <Text style={{ width: '100%', textAlign: 'center', marginBottom: '15px' }}>Não foram encontrados membros nesta posição</Text>
    }




    useEffect(() => {
        if (project != null) {
            citationGenerator()
        }
    }, [project])

    useEffect(() => {
        const search = searchParams.get('articleID')
        if (search) {
            setProject(getProjectByID(search))
        }
    }, [])
    return (
        // <Suspense fallback={<div>Carregando...</div>}>
            <>
                {project != null ?
                    <div>
                        <div className="pl-8 mt-10 divide-[#e0e0e0] divide-y-2">
                            <div id="infoDivv" className="mb-8">
                                <div id="topDiv" className="flex mb-[20px] flex-wrap items-center justify-between pr-5">
                                    <Title level={1} className='w-[70%]' style={{ color: '#156D86', marginBottom: "0px" }}>{project.label}</Title>
                                    <div>
                                        <Button style={{ backgroundColor: '#D9D9D9', marginRight: '5px' }} onClick={showModal}>Cite article <IconQuote style={{ width: '22px', height: "26px" }} /></Button>
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
                            <div id="abstract" className="pt-5">
                                <Title level={3} className='w-[70%]' style={{ color: '#156D86', marginBottom: "0px" }}>Abstract:</Title>
                                <div id="abstractt">
                                    <Paragraph className="w-[65%] text-balance text-lg mt-1  pb-4">
                                        {project.abstract}
                                    </Paragraph>
                                </div>
                            </div>
                            <div id="demo" className="pt-5">
                                <Title level={3} className='w-[70%]' style={{ color: '#156D86', marginBottom: "0px" }}>Demo:</Title>
                                <div id="demoo">
                                    <Paragraph className="w-[65%] text-balance text-lg mt-1">
                                        Demo não disponível
                                    </Paragraph>
                                </div>
                            </div>

                        </div>
                        <div id="participants" className="pt-5 bg-customBlueGreen">
                            <Title level={3} className='w-[70%] pl-8' style={{ color: '#fafafa', marginBottom: "0px" }}>Authors:</Title>
                            <div id="authors" className=" flex pl-8 pt-8 flex-wrap">
                                {cardGenerator(project.authors)}
                            </div>
                        </div>
                        <Modal open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    Cancel
                                </Button>,
                                <Button key='copy' className="bg-customBlueGreen text-white"
                                    onClick={(e) => { copyText(citationGenerator()) }}
                                    disabled={enableCopyButton}
                                >
                                    {copyButtonText}
                                    {copyButtonText == 'Copy' && <IconCopy style={{ width: '22px', height: "26px" }} />}
                                </Button>,
                            ]}
                        >
                            <ModalCitation text={citationGenerator()} />
                        </Modal>
                    </div>
                    :
                    <div>
                        <Title level={2} className='memberTypeTitle' style={{ marginTop: '10px', marginBottom: '5px' }}>Artigo não encontrado</Title>
                    </div>
                }
            </>
    )
}
