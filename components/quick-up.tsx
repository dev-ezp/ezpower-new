'use client'

import { useState , useEffect } from 'react'
import Link from 'next/link'

type Props = {}

export default function QuickUp ( props: Props ) {

    const [ height , setHeight ] = useState <number> ( 0 )
    useEffect( () => window.addEventListener( 'scroll' , () => setHeight( window.scrollY ) ) , [ height ] )

    // Todo: move this to a better place.

    return (
        <div className={ `fixed top-[50%] bottom-[50%] w-max h-max transition-all ease-in-out duration-300 ${ height >= 720 ? 'right-6' : '-right-20' }` }>
            <Link href='#top' scroll={ true } className='flex bg-[#0a7cff] text-white rounded-lg p-3 outline-none cursor-pointer transition ease-in-out duration-300 hover:scale-110 group'>                
                <div className='relative'>
                    <svg
                        className='h-7 w-7 group-hover:animate-ping'
                        width='1em'
                        height='1em'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m6 15l6-6l6 6'
                        />
                    </svg>
                    <svg
                        className='absolute top-0 h-7 w-7'
                        width='1em'
                        height='1em'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m6 15l6-6l6 6'
                        />
                    </svg>
                </div>
            </Link>
        </div>
    )

}



