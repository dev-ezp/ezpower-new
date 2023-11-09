'use client'

import { useState , useEffect } from 'react'
import Link from 'next/link'

type Props = { goto: string }

export default function QuickUp ( props: Props ) {

    const { goto } = props

    const [ height , setHeight ] = useState <number> ( 0 )
    useEffect( () => window.addEventListener( 'scroll' , () => setHeight( window.scrollY ) ) , [ height ] )

    return (
        <div className={ `fixed bottom-10 transition-all ease-in-out duration-300 ${ height >= 720 ? 'right-10' : '-right-20' }` }>
            <Link href={ goto } scroll={ true } className='flex bg-sky-700 text-white outline-none cursor-pointer rounded-full p-4 transition ease-in-out duration-300 hover:scale-110 group'>                
                <div className='relative'>
                    <svg
                        className='h-6 w-6 group-hover:animate-ping'
                        xmlns='http://www.w3.org/2000/svg'
                        width='1em'
                        height='1em'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='currentColor'
                            d='m11 8.8l-2.9 2.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L13 8.8V17q0 .425-.288.713T12 18q-.425 0-.713-.288T11 17V8.8Z'
                        />
                    </svg>
                    <svg
                        className='absolute top-0 h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        width='1em'
                        height='1em'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='currentColor'
                            d='m11 8.8l-2.9 2.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L13 8.8V17q0 .425-.288.713T12 18q-.425 0-.713-.288T11 17V8.8Z'
                        />
                    </svg>
                </div>
            </Link>
        </div>
    )

}
