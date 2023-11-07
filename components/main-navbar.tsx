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
            <nav className='bg-white border-gray-100 border-b w-full h-10'>
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
                        <div className='flex items-center justify-center text-gray-900 font-medium h-full w-52 cursor-pointer transition ease-in-out duration-300 hover:bg-gray-100'>
                            <button onClick={ () => setToggle( !toggle ) }>  
                                {
                                    toggle
                                        ?   <Smartphone className='h-4 w-4 mr-2'/>
                                        :   <Phone className='h-5 w-5 mr-2'/>
                                }
                            </button>
                            <button
                                className='w-max'
                                onClick={ () => {
                                    clipboard.write( toggle ? '09498854308' : '0444824405' )
                                    toast ( {
                                        title: toggle ? 'Mobile no.' : 'Telephone no.',
                                        description: 'Copied!',
                                        action: (
                                            <ToastAction altText='Close'>Close</ToastAction>
                                        )
                                    } )
                                } }
                            >
                                {
                                    toggle
                                        ?   '0949 885 4308'
                                        :   '044 482 4405'
                                }
                            </button>

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
