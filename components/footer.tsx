'use client'

import Link from 'next/link'

import Map , { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { MapPin , Clock } from 'lucide-react'

type Props = {}

export default function Footer ( props: Props ) {

    return (
        <footer className='bg-[#111827]'>
            <div
                className={ `
                    w-auto mx-5 py-10
                    md:w-2/3 md:mx-auto md:py-20
                ` }
            >

                <div className='grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10 xl:gap-20'>
                    <div className='flex flex-col'>
                        <h5 className='text-white text-2xl font-bold'>legal</h5>
                        <div className='bg-white h-2 w-2 my-5'></div>
                        <div className='grid gap-3'>
                            <Link
                                href='/'
                                className='text-white text-xs cursor-pointer hover:underline'
                            >
                                Terms and Conditions
                            </Link>
                            <Link
                                href='/'
                                className='text-white text-xs cursor-pointer hover:underline'
                            >
                                Privacy Policies
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='text-white text-2xl font-bold'>services</h5>
                        <div className='bg-white h-2 w-2 my-5'></div>
                        <div className='grid gap-3'>
                            <Link
                                href='/'
                                className='text-white text-xs cursor-pointer hover:underline'
                            >
                                Planning and Design
                            </Link>
                            <Link
                                href='/'
                                className='text-white text-xs cursor-pointer hover:underline'
                            >
                                Site Survey
                            </Link>
                            <Link
                                href='/'
                                className='text-white text-xs cursor-pointer hover:underline'
                            >
                                Testing
                            </Link>
                            <Link
                                href='/'
                                className='text-white text-xs cursor-pointer hover:underline'
                            >
                                Thermal Sensing
                            </Link>
                            <Link
                                href='/'
                                className='text-white text-xs cursor-pointer hover:underline'
                            >
                                Workforce
                            </Link>
                            <Link
                                href='/'
                                className='text-white text-xs cursor-pointer hover:underline'
                            >
                                System Quotation
                            </Link>
                            <Link
                                href='/'
                                className='text-white text-xs cursor-pointer hover:underline'
                            >
                                Consultancy
                            </Link>
                            <Link
                                href='/'
                                className='text-white text-xs cursor-pointer hover:underline'
                            >
                                Customer Support
                            </Link>
                        </div>
                    </div>
                    <div className='col-span-2 flex flex-col'>
                        <h5 className='text-white text-2xl font-bold'>visit us</h5>
                        <div className='bg-white h-2 w-2 my-5'></div>
                        <div className='grid gap-3'>
                            <div className='flex items-center space-x-2 text-white'>
                                <MapPin className='h-4 w-4'/>
                                <p className='text-xs'>125 Pipino Street, Barangay Tamana, Santa Maria, Bulacan.</p>
                            </div>
                            <div className='flex items-center space-x-2 text-white'>
                                <Clock className='h-4 w-4'/>
                                <p className='text-xs'>Mon - Fri 9am to 6pm</p>
                            </div>
                            <div className='relative flex items-center justify-center bg-white rounded-[0.3rem] h-[180px] w-full'>
                                <p className='absolute text-[#111827] text-xs'>loading...</p>
                                <Map
                                    initialViewState={ {
                                        latitude: 14.8106425917393,
                                        longitude: 120.96820430088181,
                                        zoom: 10
                                    } }
                                    style={ { width: '100%' , height: '100%' , borderRadius: '0.2rem' } }
                                    mapStyle='mapbox://styles/dev-sonen/ckzf9nz2h000a14nxm2b235ub?optimize=true'
                                    mapboxAccessToken={ process.env.NEXT_PUBLIC_MAPBOX_TOKEN }
                                >
                                    <Marker latitude={ 14.8106425917393 } longitude={ 120.96820430088181 }>
                                        <div className='relative'>
                                            <div className='text-red-600'>
                                                <svg
                                                    className='h-7 w-7'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='1em'
                                                    height='1em'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path fill='currentColor' d='M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 1.125-.438 2.363t-1.275 2.575Q17.45 16.475 16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125ZM12 12q.825 0 1.413-.587T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Z' />
                                                </svg>
                                            </div>
                                        </div>
                                    </Marker>
                                    <div className='absolute top-3 right-3'>
                                        <Link
                                            href='https://www.google.com/maps/search/?api=1&query=14.8106425917393,120.96820430088181'
                                            className='flex items-center justify-center text-white cursor-pointer outline-none rounded-sm p-2 transition ease-in-out duration-300 hover:bg-white hover:text-[#111827] focus:bg-white focus:text-[#111827]'
                                        >
                                            <svg
                                                className='h-5 w-5'
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='1em'
                                                height='1em'
                                                viewBox='0 0 24 24'
                                            >
                                                <g fill='none'>
                                                    <path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z' />
                                                    <path fill='currentColor' d='M11 6a1 1 0 1 1 0 2H5v11h11v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6Zm9-3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.586 5H15a1 1 0 1 1 0-2Z' />
                                                </g>
                                            </svg>
                                        </Link>
                                    </div>
                                </Map>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-5 sm:space-x-0 py-10'>

                    <div className='flex items-center space-x-2 text-white'>
                        <svg
                            className='h-4 w-4'
                            xmlns='http://www.w3.org/2000/svg'
                            width='1em'
                            height='1em'
                            viewBox='0 0 24 24'
                        >
                            <path
                                fill='currentColor'
                                d='M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18Zm11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11ZM9.525 9.526a3.5 3.5 0 0 0 4.95 4.95l.707-.708l1.414 1.415l-.707.707a5.5 5.5 0 1 1 0-7.778l.707.707l-1.414 1.414l-.707-.707a3.5 3.5 0 0 0-4.95 0Z'
                            />
                        </svg>
                        <p className='text-xs'>2022 EZ Power Tech <span className='mx-2'>|</span> Edge Systems Engineering Services</p>
                    </div>

                    <div className='flex items-center space-x-5'>
                        <Link
                            href='https://www.facebook.com/'
                            className='text-white cursor-pointer'
                        >
                            <svg
                                className='h-5 w-5'
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
                            className='text-white cursor-pointer'
                        >
                            <svg
                                className='h-5 w-5'
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

            </div>
        </footer>
    )

}
