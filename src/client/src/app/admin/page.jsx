"use client"
import '@ant-design/v5-patch-for-react-19';
import React from 'react';
import { useEffect, useState, Suspense } from "react";
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { Input, Typography, Radio, Button } from 'antd';
const { Title, Text } = Typography;

import { auth } from '../../../../server/Auth/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function loginPage() {

    const [userCredentials, setUserCredentials] = useState(null)




    function login(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                alert("Usuário Logado")
                console.log(userCredential);
                // ...
            })
            .catch((error) => {
                alert("Usuário não Logado")
            });
    }


    return (
        <>
            <div className="flex items-center justify-center flex-nowrap bg-[#156D86] h-full">
                <div id="loginForm" className='w-[400px] h-[450px] bg-[#f2f2f2] flex flex-col items-center justify-center p-8 rounded-md shadow-2xl'>
                    <div id='loginText' className='mb-[50px]'>
                        <Title level={1} style={{ color: '#156D86', marginBottom: "0px" }}>Bem vindo!</Title>
                        <Text style={{ color: '#999999' }}>Insira suas credenciais de acesso</Text>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[385px] gap-3 mb-1'>
                        <Input placeholder="User email" 
                        prefix={<UserOutlined />} 
                        className='w-4/5' 
                        onChange={e => {
                                setUserCredentials({
                                    email: e.target.value,
                                    password: userCredentials?.password || "",
                                });
                            }}
                        />
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="User password"
                            className='w-4/5'
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            onChange={e => {
                                setUserCredentials({
                                    email: userCredentials?.email || "",
                                    password: e.target.value
                                });
                            }}
                        />
                    </div>
                    <div id='loginOptions' className='flex justify-between w-[308px] items-center mb-8'>
                        <Radio style={{ color: '#999999' }}>Remember me</Radio>
                        <Button type="link" className='p-0'>Forgot my password</Button>
                    </div>
                    <Button
                        type="primary"
                        className='bg-[#156D86] w-[280px]'
                        onClick={(e) => {
                            login(userCredentials.email, userCredentials.password);
                            // console.log(userCredentials);
                        }}>Logar</Button>
                </div>
            </div>
        </>
    )
}