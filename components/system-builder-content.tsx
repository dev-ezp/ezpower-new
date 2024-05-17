'use client'

import { useState } from 'react'
import SystemBuilderForm1 from './system-builder-form-1'
import SystemBuilderForm2 from './system-builder-form-2'

type Props = {}

export default function SystemBuilderContent ( props: Props ) {

    const [ steps , setSteps ] = useState <number> ( 1 ) 

    return (
        <div className='grid xl:flex items-center'>

            <div className='relative z-10 bg-[url("/assets/content/system-builder/sa-01.png")] bg-center bg-[length:1920px_1080px] bg-fixed bg-no-repeat flex items-center justify-center h-[580px] lg:h-[720px] w-full xl:w-[60%] pb-12'>
                <div className='absolute inset-0 flex items-center bg-black/50 h-full w-full'>

                    <div className={ `
                        w-auto mx-5 py-10
                        md:w-2/3 md:mx-auto md:py-20
                    ` }>
                        <div className='flex flex-col space-y-5'>
                            <h1 className='text-white font-thin text-4xl sm:text-5xl lg:text-6xl uppercase'>building my own <span className='font-bold'>energy system</span></h1>   
                            <div className='bg-white h-4 sm:h-5 w-4 sm:w-5'></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-white h-auto lg:h-[720px] w-full xl:w-[40%] overflow-hidden'>

                <div className='relative grid md:flex items-start md:items-center h-full p-5 md:p-20'>
                    <button
                        onClick={ () => setSteps( steps - 1 ) }
                        className='hidden md:block absolute left-4 text-sky-700 outline-none cursor-auto p-1 transition ease-in-out duration-300 hover:scale-125 focus:scale-125 disabled:opacity-75 disabled:text-gray-300 disabled:hover:scale-100 disabled:focus:scale-100'
                        disabled={ steps === 1 ? true : false }
                    >
                        <svg
                            className='h-10 w-10'
                            xmlns='http://www.w3.org/2000/svg'
                            width='1em'
                            height='1em'
                            viewBox='0 0 24 24'
                        >
                            <path
                                fill='currentColor'
                                d='M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z'
                            />
                        </svg>
                    </button>
                    <div className='min-h-[420px]'>
                        {
                                steps === 1
                                    ?   <SystemBuilderForm1 />
                            :   steps === 2
                                    ?   <SystemBuilderForm2 />
                            :   <></>
                        }
                    </div>
                    <button
                        onClick={ () => setSteps( steps + 1 ) }
                        className='hidden md:block absolute right-4 text-sky-700 outline-none cursor-auto p-1 transition ease-in-out duration-300 hover:scale-125 focus:scale-125 disabled:opacity-75 disabled:text-gray-300 disabled:hover:scale-100 disabled:focus:scale-100'
                        disabled={ steps === 2 ? true : false }
                    >
                        <svg
                            className='h-10 w-10'
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
                            />
                        </svg>
                    </button>
                    <div className='flex md:hidden items-center justify-center my-5'>
                        <button
                            onClick={ () => setSteps( steps - 1 ) }
                            className='text-sky-700 outline-none cursor-auto p-1 transition ease-in-out duration-300 hover:scale-125 focus:scale-125 disabled:opacity-75 disabled:text-gray-300 disabled:hover:scale-100 disabled:focus:scale-100'
                            disabled={ steps === 1 ? true : false }
                        >
                            <svg
                                className='h-10 w-10'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='currentColor'
                                    d='M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z'
                                />
                            </svg>
                        </button>
                        <button
                            onClick={ () => setSteps( steps + 1 ) }
                            className='text-sky-700 outline-none cursor-auto p-1 transition ease-in-out duration-300 hover:scale-125 focus:scale-125 disabled:opacity-75 disabled:text-gray-300 disabled:hover:scale-100 disabled:focus:scale-100'
                            disabled={ steps === 2 ? true : false }
                        >
                            <svg
                                className='h-10 w-10'
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )

}
