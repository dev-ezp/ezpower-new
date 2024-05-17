'use client'

import Link from 'next/link'

type Props = {}

export default function PageNotFound ( props: Props ) {

    return  <>
                <div className='fixed top-0 left-0 right-0 bottom-0'>
                    <div className='flex items-center justify-center h-full w-full'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-gray-600 text-8xl font-semibold'>404</h1>
                            
                            <div className='my-2'></div>
                            
                            <div className='bg-yellow-400 text-white text-lg flex items-center rounded-full py-1 px-5'>
                                <svg
                                    className='h-8 w-8'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        fillRule='evenodd'
                                        d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829c-.092.095-.18.183-.264.267a6.666 6.666 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814c.07-.07.136-.135.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                <div className='mx-1'></div>
                                <h2 className='font-semibold'>Page not found</h2>
                            </div>
                                                        
                            <h2 className='text-gray-600 font-thin my-5'>We couldn&apos;t find this page.</h2>
                            
                            <div className='bg-gradient-to-r from-yellow-400 to-yellow-300 p-1 w-16'></div>

                            <div className='my-3'></div>
                            
                            <Link href='/' className='text-gray-300 outline-none cursor-pointer transition ease-in-out duration-300 hover:text-yellow-400'>
                                <svg
                                    className='h-7 w-7'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='M4 21v-9.375L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.575l-1.8-1.35V21zm4-6q-.425 0-.712-.288T7 14t.288-.712T8 13t.713.288T9 14t-.288.713T8 15m4 0q-.425 0-.712-.288T11 14t.288-.712T12 13t.713.288T13 14t-.288.713T12 15m4 0q-.425 0-.712-.288T15 14t.288-.712T16 13t.713.288T17 14t-.288.713T16 15'
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </>

}
