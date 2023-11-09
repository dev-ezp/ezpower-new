'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import clipboard from 'clipboardy'

import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

import { Facebook , Twitter , MapPin , MailIcon , Clock , Phone , Smartphone } from 'lucide-react'

type Props = {}

export default function MainNavbar ( props: Props ) {

    const [ toggle , setToggle ] = useState <boolean> ( false )
    const { toast } = useToast()

    return (
        <>
            <nav id='top' className='bg-white border-gray-100 border-b w-full h-10'>
                <div className='flex items-center justify-between h-full'>

                    <div className='flex items-center h-full'>
                        <Link
                            className='flex items-center text-[#111827] text-xs font-medium h-full px-2 transition ease-in-out duration-300 hover:bg-gray-100'
                            href='https://www.google.com/maps/search/?api=1&query=14.8106425917393,120.96820430088181'
                        >                         
                            <MapPin className='h-4 w-4 mr-2'/>
                            125 Pipino Street, Barangay Tamana, Santa Maria, Bulacan.
                        </Link>
                        <div className='bg-gray-400 h-1 w-1 mx-1 rounded-full'></div>
                        <button
                            className='flex items-center text-[#111827] text-xs font-medium h-full px-2 transition ease-in-out duration-300 hover:bg-gray-100'
                            onClick={ () => {
                                clipboard.write( 'info@ezpower.tech' )
                                toast ( {
                                    title: 'Email',
                                    description: 'Copied!',
                                    action: (
                                        <ToastAction altText='Close'>Close</ToastAction>
                                    )
                                } )
                            } }
                        >
                            <MailIcon className='h-4 w-4 mr-2'/>
                            info@ezpower.tech
                        </button>
                        <div className='bg-gray-400 h-1 w-1 mx-1 rounded-full'></div>
                        <div className='flex items-center text-gray-400 text-xs font-thin h-full px-2'>
                            <Clock className='h-4 w-4 mr-2'/>
                            <div>Mon - Fri 9am to 6pm</div>
                        </div>
                    </div>

                    <div className='flex items-center w-48 h-full'>
                        <Link
                            href='#faq'
                            className='flex items-center justify-center text-gray-400 text-xs font-medium w-full h-full transition ease-in-out duration-300 hover:bg-gray-100'
                        >
                            FAQ
                        </Link>
                        <Link
                            href='https://www.facebook.com'
                            className='flex items-center justify-center text-gray-400 w-full h-full transition ease-in-out duration-300 hover:bg-gray-100'
                        >
                            <Facebook className='h-4 w-4'/>
                        </Link>
                        <Link
                            href='https://www.twitter.com'
                            className='flex items-center justify-center text-gray-400 w-full h-full transition ease-in-out duration-300 hover:bg-gray-100'
                        >
                            <Twitter className='h-4 w-4'/>
                        </Link>
                    </div>

                </div>
            </nav>

            <nav className='sticky top-0 bg-white shadow-black/5 shadow-md drop-shadow-md w-full h-20'>
                <div className='flex items-center justify-between h-full'>
                    
                    <div className='flex items-center space-x-3 h-full'>
                        <div className='bg-[#111827] flex items-center justify-center h-full w-48'>
                            <Link href='/'>
                                <Image
                                    src={ `/assets/ezp-logo-white.png` }
                                    alt='ezp-logo'
                                    height={ 150 }
                                    width={ 150 }
                                />
                            </Link>         
                        </div>
                        <ul className='flex items-center space-x-5'>
                            <li>
                                <Button asChild variant='ghost'>
                                    <Link href='/' className='text-gray-400'>
                                        Home
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button asChild variant='ghost'>
                                    <Link href='/' className='text-gray-400'>
                                        Services
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button asChild variant='ghost'>
                                    <Link href='/' className='text-gray-400'>
                                        Energy Solutions
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button asChild variant='ghost'>
                                    <Link href='/' className='text-gray-400'>
                                        Projects
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button asChild variant='ghost'>
                                    <Link href='/' className='text-gray-400'>
                                        Carbon Platform
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div className='flex items-center h-full'>
                        <div
                            onClick={ ( e: any ) => {

                                if ( e.target.id === 'switch' ) {
                                    setToggle( !toggle )
                                } else {
                                    clipboard.write( toggle ? '09498854308' : '0444824405' )
                                    toast ( {
                                        title: toggle ? 'Mobile no.' : 'Telephone no.',
                                        description: 'Copied!',
                                        action: (
                                            <ToastAction altText='Close'>Close</ToastAction>
                                        )
                                    } )
                                }

                            } }
                            className='relative flex items-center justify-start pl-5 text-gray-900 text-lg font-medium h-full w-52 cursor-pointer transition ease-in-out duration-300 hover:bg-gray-100'
                        >
                            <button id='switch' className='absolute top-0 bottom-0 right-0 bg-sky-700 text-white px-1 transition ease-in-out duration-300 hover:bg-sky-600'>
                                <svg
                                    id='switch'
                                    className='h-4 w-4'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        id='switch'
                                        fill='currentColor'
                                        d='M5.825 16L7.7 17.875q.275.275.275.688t-.275.712q-.3.3-.713.3t-.712-.3L2.7 15.7q-.15-.15-.213-.325T2.426 15q0-.2.063-.375T2.7 14.3l3.6-3.6q.3-.3.7-.287t.7.312q.275.3.288.7t-.288.7L5.825 14H12q.425 0 .713.288T13 15q0 .425-.288.713T12 16H5.825Zm12.35-6H12q-.425 0-.713-.288T11 9q0-.425.288-.713T12 8h6.175L16.3 6.125q-.275-.275-.275-.688t.275-.712q.3-.3.713-.3t.712.3L21.3 8.3q.15.15.212.325t.063.375q0 .2-.063.375T21.3 9.7l-3.6 3.6q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7L18.175 10Z'
                                    />
                                </svg>
                            </button>
                            {
                                toggle
                                    ?   <>
                                            <div className='flex items-center'>
                                                <Smartphone className='text-sky-700 h-6 w-6 mr-1' />
                                                0949 885 4308
                                            </div>
                                        </>
                                    :   <>
                                            <div className='flex items-center'>
                                                <Phone className='text-sky-700 h-6 w-6 mr-1' />
                                                044 482 4405
                                            </div>
                                        </>
                            }
                        </div>
                        <div className='flex items-center justify-center bg-[#111827] h-full w-48'>
                            <Link href='/vcard/contact-info.vcf' className='text-white font-medium'>
                                Get a qoute
                            </Link>         
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )

}
