'use client'

import { useState , useEffect } from 'react'

type Props = {}

export default function SystemBuilderForm1 ( props: Props ) {

    type Classes = { display: string , opacity: string , translate: string }
    const [ classes , setClasses ] = useState <Classes> ( { display: 'hidden' , opacity: 'opacity-0' , translate: 'translate-x-20' } )

    useEffect( () => {
        setClasses( { display: 'block' , opacity: 'opacity-0' , translate: 'translate-x-20' } )
        setTimeout( () => setClasses( { display: 'block' , opacity: 'opacity-100' , translate: 'translate-x-0' } ) , 300 )
    } , [] )

    return (
        <form
            onSubmit={ ( e: any ) => {
                e.preveventDefault()
            } }
            className={ `transition-all ease-in-out duration-300 ${ classes.display } ${ classes.opacity } ${ classes.translate }` }
            typeof='submit'
        >
            <h1 className='text-gray-950 text-lg font-medium capitalize'>about your electricity</h1>
            <br />
            <div className='grid gap-2'>
                <label htmlFor='' className='text-sky-700 text-sm font-medium uppercase'>average monthly bill</label>
                <input
                    className='bg-gray-100 border-gray-100 border-2 rounded p-3 outline-none cursor-default transition ease-in-out duration-300 hover:border-gray-300 focus:border-gray-300'
                    placeholder='₱'
                    step={ .01 }
                    type='number'
                />
            </div>
            <br />
            <div className='grid gap-2'>
                <label htmlFor='' className='text-sky-700 text-sm font-medium uppercase'>field a</label>
                <input
                    className='bg-gray-100 border-gray-100 border-2 rounded p-3 outline-none cursor-default transition ease-in-out duration-300 hover:border-gray-300 focus:border-gray-300'
                    placeholder='Field A'
                    type='text'
                />
            </div>
            <br />
            <div className='grid gap-2'>
                <label htmlFor='' className='text-sky-700 text-sm font-medium uppercase'>field b</label>
                <input
                    className='bg-gray-100 border-gray-100 border-2 rounded p-3 outline-none cursor-default transition ease-in-out duration-300 hover:border-gray-300 focus:border-gray-300'
                    placeholder='Field B'
                    type='text'
                />
            </div>
            <label htmlFor="" className='text-gray-950 text-xs font-thin italic'>all these fields may change depending on the needs</label>
        </form>
    )

}