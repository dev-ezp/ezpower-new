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

    const [ disabled , setDisabled ] = useState <boolean> ( false )
    const [ loading , setLoading ] = useState <boolean> ( false)

    return (
        <form
            onSubmit={ ( e: any ) => {
                e.preveventDefault()
            } }
            className={ `w-full transition-all ease-in-out duration-300 ${ classes.display } ${ classes.opacity } ${ classes.translate }` }
            typeof='submit'
        >
            <h1 className='text-sky-700 text-xl sm:text-2xl font-medium capitalize'>about your electricity</h1>
            <br />

            <div className='grid gap-3'>
                <div className='grid'>
                    <label htmlFor='' className='text-gray-700 text-sm uppercase mb-2'>average monthly bill</label>
                    <input
                        className='bg-gray-100 border-gray-100 text-sm border-2 cursor-auto outline-none rounded p-3 sm:p-4 mb-1 transition ease-in-out duration-300 hover:border-gray-400 focus:border-gray-400 disabled:opacity-50 disabled:hover:border-gray-100 disabled:focus:border-gray-100'
                        placeholder='₱'
                        step={ .01 }
                        type='number'
                        disabled={ disabled }
                    />
                    <div className='text-red-500 text-xs italic'>warning label</div>
                </div>

                <div className='grid'>
                    <label htmlFor='' className='text-gray-700 text-sm uppercase mb-2'>field a</label>
                    <input
                        className='bg-gray-100 border-gray-100 text-sm border-2 cursor-auto outline-none rounded p-3 sm:p-4 mb-1 transition ease-in-out duration-300 hover:border-gray-400 focus:border-gray-400 disabled:opacity-50 disabled:hover:border-gray-100 disabled:focus:border-gray-100'
                        placeholder='Field A'
                        type='text'
                        disabled={ disabled }
                    />
                    <div className='text-red-500 text-xs italic'>warning label</div>
                </div>

                <div className='grid'>
                    <label htmlFor='' className='text-gray-700 text-sm uppercase mb-2'>field b</label>
                    <input
                        className='bg-gray-100 border-gray-100 text-sm border-2 cursor-auto outline-none rounded p-3 sm:p-4 mb-1 transition ease-in-out duration-300 hover:border-gray-400 focus:border-gray-400 disabled:opacity-50 disabled:hover:border-gray-100 disabled:focus:border-gray-100'
                        placeholder='Field B'
                        type='text'
                        disabled={ disabled }
                    />
                    <div className='text-red-500 text-xs italic'>warning label</div>
                </div>
            </div>

            <br /><br />
            <label htmlFor="" className='text-gray-950 text-xs font-thin italic'>all these fields may change depending on the needs.</label>
        </form>
    )

}