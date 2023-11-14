'use client'

import { useState } from 'react'

import Link from 'next/link'

import clipboard from 'clipboardy'

import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { Phone , Smartphone , MailIcon } from 'lucide-react'

type Props = {}

export default function QouteHome ( props: Props ) {

    type Fields = { name: string , email: string , phone: string , address: string }
    const [ fields , setFields ] = useState <Fields> ( { name: '' , email: '' , phone: '' , address: '' } )
    
    const [ disabled , setDisabled ] = useState <boolean> ( false )
    
    const { toast } = useToast()

    return (
        <div className='bg-gray-100 h-max py-20'>
            <div className='mx-96'>

                <div className='grid grid-cols-2 gap-20'>
                    <div className=''>
                        <div className='flex flex-col space-y-2 py-5'>
                            <h5 className='text-sky-700 text-sm font-semibold uppercase'>get some professional advice from our engineers.</h5>
                            <h1 className='text-[#111827] text-4xl font-bold'>Energy Solutions that fits for my needs</h1>
                            <p className='text-[#111827] font-medium py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, itaque eaque error molestiae incidunt cum a nam distinctio temporibus. Laboriosam?</p>
                        </div>
                        <div className='bg-sky-700 h-5 w-5'></div>
                        <div className='flex flex-col space-y-2 py-5'>
                            <h1 className='text-[#111827] text-2xl font-bold'>get in touch.</h1>
                            <p className='text-[#111827] font-medium py-5'>We are open between 9am to 6pm, monday to friday. We also offer consultation everyday including weekends except holidays; Call us and we were happy to help you.</p>
                            <div className='grid grid-cols-2 gap-3'>
                                <button
                                    onClick={ () => {
                                        clipboard.write( '0444824405' )
                                        toast ( {
                                            title: 'Telephone no.',
                                            description: 'Copied!',
                                            action: (
                                                <ToastAction altText='Close'>Close</ToastAction>
                                            )
                                        } )
                                    } }
                                    className='flex items-center justify-center bg-gray-100 border-gray-300 text-[#111827] font-medium border-2 cursor-pointer outline-none rounded py-4 transition ease-in-out duration-300 hover:bg-[#111827] hover:border-[#111827] hover:text-white group'
                                >
                                    <Phone className='text-sky-700 h-6 w-6 mr-2 transition ease-in-out duration-300 group-hover:text-white' />
                                    044 482 4405
                                </button>
                                <button
                                    onClick={ () => {
                                        clipboard.write( '09498854308' )
                                        toast ( {
                                            title: 'Mobile no.',
                                            description: 'Copied!',
                                            action: (
                                                <ToastAction altText='Close'>Close</ToastAction>
                                            )
                                        } )
                                    } }
                                    className='flex items-center justify-center bg-gray-100 border-gray-300 text-[#111827] font-medium border-2 cursor-pointer outline-none rounded py-4 transition ease-in-out duration-300 hover:bg-[#111827] hover:border-[#111827] hover:text-white group'
                                >
                                    <Smartphone className='text-sky-700 h-6 w-6 mr-2 transition ease-in-out duration-300 group-hover:text-white' />
                                    0949 885 4308
                                </button>
                                <button
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
                                    className='flex items-center justify-center bg-gray-100 border-gray-300 text-[#111827] font-medium border-2 cursor-pointer outline-none rounded py-4 transition ease-in-out duration-300 hover:bg-[#111827] hover:border-[#111827] hover:text-white group'
                                >
                                    <MailIcon className='text-sky-700 h-6 w-6 mr-2 transition ease-in-out duration-300 group-hover:text-white' />
                                    info@ezpower.tech
                                </button>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={ ( e: any ) => {
                            e.preventDefault()
                        } }
                        className='flex flex-col space-y-3 bg-white shadow-black/10 shadow-lg drop-shadow-lg rounded p-10'
                        typeof='submit'
                    >
                        <h1 className='text-sky-700 text-2xl font-medium capitalize'>request a qoute</h1>
                        <div className='grid grid-cols-2 gap-3'>
                            <input
                                onChange={ ( e: any ) => setFields( { ... fields , name: String( e.target.value ).trim() } ) }
                                placeholder='Name'
                                type='text'
                                disabled={ disabled }
                                className='bg-white border-gray-200 text-gray-950 text-sm border cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                            />
                            <input
                                onChange={ ( e: any ) => setFields( { ... fields , email: String( e.target.value ).trim() } ) }
                                placeholder='Email'
                                type='email'
                                disabled={ disabled }
                                className='bg-white border-gray-200 text-gray-950 text-sm border cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                            />
                            <input
                                onChange={ ( e: any ) => setFields( { ... fields , phone: String( e.target.value ).trim() } ) }
                                placeholder='Phone'
                                type='text'
                                disabled={ disabled }
                                className='bg-white border-gray-200 text-gray-950 text-sm border cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                            />
                            <input
                                onChange={ ( e: any ) => setFields( { ... fields , address: String( e.target.value ).trim() } ) }
                                placeholder='Address'
                                type='text'
                                disabled={ disabled }
                                className='bg-white border-gray-200 text-gray-950 text-sm border cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                            />
                        </div>
                        <h1 className='text-sky-700 text-base font-medium capitalize'>System data</h1>
                        <div className='grid grid-cols-2 gap-3'>
                            <input
                                onChange={ ( e: any ) => {} }
                                placeholder='System Installer?'
                                type='text'
                                disabled={ disabled }
                                className='bg-white border-gray-200 text-gray-950 text-sm border cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                            />
                            <input
                                onChange={ ( e: any ) => {} }
                                placeholder='Monthly Electric Usage'
                                type='text'
                                disabled={ disabled }
                                className='bg-white border-gray-200 text-gray-950 text-sm border cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                            />
                            <input
                                onChange={ ( e: any ) => {} }
                                placeholder='?'
                                type='text'
                                disabled={ disabled }
                                className='bg-white border-gray-200 text-gray-950 text-sm border cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                            />
                            <input
                                onChange={ ( e: any ) =>  {} }
                                placeholder='?'
                                type='text'
                                disabled={ disabled }
                                className='bg-white border-gray-200 text-gray-950 text-sm border cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                            />
                            <input
                                onChange={ ( e: any ) => {} }
                                placeholder='?'
                                type='text'
                                disabled={ disabled }
                                className='bg-white border-gray-200 text-gray-950 text-sm border cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                            />
                            <input
                                onChange={ ( e: any ) =>  {} }
                                placeholder='?'
                                type='text'
                                disabled={ disabled }
                                className='bg-white border-gray-200 text-gray-950 text-sm border cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                            />
                        </div>
                        <h1 className='text-sky-700 text-base font-medium capitalize'>We will contact you via?</h1>
                        <div className='flex items-center space-x-3'>
                            <div className='flex items-center w-max'>
                                <input
                                    onChange={ ( e: any ) => {} }
                                    type='radio'
                                    id='all'
                                    name='prefered'
                                    disabled={ disabled }
                                    defaultChecked={ true }
                                    className='bg-white border-gray-200 text-gray-950 text-sm border cursor-pointer outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                                />
                                <label htmlFor='all' className='text-gray-950 text-sm capitalize ml-1'>all</label>
                            </div>
                            <div className='flex items-center w-max'>
                                <input
                                    onChange={ ( e: any ) => {} }
                                    type='radio'
                                    id='telephone'
                                    name='prefered'
                                    disabled={ disabled }
                                    defaultChecked={ false }
                                    className='bg-white border-gray-200 text-gray-950 text-sm border cursor-pointer outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                                />
                                <label htmlFor='telephone' className='text-gray-950 text-sm capitalize ml-1'>telephone</label>
                            </div>
                            <div className='flex items-center w-max'>
                                <input
                                    onChange={ ( e: any ) => {} }
                                    type='radio'
                                    id='mobile'
                                    name='prefered'
                                    disabled={ disabled }
                                    defaultChecked={ false }
                                    className='bg-white border-gray-200 text-gray-950 text-sm border cursor-pointer outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                                />
                                <label htmlFor='mobile' className='text-gray-950 text-sm capitalize ml-1'>mobile</label>
                            </div>
                            <div className='flex items-center w-max'>
                                <input
                                    onChange={ ( e: any ) => {} }
                                    type='radio'
                                    id='email'
                                    name='prefered'
                                    disabled={ disabled }
                                    defaultChecked={ false }
                                    className='bg-white border-gray-200 text-gray-950 text-sm border cursor-pointer outline-none rounded p-4 transition ease-in-out duration-300 hover:border-sky-700 focus:border-sky-700'
                                />
                                <label htmlFor='email' className='text-gray-950 text-sm capitalize ml-1'>email</label>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='flex items-center justify-center bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-sm py-4 w-full transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700 group'
                            disabled={ disabled }
                        >
                            submit request
                            <div className='relative ml-2'>
                                <svg
                                    className='h-5 w-5 group-hover:animate-ping'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                    />
                                </svg>
                                <svg
                                    className='absolute top-0 h-5 w-5'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                    />
                                </svg>
                            </div>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )

}
