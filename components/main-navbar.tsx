'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import clipboard from 'clipboardy'

import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

import { MapPin , MailIcon , Clock , Phone , Smartphone } from 'lucide-react'

type Props = {}

export default function MainNavbar ( props: Props ) {

    const pathname = usePathname()
    const { toast } = useToast()

    const [ desc , setDesc ] = useState <string> ( 'email' )

    return (
        <>
            <nav id='top' className='bg-white border-gray-100 border-b w-full h-10'>
                <div className='flex items-center justify-center xl:justify-between h-full'>

                    <div className='hidden xl:flex items-center h-full'>
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
                        <button
                            className='flex items-center text-[#111827] text-xs font-medium h-full px-2 transition ease-in-out duration-300 hover:bg-gray-100'
                            onClick={ () => {
                                clipboard.write( '0444824405' )
                                toast ( {
                                    title: 'Phone No.',
                                    description: 'Copied!',
                                    action: (
                                        <ToastAction altText='Close'>Close</ToastAction>
                                    )
                                } )
                            } }
                        >
                            <Phone className='h-4 w-4 mr-2'/>
                            044-482-4405
                        </button>
                        <div className='bg-gray-400 h-1 w-1 mx-1 rounded-full'></div>
                        <button
                            className='flex items-center text-[#111827] text-xs font-medium h-full px-2 transition ease-in-out duration-300 hover:bg-gray-100'
                            onClick={ () => {
                                clipboard.write( '09498854308' )
                                toast ( {
                                    title: 'Mobile No.',
                                    description: 'Copied!',
                                    action: (
                                        <ToastAction altText='Close'>Close</ToastAction>
                                    )
                                } )
                            } }
                        >
                            <Smartphone className='h-4 w-4 mr-2'/>
                            0949-885-4308
                        </button>
                        <div className='bg-gray-400 h-1 w-1 mx-1 rounded-full'></div>
                        <div className='flex items-center text-gray-400 text-xs font-thin h-full px-2'>
                            <Clock className='h-4 w-4 mr-2'/>
                            <div>Monday to Friday 9am to 6pm</div>
                        </div>
                    </div>

                    <div className='flex items-center w-48 h-full'>
                        <Link
                            href='/#faq'
                            className='flex items-center justify-center text-gray-400 text-xs font-medium w-full h-full transition ease-in-out duration-300 hover:bg-gray-100'
                        >
                            FAQ
                        </Link>
                        <Link
                            href='https://www.facebook.com/'
                            className='flex items-center justify-center text-gray-400 w-full h-full transition ease-in-out duration-300 hover:bg-gray-100'
                        >
                            <svg
                                className='h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 14 14'
                            >
                                <path
                                    fill='currentColor'
                                    d='M0 12.923V1.077A1.077 1.077 0 0 1 1.077 0h11.846A1.077 1.077 0 0 1 14 1.077v11.846A1.077 1.077 0 0 1 12.923 14h-3.23V8.895h.764a.657.657 0 0 0 .657-.657V7.41a.655.655 0 0 0-.657-.657h-.722V5.74c0-.905.41-.905.819-.905h.527a.592.592 0 0 0 .464-.193a.625.625 0 0 0 .194-.464v-.796a.67.67 0 0 0-.647-.69H9.854a2.498 2.498 0 0 0-2.574 2.8v1.26h-.69a.657.657 0 0 0-.667.657v.83a.657.657 0 0 0 .668.656h.689V14H1.077A1.077 1.077 0 0 1 0 12.923Z'
                                />
                            </svg>
                        </Link>
                        <Link
                            href='https://twitter.com/?lang=en'
                            className='flex items-center justify-center text-gray-400 w-full h-full transition ease-in-out duration-300 hover:bg-gray-100'
                        >
                            <svg
                                className='h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 16 16'
                            >
                                <path
                                    fill='currentColor'
                                    d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z'
                                />
                            </svg>
                        </Link>
                    </div>

                </div>
            </nav>

            <nav className='sticky top-0 bg-white shadow-black/5 shadow-md drop-shadow-md w-full h-20'>
                <div className='flex items-center justify-between h-full'>
                    
                    <div className='lg:hidden'>
                        <Sheet>
                            <SheetTrigger className='text-gray-500 rounded-full p-5 transition ease-in-out duration-300 hover:text-[#111827] hover:bg-gray-200'>
                                <svg
                                    className='h-7 w-7'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='0.75em'
                                    height='1em'
                                    viewBox='0 0 12 16'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z'
                                        fill='currentColor'
                                    />
                                </svg>
                            </SheetTrigger>
                            <SheetContent side='left'>
                                <SheetHeader>
                                    <SheetTitle></SheetTitle>
                                    <SheetDescription className='pt-5'>

                                        <Accordion type='single' collapsible className='w-full'>
                                            <AccordionItem value='item-1' className='border-none'>
                                                <AccordionTrigger>
                                                    <Link href='/' className={ pathname === '/' ? 'text-sky-700 font-semibold' : 'text-gray-400' }>
                                                        Home
                                                    </Link>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <Link href='#home-about-us' className='flex justify-start w-full py-1'>&gt; About Us</Link>
                                                    <Link href='#services' className='flex justify-start w-full py-1'>&gt; Services</Link>
                                                    <Link href='#why-choose-us' className='flex justify-start w-full py-1'>&gt; Why Choose Us</Link>
                                                    <Link href='#projects' className='flex justify-start w-full py-1'>&gt; Projects</Link>
                                                    <Link href='#faq' className='flex justify-start w-full py-1'>&gt; FAQ</Link>
                                                    <Link href='#qoute' className='flex justify-start w-full py-1'>&gt; Qoute</Link>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value='item-2' className='border-none'>
                                                <AccordionTrigger>
                                                    <Link href='/services' className={ pathname === '/services' ? 'text-sky-700 font-semibold' : 'text-gray-400' }>
                                                        Services
                                                    </Link>
                                                </AccordionTrigger>
                                                <AccordionContent>

                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value='item-3' className='border-none'>
                                                <AccordionTrigger>
                                                    <Link href='/energy-solutions' className={ pathname === '/energy-solutions' ? 'text-sky-700 font-semibold' : 'text-gray-400' }>
                                                        Energy Solutions
                                                    </Link>
                                                </AccordionTrigger>
                                                <AccordionContent>

                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value='item-4' className='border-none'>
                                                <AccordionTrigger>
                                                    <Link href='/projects' className={ pathname === '/projects' ? 'text-sky-700 font-semibold' : 'text-gray-400' }>
                                                        Projects
                                                    </Link>
                                                </AccordionTrigger>
                                                <AccordionContent>

                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value='item-5' className='border-none'>
                                                <AccordionTrigger>
                                                    <Link href='/carbon-platform' className={ pathname === '/carbon-platform' ? 'text-sky-700 font-semibold' : 'text-gray-400' }>
                                                        Carbon Platform
                                                    </Link>
                                                </AccordionTrigger>
                                                <AccordionContent>

                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>

                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <Link href='/' className='lg:hidden'>
                        <Image
                            className='hidden sm:block'
                            src={ `/assets/app/ezp-logo-black.png` }
                            alt='ezp-logo'
                            priority={ true }
                            height={ 150 }
                            width={ 150 }
                        />
                        <Image
                            className='block sm:hidden'
                            src={ `/assets/app/ezpower-logo.png` }
                            alt='ezp-logo'
                            priority={ true }
                            height={ 40 }
                            width={ 40 }
                        />
                    </Link>
                    
                    <div className='hidden lg:flex justify-between w-full h-full'>
                        <div className='flex items-center space-x-3'>
                            <div className='bg-[#111827] flex items-center justify-center h-full w-48'>
                                <Link href='/'>
                                    <Image
                                        src={ `/assets/app/ezp-logo-white.png` }
                                        alt='ezp-logo'
                                        priority={ true }
                                        height={ 150 }
                                        width={ 150 }
                                    />
                                </Link>         
                            </div>
                            <ul className='flex items-center space-x-5'>
                                <li>
                                    <Button asChild variant='ghost'>
                                        <Link href='/' className={ pathname === '/' ? 'text-sky-700' : 'text-gray-400' }>
                                            Home
                                        </Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button asChild variant='ghost'>
                                        <Link href='/services' className={ pathname === '/services' ? 'text-sky-700' : 'text-gray-400' }>
                                            Services
                                        </Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button asChild variant='ghost'>
                                        <Link href='/energy-solutions' className={ pathname === '/energy-solutions' ? 'text-sky-700' : 'text-gray-400' }>
                                            Energy Solutions
                                        </Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button asChild variant='ghost'>
                                        <Link href='/projects' className={ pathname === '/projects' ? 'text-sky-700' : 'text-gray-400' }>
                                            Projects
                                        </Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button asChild variant='ghost'>
                                        <Link href='/carbon-platform' className={ pathname === '/carbon-platform' ? 'text-sky-700' : 'text-gray-400' }>
                                            Carbon Platform
                                        </Link>
                                    </Button>
                                </li>
                            </ul>
                        </div>

                        <div className='hidden xl:flex items-center'>
                            <Link
                                href='/assets/vcard/contact-info.vcf'
                                className='flex items-center justify-center bg-sky-700 text-white h-full w-20 px-1 transition ease-in-out duration-300 hover:bg-sky-600'
                            >
                                <svg
                                    className='h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 16 16'
                                >
                                    <g fill='currentColor'>
                                        <path d='M5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5' />
                                        <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z' />
                                    </g>
                                </svg>
                            </Link>

                            <div className='flex items-center justify-center bg-[#111827] h-full w-48'>
                                <Link href='/' className='text-white font-medium'>
                                    Get a qoute
                                </Link>         
                            </div>
                        </div>
                    </div>
                    
                    <div className='xl:hidden'>
                        <Sheet>
                            <SheetTrigger className='text-gray-500 rounded-full p-5 transition ease-in-out duration-300 hover:text-[#111827] hover:bg-gray-200'>
                                <svg
                                    className='h-7 w-7'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em' 
                                    viewBox='0 0 24 24'
                                >
                                    <path fill='currentColor' d='m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z' />
                                </svg>
                            </SheetTrigger>
                            <SheetContent side='right'>
                                <SheetHeader>
                                    <SheetTitle></SheetTitle>
                                    <SheetDescription className='flex items-center justify-center pt-5'>
                                        <div className='grid grid-cols-3 gap-3 sm:gap-5 w-max'>
                                            <div className='col-span-3 relative flex items-center justify-center bg-gray-50 text-[#111827] h-16 sm:h-20 w-full rounded-xl'>
                                                <div className='text-[#111827] text-xs font-medium'>
                                                    {
                                                            desc === 'phone'
                                                                ?   '044-482-4405'
                                                        :   desc === 'smartphone'
                                                                ?   '0949-885-4308'
                                                        :   'info@ezpower.tech'
                                                    }
                                                </div>
                                                <div className='absolute bottom-2 right-3'>
                                                    <button
                                                        type='button'
                                                        onClick={ ( e: any ) => {
                                                            
                                                            switch ( desc ) {

                                                                default:
                                                                    clipboard.write( 'info@ezpower.tech' )
                                                                    toast ( {
                                                                        title: 'Email',
                                                                        description: 'Copied!',
                                                                        action: (
                                                                            <ToastAction altText='Close'>Close</ToastAction>
                                                                        )
                                                                    } )
                                                                break

                                                                case 'phone':
                                                                    clipboard.write( '0444824405' )
                                                                    toast ( {
                                                                        title: 'Phone No.',
                                                                        description: 'Copied!',
                                                                        action: (
                                                                            <ToastAction altText='Close'>Close</ToastAction>
                                                                        )
                                                                    } )
                                                                break

                                                                case 'smartphone':
                                                                    clipboard.write( '09498854308' )
                                                                    toast ( {
                                                                        title: 'Mobile No.',
                                                                        description: 'Copied!',
                                                                        action: (
                                                                            <ToastAction altText='Close'>Close</ToastAction>
                                                                        )
                                                                    } )
                                                                break

                                                            }

                                                        } }
                                                    >
                                                        <svg
                                                            className='h-4 w-4'
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='1em'
                                                            height='1em'
                                                            viewBox='0 0 24 24'
                                                        >
                                                            <path fill='currentColor' d='M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm-4 4q-.825 0-1.412-.587T3 20V7q0-.425.288-.712T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22z' />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                type='button'
                                                onClick={ ( e: any ) => setDesc( 'email' ) }
                                                className='flex items-center justify-center bg-gray-100 text-[#111827] h-16 sm:h-20 w-16 sm:w-20 rounded-xl transition ease-in-out duration-300 hover:bg-[#111827] hover:text-white'
                                            >
                                                <MailIcon className='h-7 w-7'/>
                                            </button>
                                            <button
                                                type='button'
                                                onClick={ ( e: any ) => setDesc( 'phone' ) }
                                                className='flex items-center justify-center bg-gray-100 text-[#111827] h-16 sm:h-20 w-16 sm:w-20 rounded-xl transition ease-in-out duration-300 hover:bg-[#111827] hover:text-white'
                                            >
                                                <Phone className='h-7 w-7'/>
                                            </button>
                                            <button
                                                type='button'
                                                onClick={ ( e: any ) => setDesc( 'smartphone' ) }
                                                className='flex items-center justify-center bg-gray-100 text-[#111827] h-16 sm:h-20 w-16 sm:w-20 rounded-xl transition ease-in-out duration-300 hover:bg-[#111827] hover:text-white'
                                            >
                                                <Smartphone className='h-7 w-7'/>
                                            </button>
                                            <Link
                                                href='https://www.google.com/maps/search/?api=1&query=14.8106425917393,120.96820430088181'
                                                className='flex items-center justify-center bg-red-100 text-red-600 h-16 sm:h-20 w-16 sm:w-20 rounded-xl transition ease-in-out duration-300 hover:bg-red-200'
                                            >
                                                <MapPin className='h-7 w-7'/>
                                            </Link>
                                            <div className='col-span-2 flex items-center justify-center bg-gray-50 text-gray-400 h-16 sm:h-20 w-full rounded-xl'>
                                                <Clock className='h-7 w-7 mr-1 sm:mr-3'/>
                                                <div className='grid'>
                                                    <div className='text-[#111827] text-xs'>Monday to Friday</div>
                                                    <div className='text-[#111827] text-xs'>9am to 6pm</div>
                                                </div>
                                            </div>
                                            <Link
                                                href='/'
                                                className='col-span-3 flex items-center justify-center bg-[#111827] text-white font-medium h-16 sm:h-20 w-full rounded-xl transition ease-in-out duration-300 hover:bg-[#111716]'
                                            >
                                                Get a qoute
                                            </Link>
                                            <Link
                                                href='/assets/vcard/contact-info.vcf'
                                                className='col-span-3 flex items-center justify-center bg-sky-700 text-white font-medium h-16 sm:h-20 w-full rounded-xl transition ease-in-out duration-300 hover:bg-sky-800'
                                            >
                                                <svg
                                                    className='h-6 w-6 mr-3'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='1em'
                                                    height='1em'
                                                    viewBox='0 0 16 16'
                                                >
                                                    <g fill='currentColor'>
                                                        <path d='M5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5' />
                                                        <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z' />
                                                    </g>
                                                </svg>
                                                <div>Download our vcard</div>
                                            </Link>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </nav>
        </>
    )

}
