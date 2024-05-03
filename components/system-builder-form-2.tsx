'use client'

import { useState , useEffect } from 'react'

type Props = {}

export default function SystemBuilderForm2 ( props: Props ) {

    type Classes = { display: string , opacity: string , translate: string }
    const [ classes , setClasses ] = useState <Classes> ( { display: 'hidden' , opacity: 'opacity-0' , translate: 'translate-x-20' } )

    useEffect( () => {
        setClasses( { display: 'block' , opacity: 'opacity-0' , translate: 'translate-x-20' } )
        setTimeout( () => setClasses( { display: 'block' , opacity: 'opacity-100' , translate: 'translate-x-0' } ) , 300 )
    } , [] )

    return (
        <form
            onSubmit={ ( e: any ) => {
                e.preventDefault()
            } }
            className={ `transition-all ease-in-out duration-300 ${ classes.display } ${ classes.opacity } ${ classes.translate }` }
        >
            <h1 className='text-gray-950 text-lg font-medium capitalize'>you contact info</h1>
            <br />
            <div className='grid gap-2'>
                <label htmlFor='' className='text-sky-700 text-sm font-medium uppercase'>full name</label>
                <input
                    className='bg-gray-100 border-gray-100 border-2 rounded p-3 outline-none cursor-default transition ease-in-out duration-300 hover:border-gray-300 focus:border-gray-300'
                    placeholder='Juan Dela Cruz'
                    type='text'
                />
            </div>
            <br />
            <div className='grid gap-2'>
                <label htmlFor='' className='text-sky-700 text-sm font-medium uppercase'>contact no.</label>
                <input
                    className='bg-gray-100 border-gray-100 border-2 rounded p-3 outline-none cursor-default transition ease-in-out duration-300 hover:border-gray-300 focus:border-gray-300'
                    placeholder='09XX XXX XXXX'
                    type='text'
                />
            </div>
            <br />
            <div className='grid gap-2'>
                <label htmlFor='' className='text-sky-700 text-sm font-medium uppercase'>email</label>
                <input
                    className='bg-gray-100 border-gray-100 border-2 rounded p-3 outline-none cursor-default transition ease-in-out duration-300 hover:border-gray-300 focus:border-gray-300'
                    placeholder='you@email.com'
                    type='email'
                />
            </div>
            <br />
            <button
                className='bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-sm p-3 transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'
                type='submit'
            >
                submit and see results
            </button>
        </form>
    )

}