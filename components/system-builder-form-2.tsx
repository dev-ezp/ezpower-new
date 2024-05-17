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

    const [ disabled , setDisabled ] = useState <boolean> ( false )
    const [ loading , setLoading ] = useState <boolean> ( false)

    return (
        <form
            onSubmit={ ( e: any ) => {
                e.preventDefault()
            } }
            className={ `w-full transition-all ease-in-out duration-300 ${ classes.display } ${ classes.opacity } ${ classes.translate }` }
            typeof='submit'
        >
            <h1 className='text-sky-700 text-xl sm:text-2xl font-medium capitalize'>contact info</h1>
            <br />
            <div className='grid gap-3'>
                <div className='grid'>
                    <label htmlFor='full_name' className='text-gray-700 text-sm uppercase mb-2'>full name</label>
                    <input
                        className='bg-gray-100 border-gray-100 text-sm border-2 cursor-auto outline-none rounded p-3 sm:p-4 mb-1 transition ease-in-out duration-300 hover:border-gray-400 focus:border-gray-400 disabled:opacity-50 disabled:hover:border-gray-100 disabled:focus:border-gray-100'
                        placeholder='Name'
                        id='full_name'
                        type='text'
                        disabled={ disabled }
                    />
                    <div className='text-red-500 text-xs italic'>warning label</div>
                </div>

                <div className='grid'>
                    <label htmlFor='home_address' className='text-gray-700 text-sm uppercase mb-2'>address</label>
                    <input
                        className='bg-gray-100 border-gray-100 text-sm border-2 cursor-auto outline-none rounded p-3 sm:p-4 mb-1 transition ease-in-out duration-300 hover:border-gray-400 focus:border-gray-400 disabled:opacity-50 disabled:hover:border-gray-100 disabled:focus:border-gray-100'
                        placeholder='Address'
                        id='home_address'
                        type='text'
                        disabled={ disabled }
                    />
                    <div className='text-red-500 text-xs italic'>warning label</div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='grid'>
                        <label htmlFor='email_address' className='text-gray-700 text-sm uppercase mb-2'>email</label>
                        <input
                            className='bg-gray-100 border-gray-100 text-sm border-2 cursor-auto outline-none rounded p-3 sm:p-4 mb-1 transition ease-in-out duration-300 hover:border-gray-400 focus:border-gray-400 disabled:opacity-50 disabled:hover:border-gray-100 disabled:focus:border-gray-100'
                            placeholder='Email'
                            id='email_address'
                            type='email'
                            disabled={ disabled }
                        />
                        <div className='text-red-500 text-xs italic'>warning label</div>
                    </div>

                    <div className='grid'>
                        <label htmlFor='mobile_no' className='text-gray-700 text-sm uppercase mb-2'>contact no.</label>
                        <input
                            className='bg-gray-100 border-gray-100 text-sm border-2 cursor-auto outline-none rounded p-3 sm:p-4 mb-1 transition ease-in-out duration-300 hover:border-gray-400 focus:border-gray-400 disabled:opacity-50 disabled:hover:border-gray-100 disabled:focus:border-gray-100'
                            placeholder='Phone'
                            id='mobile_no'
                            type='text'
                            disabled={ disabled }
                        />
                        <div className='text-red-500 text-xs italic'>warning label</div>
                    </div>
                </div>

            </div>

            <br />

            <button
                className='bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-auto rounded-sm w-full p-3 sm:p-4 transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700 disabled:opacity-50 disabled:hover:bg-[#111827] disabled:hover:border-[#111827] disabled:focus:bg-[#111827] disabled:focus:border-[#111827]'
                type='submit'
                disabled={ disabled }
            >
                submit and see results
            </button>

        </form>
    )

}