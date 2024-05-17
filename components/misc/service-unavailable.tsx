'use client'

import Link from 'next/link'

type Props = {}

export default function ServiceUnavailable ( props: Props ) {

    return  <>
                <div className='fixed top-0 left-0 right-0 bottom-0'>
                    <div className='flex items-center justify-center h-full w-full'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-gray-600 text-8xl font-semibold'>503</h1>
                            
                            <div className='my-2'></div>
                            
                            <div className='bg-blue-500 text-white text-lg flex items-center rounded-full py-1 px-5'>
                                <svg
                                    className='h-8 w-8'
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 16q.425 0 .713-.288T13 15t-.288-.712T12 14t-.712.288T11 15t.288.713T12 16m-1-3h2V8h-2zm-1.75 9l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1-8"
                                    />
                                </svg>
                                <div className='mx-1'></div>
                                <h2 className='font-semibold'>Service unavailable</h2>
                            </div>
                            
                            <h2 className='text-gray-600 font-thin my-5'>We are currently under maintenance.</h2>
                        
                            <div className='bg-gradient-to-r from-blue-500 to-blue-400 p-1 w-16'></div>
                            
                            <div className='my-3'></div>

                            <Link href='https://www.google.com' className='text-gray-300 outline-none cursor-pointer transition ease-in-out duration-300 hover:text-blue-500'>
                                <svg
                                    className='h-7 w-7'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 56 56'
                                >
                                    <path
                                        fill='currentColor'
                                        fillRule='evenodd'
                                        d='M28.458 5c6.167 0 11.346 2.2 15.368 5.804l.323.295l-6.62 6.464c-1.695-1.59-4.666-3.493-9.07-3.493c-6.204 0-11.47 4.093-13.372 9.749c-.47 1.46-.756 3.023-.756 4.64c0 1.615.287 3.18.782 4.639c1.877 5.656 7.142 9.748 13.345 9.748c3.347 0 5.928-.886 7.881-2.176l.251-.17l.307-.222c2.813-2.108 4.144-5.084 4.46-7.169l.03-.22h-12.93v-8.705h22.025c.339 1.46.495 2.867.495 4.795c0 7.142-2.554 13.163-6.985 17.255c-3.884 3.597-9.201 5.682-15.535 5.682c-9.031 0-16.85-5.102-20.772-12.57l-.184-.358l-.222-.457A23.45 23.45 0 0 1 5 28.458c0-3.6.827-7.01 2.28-10.073l.222-.457l.184-.357C11.608 10.1 19.426 5 28.458 5'
                                    />
                                </svg>
                            </Link>

                        </div>
                    </div>
                </div>
            </>

}
