'use client'

import { useState , useEffect } from 'react'
import Link from 'next/link'

type Props = { goto: string }

export default function QuickUp ( props: Props ) {

    const { goto } = props

    const [ height , setHeight ] = useState <number> ( 0 )
    useEffect( () => window.addEventListener( 'scroll' , () => setHeight( window.scrollY ) ) , [ height ] )

    return (
        <div className={ `fixed left-[50%] bottom-4 right-[50%] w-max h-max transition-all ease-in-out duration-300 ${ height >= 720 ? 'bottom-10' : '-bottom-20' }` }>
            <Link href={ goto } scroll={ true } className='flex text-sky-700 outline-none cursor-pointer transition ease-in-out duration-300 hover:scale-110 group'>                
                <div className='relative'>
                    <svg
                        className='h-7 w-7 group-hover:animate-ping'
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m6 15l6-6l6 6"
                        />
                    </svg>
                    <svg
                        className='absolute top-0 h-7 w-7'
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m6 15l6-6l6 6"
                        />
                    </svg>
                </div>
            </Link>
        </div>
    )

}



