"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Typography } from "antd";
import { IconBrandLinkedin, IconBrandInstagram, IconMail } from '@tabler/icons-react';
import { LineChart, Line, Tooltip } from 'recharts';
import userImage from '../../../public/user.png';

const { Title, Paragraph } = Typography;


import allMembers from "../members/membrosinfo.json";

export default function MemberViewPage() {
    const searchParams = useSearchParams();
    const memberID = searchParams.get("memberID");

    const [member, setMember] = useState(null);

    useEffect(() => {
        if (memberID) {
            const foundMember = allMembers.find(m => m.id === memberID);
            setMember(foundMember);
        }
    }, [memberID]);

    if (!member) {
        return (
            <div className="m-10">
                <Title level={2}>Houve um problema na exibição do recurso</Title>
            </div>
        );
    }

    const graphicData = member?.projects?.map((project, index) => ({
        ano: 2020 + index,
        pubs: parseInt(project.value, 10) || 1
    }));




    return (
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
                    <div id="description">
                        <Paragraph className="text-xl text-justify">
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
                        padding: '25px',
                        borderRadius: '30px'
                    }}>
                        <LineChart width={400} height={200} data={graphicData}>
                            <Tooltip
                                content={({ payload }) => {
                                    if (payload?.length) {
                                        const { ano, pubs } = payload[0].payload;
                                        return (
                                            <div style={{
                                                backgroundColor: '#fff',
                                                border: '1px solid #ccc',
                                                padding: '10px',
                                                pointerEvents: 'auto'
                                            }}>
                                                <p><strong>Year:</strong> {ano}</p>
                                                <div>
                                                    <p><strong>Publications:</strong></p>
                                                    {Array.isArray(pubs) ? (
                                                        <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                                            {pubs.map((pub, index) => (
                                                                <li key={index}>{pub}</li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p>{pubs}</p>
                                                    )}
                                                </div>
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
                <div id="projectsContainer" className="mb-10">
                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                        {member.projects.map(p => (
                            <li key={p.value} style={{ marginBottom: '8px' }}>
                                <a
                                    href={`/articleView?articleID=${p.value}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#156D86', textDecoration: 'underline' }}
                                >
                                    {p.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
