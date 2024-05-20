'use client'

import { useState , useEffect } from 'react'
import Cookies from 'js-cookie'

import Link from 'next/link'

type Props = {}

export default function CookieConsent ( props: Props ) {

    const [ classes , setClasses ] = useState ( { display: 'none' , opacity: 'opacity-0' , translate: 'translate-y-32' } )

    useEffect ( () => {

        const check: string | undefined = Cookies.get('cookie-policy')

        if ( check !== 'accept' ) {
            setClasses( { display: 'block' , opacity: 'opacity-0' , translate: 'translate-y-32' } )
            setTimeout( () => {
                setClasses( { display: 'block' , opacity: 'opacity-100' , translate: 'translate-y-0' } )
            } , 300 )
        }

    } , [] )

    return (
        <div className={ `fixed bottom-0 w-full bg-black/80 transition ease-in-out duration-300 ${ classes.display } ${ classes.opacity } ${ classes.translate }` }>
            <div className='flex flex-col xl:flex-row items-center justify-between p-5 sm:p-10'>
                <h1 className='text-white text-sm w-full md:w-[720px]'>EZPower uses cookies to improve your user experience. By clicking &quot;Accept All&quot;, you consent to our use of cookies. for more information click our &quot;Cookie Policy&quot;</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 w-full sm:w-max py-5'>
                    <button
                        onClick={ () => {
                            Cookies.set( 'cookie-policy' , 'accept' , { expires: 31 } )
                            setTimeout( () => {
                                setClasses( { display: 'block' , opacity: 'opacity-0' , translate: 'translate-y-32' } )
                                setTimeout( () => setClasses( { display: 'none' , opacity: 'opacity-0' , translate: 'translate-y-32' } ) , 300 )
                            } , 300 )
                        } }
                        type='button'
                        className='bg-green-500 border-green-500 text-white text-xs sm:text-sm font-medium border-2 text-center cursor-pointer outline-none rounded-[2px] py-2 w-full sm:w-32 transition ease-in-out duration-300 hover:border-green-300 focus:border-green-300'
                    >
                        Accept All
                    </button>
                    <button
                        onClick={ () => {
                            Cookies.set( 'cookie-policy' , 'deny' , { expires: .0001 } )
                            setTimeout( () => {
                                setClasses( { display: 'block' , opacity: 'opacity-0' , translate: 'translate-y-32' } )
                                setTimeout( () => {
                                    setClasses( { display: 'none' , opacity: 'opacity-0' , translate: 'translate-y-32' } )
                                    window.location.reload()
                                }, 300 )
                            } , 300 )
                        } }
                        type='button'
                        className='bg-red-600 border-red-600 text-white text-xs sm:text-sm font-medium border-2 text-center cursor-pointer outline-none rounded-[2px] py-2 w-full sm:w-32 transition ease-in-out duration-300 hover:border-red-400 focus:border-red-400'
                    >
                        Decline
                    </button>
                    <Link href='about-us/#cookie-policy' className='bg-transparent border-white text-white text-xs sm:text-sm font-medium border-2 text-center cursor-pointer outline-none rounded-[2px] py-2 w-full sm:w-32 transition ease-in-out duration-300 hover:bg-white focus:bg-white hover:text-black focus:text-black'>
                        Cookie Policy
                    </Link>
                </div>
            </div>
        </div>
    )

}
      