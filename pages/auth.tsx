import React from "react";
import Input from "@/components/Input";
import { useState } from "react";
import { useCallback } from "react";

import { GoMarkGithub } from 'react-icons/go';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from "next/router";

const Auth = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const router = useRouter()

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, []);

    return (
        <div className="relative flex justify-center w-full h-full lg:bg-[url('/images/authbg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="self-center w-full lg:w-3/5 lg:h-2/3 lg:bg-[url('/images/authbg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover rounded-xl shadow-lg">
                <div className="flex w-full min-h-screen lg:min-h-0 lg:h-auto bg-slate-900 lg:bg-black lg:bg-opacity-50 rounded-xl">
                    <div className="w-full h-full p-8 lg:p-16">
                        <h2 className="text-4xl font-semibold text-white opacity-100">{variant === 'login' ? 'Sign in' : 'Register'}</h2>
                        <hr className="mt-4 mb-12 "/>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input id="name" type="text" label="Username" value={name} onChange={(e: any) => setName(e.target.value)}/>
                            )}
                            <Input id="email" type="email" label="Email" value={email} onChange={(e: any) => setEmail(e.target.value)}/>
                            <Input id="password" type="password" label="Password" value={password} onChange={(e: any) => setPassword(e.target.value)}/>
                        </div>
                        <button onClick={() => router.push('/choose')} className="px-4 py-3 mt-10 text-xl font-semibold bg-white rounded-md text-slate-900 hover:bg-gray-300">
                            {variant === 'login' ? 'Login' : 'Sign Up'}
                        </button>
                        <p className="mt-12 text-gray-300">
                        {variant === 'login' ? 'First time using Quizzical?' : 'Already have an account?'}
                        <span onClick={toggleVariant} className="ml-1 text-white cursor-pointer hover:underline">
                            {variant === 'login' ? 'Create an account' : 'Login'}
                        </span>
                        .
                        </p>
                        <div className="flex items-center content-center justify-between h-full max-w-sm p-10 m-auto lg:hidden">
                                <div className="flex flex-col items-center">
                                    <div onClick={() => router.push('/choose')} className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80">
                                        <GoMarkGithub size={32}/>
                                    </div>
                                    <p className="text-xl font-semibold text-white">Github</p>
                                </div>
                                <p className="text-xl font-semibold text-white">Or</p>
                                <div className="flex flex-col items-center">
                                    <div onClick={() => router.push('/choose')} className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80">
                                        <FcGoogle size={32} />
                                    </div>
                                    <p className="text-xl font-semibold text-white">Google</p>
                                </div>
                            </div>
                    </div>
                    <div className="hidden w-full h-full backdrop-blur-sm lg:block">
                        <div className="p-16">
                            <h2 className="text-3xl font-semibold text-center text-white">You can also sign {variant === 'login' ? 'in' : 'up'} using</h2>
                            
                            <div className="flex items-center content-center justify-between h-full p-10">
                                <div className="flex flex-col items-center">
                                    <div onClick={() => router.push('/choose')} className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80">
                                        <GoMarkGithub size={32}/>
                                    </div>
                                    <p className="text-xl font-semibold text-white">Github</p>
                                </div>
                                <p className="text-xl font-semibold text-white">Or</p>
                                <div className="flex flex-col items-center">
                                    <div onClick={() => router.push('/choose')} className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80">
                                        <FcGoogle size={32} />
                                    </div>
                                    <p className="text-xl font-semibold text-white">Google</p>
                                </div>
                            </div>
                            <hr />
                            <div className="w-3/4 m-auto mt-10 text-center text-gray-100">
                                <p className="text-red-300">None of these options work at all atm, its just for looks (*v*)</p>
                                <p className="pt-4">Anyhow, Welcome to Quizzical where you can answear questions and do trivias. Have fun!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Auth;
