import { useEffect, useRef } from 'react'
// @ts-ignore
import Typed from 'typed.js';
import { typed } from '../Hooks/TypedWithDestroy';


interface TypedWithDestroy extends Typed {
    destroy(): void;
}

const Cli = () => {

    const el = useRef<HTMLDivElement>(null);
    const info = useRef<HTMLDivElement>(null);

    let typedInstance1: TypedWithDestroy | undefined;
    let typedInstance2: TypedWithDestroy | undefined;

    useEffect(() => {
        const command='whoami'
        const value='I am a skilled ethical hacker and web developer who has experience participating in CTFs and bug bounty programs. I possess the technical knowledge necessary to identify vulnerabilities in web applications and systems and have the expertise required to exploit them to improve security. As a web developer, I am well-versed in web development frameworks, programming languages, and industry tools. Cybersecurity is my passion, and I continuously work to improve my skills through practice and participation in various events and programs. I adhere to the principles of responsible disclosure and have a strong ethical foundation when identifying and reporting vulnerabilities.'
        typedInstance1 = typed(el, command,50, () => {
            typedInstance2 = typed(info, value,5);
        });

        return () => {
            if (typedInstance1) {
                typedInstance1.destroy();
            }
            if (typedInstance2) {
                typedInstance2.destroy();
            }
        };
    }, []);

    return (
        <div>
            <div className='h-full min-h-48 md:h-96 my-5 sm:mx-48 bg-slate-800 shadow-2xl'>
                <div className='flex h-8 bg-slate-700 justify-between p-1 text-white'>
                    <div className='justify-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                        </svg>

                    </div>

                    <div className='flex gap-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='p-2'>
                    <h1 className='font-bold text-2xl'><strong className='text-blue-600'>aspasht$</strong><span ref={el} className='text-gray-400'></span></h1>
                    <p className='text-xl my-2 text-gray-400 font-rootkit'><span ref={info}></span></p>
                </div>
            </div>
        </div>
    )
}

export default Cli;