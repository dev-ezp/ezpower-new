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

type Props = {}

export default function MainNavbar ( props: Props ) {

    const pathname = usePathname()
    const { toast } = useToast()

    if ( pathname === '/connect' ) {

        return ( <></> )

    }

    return (
        <>
            <nav id='top' className='bg-white border-gray-100 border-b w-full h-8 sm:h-10'>
                <div className='flex items-center justify-center xl:justify-between h-full'>

                    <div className='hidden xl:flex items-center h-full'>
                        <Link
                            className='flex items-center text-[#111827] text-xs font-medium h-full px-2 transition ease-in-out duration-300 hover:bg-gray-100'
                            href='https://www.google.com/maps/search/?api=1&query=14.8106425917393,120.96820430088181'
                        >                         
                            <svg
                                className='h-4 w-4 mr-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 20 20'
                            >
                                <path
                                    fill='currentColor'
                                    d='M10 0a7.65 7.65 0 0 0-8 8c0 2.52 2 5 3 6s5 6 5 6s4-5 5-6s3-3.48 3-6a7.65 7.65 0 0 0-8-8m0 11.25A3.25 3.25 0 1 1 13.25 8A3.25 3.25 0 0 1 10 11.25'
                                />
                            </svg>
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
                            <svg
                                className='h-4 w-4 mr-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='currentColor'
                                    d='M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15'
                                />
                            </svg>
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
                            <svg
                                className='h-4 w-4 mr-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='currentColor'
                                    d='M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3'
                                />
                            </svg>
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
                            <svg
                                className='h-4 w-4 mr-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='currentColor'
                                    d='M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z'
                                />
                            </svg>
                            0949-885-4308
                        </button>
                        <div className='bg-gray-400 h-1 w-1 mx-1 rounded-full'></div>
                        <div className='flex items-center text-gray-400 text-xs font-thin h-full px-2'>
                            <svg
                                className='h-5 w-5 mr-1'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='currentColor'
                                    d='M12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13t.713-3.512t1.924-2.85t2.85-1.925T12 4t3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75zM12 20q2.925 0 4.963-2.037T19 13t-2.037-4.962T12 6T7.038 8.038T5 13t2.038 4.963T12 20'
                                />
                            </svg>
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
                            href='https://www.facebook.com/profile.php?id=61556786006837'
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
                            href='/'
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

            <nav className='sticky top-0 bg-white shadow-black/5 shadow-md drop-shadow-md w-full h-16 sm:h-20'>
                <div className='flex items-center justify-between h-full'>
                    
                    <div className='lg:hidden'>
                        <Sheet>
                            <SheetTrigger className='ml-2 text-gray-500 rounded p-3 transition ease-in-out duration-300 hover:text-[#111827] hover:bg-gray-200'>
                                <svg
                                    className='h-6 w-6'
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
                                    <SheetTitle>
                                        <div className='flex items-center justify-center space-x-1'>
                                            <div className='relative h-7 w-7'>
                                                <Image
                                                    src={ `/assets/app/ezpower-logo.png` }
                                                    alt='ezp-logo'
                                                    fill={ true }
                                                    priority={ true }
                                                />
                                            </div>
                                            <div className='text-gray-950 font-bold'>EZPOWER</div>
                                        </div>
                                    </SheetTitle>
                                    <SheetDescription className='pt-5'>

                                        <Accordion type='single' collapsible className='w-full'>
                                            <AccordionItem value='item-1' className='border-none text-left py-4'>
                                                <Link href='/' className={ `flex items-center no-underline ${ pathname === '/' ? 'text-sky-700 font-semibold' : 'text-gray-400' }` }>
                                                    <svg
                                                        className='h-5 w-5 mr-2'
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
                                                    Home
                                                </Link>
                                                <div className='grid gap-1 mt-5'>                                                     
                                                    <Link href='/#home-about-us' className='flex justify-start w-full py-1'>
                                                        - About Us
                                                    </Link>
                                                    <Link href='/#services' className='flex justify-start w-full py-1'>
                                                        - Services
                                                    </Link>
                                                    <Link href='/#why-choose-us' className='flex justify-start w-full py-1'>
                                                        - Why Choose Us
                                                    </Link>
                                                    <Link href='/#projects' className='flex justify-start w-full py-1'>
                                                        - Projects
                                                    </Link>
                                                    <Link href='/#faq' className='flex justify-start w-full py-1'>
                                                        - FAQ
                                                    </Link>
                                                    <Link href='/#qoute' className='flex justify-start w-full py-1'>
                                                        - Qoute
                                                    </Link>
                                                </div>
                                            </AccordionItem>
                                            <AccordionItem value='item-2' className='border-none text-left py-4'>
                                                <Link href='/services' className={ `flex items-center no-underline ${ pathname === '/services' ? 'text-sky-700 font-semibold' : 'text-gray-400' }` }>
                                                    <svg
                                                        className='h-5 w-5 mr-2'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='1em'
                                                        height='1em'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path
                                                            fill='currentColor'
                                                            d='M19 9q-1.425 0-2.475-.85T15.125 6H8.85q-.275 1.05-1.037 1.813T6 8.85v6.275q1.3.35 2.15 1.4T9 19q0 1.65-1.175 2.825T5 23t-2.825-1.175T1 19q0-1.425.85-2.475t2.15-1.4V8.85q-1.3-.35-2.15-1.4T1 5q0-1.65 1.175-2.825T5 1q1.4 0 2.45.85T8.85 4h6.275q.35-1.3 1.4-2.15T19 1q1.65 0 2.825 1.175T23 5t-1.175 2.825T19 9m0 14q-1.65 0-2.825-1.175T15 19t1.175-2.825T19 15t2.825 1.175T23 19t-1.175 2.825T19 23'
                                                        />
                                                    </svg>
                                                    Services
                                                </Link>
                                            </AccordionItem>
                                            <AccordionItem value='item-3' className='border-none text-left py-4'>
                                                <Link href='/energy-solutions' className={ `flex items-center no-underline ${ pathname === '/energy-solutions' ? 'text-sky-700 font-semibold' : 'text-gray-400' }` }>
                                                    <svg
                                                        className='h-5 w-5 mr-2'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='1em'
                                                        height='1em'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path
                                                            fill='currentColor'
                                                            d='M16.45 8.425q.3.3.7.313t.7-.288l1.4-1.4q.3-.3.3-.712t-.3-.713q-.275-.275-.7-.275t-.7.275l-1.4 1.4q-.275.275-.275.688t.275.712M3 22q-.825 0-1.412-.587T1 20V6q0-.825.588-1.412T3 4h8v8q0 .825.588 1.413T13 14h6v6q0 .825-.587 1.413T17 22zm15-10q-.75 0-1.475-.225t-1.35-.65l-.375.35q-.3.275-.713.275t-.687-.275t-.275-.7t.275-.7l.4-.4q-.4-.6-.6-1.275T13 7q0-2.075 1.463-3.537T18 2h5v5q0 2.075-1.463 3.538T18 12M5 18h2v-7H5zm4 0h2V8H9zm4 0h2v-4h-2z'
                                                        />
                                                    </svg>
                                                    Energy Solutions
                                                </Link>
                                            </AccordionItem>
                                            <AccordionItem value='item-4' className='border-none text-left py-4'>
                                                <Link href='/projects' className={ `flex items-center no-underline ${ pathname === '/projects' ? 'text-sky-700 font-semibold' : 'text-gray-400' }` }>
                                                    <svg
                                                        className='h-5 w-5 mr-2'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='1em'
                                                        height='1em'
                                                        viewBox='0 0 256 256'
                                                    >
                                                        <g fill='currentColor'>
                                                            <path
                                                                d='M208 72v112H48V72Z'
                                                                opacity='.2'
                                                            />
                                                            <path
                                                                d='M88 144v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8v-24a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m56-72v96h8a8 8 0 0 1 0 16h-88v17.38a24 24 0 1 1-16 0V192H32a8 8 0 0 1 0-16h8V80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16m-80 152a8 8 0 1 0-8 8a8 8 0 0 0 8-8M40 64h176V48H40Zm160 16H56v96h144Z'
                                                            />
                                                        </g>
                                                    </svg>
                                                    Projects
                                                </Link>
                                            </AccordionItem>
                                            <AccordionItem value='item-5' className='border-none text-left py-4'>
                                                <Link href='/carbon-platform' className={ `flex items-center no-underline ${ pathname === '/carbon-platform' ? 'text-sky-700 font-semibold' : 'text-gray-400' }` }>
                                                    <svg
                                                        className='h-5 w-5 mr-2'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='1em'
                                                        height='1em'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path
                                                            fill='currentColor'
                                                            d='M5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3v-2H5V9h3V7zm6 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2zm5 1.5V12h3v1.5h-1.5A1.5 1.5 0 0 0 16 15v3h4.5v-1.5h-3V15H19a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5z'
                                                        />
                                                    </svg>
                                                    Carbon Credits
                                                </Link>
                                            </AccordionItem>
                                            <AccordionItem value='item-6' className='border-none text-left py-4'>
                                                <Link href='/system-builder' className={ `flex items-center no-underline ${ pathname === '/system-builder' ? 'text-sky-700 font-semibold' : 'text-gray-400' }` }>
                                                    <svg
                                                        className='h-5 w-5 mr-2'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='1em'
                                                        height='1em'
                                                        viewBox='0 0 32 32'
                                                    >
                                                        <path
                                                            fill='currentColor'
                                                            d='M22 4v3H10V4H2v8h8V9h7.023A4.946 4.946 0 0 0 16 12v8a3.004 3.004 0 0 1-3 3h-3v-3H2v8h8v-3h3a5.006 5.006 0 0 0 5-5v-8a2.998 2.998 0 0 1 2.997-3H22v3h8V4ZM8 10H4V6h4Zm0 16H4v-4h4Zm20-16h-4V6h4Z'
                                                        />
                                                    </svg>
                                                    System Builder
                                                </Link>
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
                                            Carbon Credits
                                        </Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button asChild variant='ghost'>
                                        <Link href='/system-builder' className={ pathname === '/system-builder' ? 'text-sky-700' : 'text-gray-400' }>
                                            System Builder
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

                            <Link href={ `${ pathname }#qoute` } className='flex items-center justify-center bg-[#111827] text-white font-medium h-full w-48 '>
                                Get a qoute
                            </Link>
                        </div>
                    </div>
                    
                    <div className='xl:hidden'>
                        <Sheet>
                            <SheetTrigger className='mr-2 text-gray-500 rounded p-3 transition ease-in-out duration-300 hover:text-[#111827] hover:bg-gray-200'>
                                <svg
                                    className='h-6 w-6'
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
                                        <div className='grid grid-cols-3 gap-2 w-full'>
                                            <button
                                                type='button'
                                                onClick={ ( e: any ) => {
                                                    clipboard.write( 'info@ezpower.tech' )
                                                    toast ( {
                                                        title: 'Email',
                                                        description: 'Copied!',
                                                        action: (
                                                            <ToastAction altText='Close'>Close</ToastAction>
                                                        )
                                                    } )
                                                } }
                                                className='col-span-3 flex items-center justify-start bg-gray-100 border-gray-100 border-2 text-gray-500 font-medium rounded outline-none h-14 w-full px-3 transition ease-in-out duration-300 hover:border-gray-500 focus:border-gray-500'
                                            >
                                                <svg
                                                    className='h-5 w-5 mr-1'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='1em'
                                                    height='1em'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15'
                                                    />
                                                </svg>
                                                info@ezpower.tech
                                            </button>
                                            <button
                                                type='button'
                                                onClick={ ( e: any ) => {
                                                    clipboard.write( '0444824405' )
                                                    toast ( {
                                                        title: 'Phone No.',
                                                        description: 'Copied!',
                                                        action: (
                                                            <ToastAction altText='Close'>Close</ToastAction>
                                                        )
                                                    } )
                                                } }
                                                className='col-span-3 flex items-center justify-start bg-gray-100 border-gray-100 border-2 text-gray-500 font-medium rounded outline-none h-14 w-full px-3 transition ease-in-out duration-300 hover:border-gray-500 focus:border-gray-500'
                                            >
                                                <svg
                                                    className='h-5 w-5 mr-1'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='1em'
                                                    height='1em'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3'
                                                    />
                                                </svg>
                                                044-482-4405
                                            </button>
                                            <button
                                                type='button'
                                                onClick={ ( e: any ) => {
                                                    clipboard.write( '09498854308' )
                                                    toast ( {
                                                        title: 'Mobile No.',
                                                        description: 'Copied!',
                                                        action: (
                                                            <ToastAction altText='Close'>Close</ToastAction>
                                                        )
                                                    } )
                                                } }
                                                className='col-span-3 flex items-center justify-start bg-gray-100 border-gray-100 border-2 text-gray-500 font-medium rounded outline-none h-14 w-full px-3 transition ease-in-out duration-300 hover:border-gray-500 focus:border-gray-500'
                                            >
                                                <svg
                                                    className='h-5 w-5 mr-1'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='1em'
                                                    height='1em'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z'
                                                    />
                                                </svg>
                                                0949-885-4308
                                            </button>
                                            <Link
                                                href='https://www.google.com/maps/search/?api=1&query=14.8106425917393,120.96820430088181'
                                                className='flex items-center justify-center bg-red-100 border-red-100 border-2 text-red-500 font-medium rounded outline-none h-14 w-full transition ease-in-out duration-300 hover:border-red-500 focus:border-red-500'
                                            >
                                                <svg
                                                    className='h-5 w-5'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='1em'
                                                    height='1em'
                                                    viewBox='0 0 20 20'
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M10 0a7.65 7.65 0 0 0-8 8c0 2.52 2 5 3 6s5 6 5 6s4-5 5-6s3-3.48 3-6a7.65 7.65 0 0 0-8-8m0 11.25A3.25 3.25 0 1 1 13.25 8A3.25 3.25 0 0 1 10 11.25'
                                                    />
                                                </svg>
                                            </Link>
                                            <div
                                                className='col-span-2 flex items-center justify-start bg-gray-50 border-gray-50 border-2 text-gray-500 font-medium rounded outline-none h-14 w-full px-3 transition ease-in-out duration-300'
                                            >
                                                Monday to Friday 9am to 6pm
                                            </div>
                                            <Link
                                                href={ `${ pathname }#qoute` }
                                                className='col-span-3 flex items-center justify-center bg-[#111827] border-[#111827] border-2 text-white font-medium rounded outline-none h-14 w-full px-3 transition ease-in-out duration-300 hover:border-gray-400 focus:border-gray-400'
                                            >
                                                Get a qoute
                                            </Link>
                                            <Link
                                                href='/assets/vcard/contact-info.vcf'
                                                className='col-span-3 flex items-center justify-center bg-sky-700 border-sky-700 border-2 text-white font-medium rounded outline-none h-14 w-full px-3 transition ease-in-out duration-300 hover:border-sky-400 focus:border-sky-400'
                                            >
                                                <svg
                                                    className='h-5 w-5 mr-2'
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
                                                <div>Download our VCard</div>
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
