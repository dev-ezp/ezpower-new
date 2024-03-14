'use client'

import { useState , useRef } from 'react'
import { useRouter } from 'next/navigation'

import axios from 'axios'
import clipboard from 'clipboardy'

import Cipher from '@/classes/cipher'
import GenerateSerial from '@/classes/generate-serial'

import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { Phone , Smartphone , MailIcon } from 'lucide-react'

type Props = {}
type Fields = {
    name: string,
    email: string,
    phone: string,
    address: string,
    fieldA: string,
    fieldB: string,
    fieldC: string,
    fieldD: string,
    prefered: string,
}

export default function Qoute ( props: Props ) {

    const { toast } = useToast()

    const router = useRouter()

    const [ disabled , setDisabled ] = useState <boolean> ( false )
    const [ loading , setLoading ] = useState <boolean> ( false )
    const [ pass , setPass ] = useState <boolean> ( false )

    const [ warning , setWarning ] = useState <string[]> ( [] )

    const [ fields , setFields ] = useState <Fields> ( {
        name: '',
        email: '',
        phone: '',
        address: '',
        fieldA: '',
        fieldB: '',
        fieldC: '',
        fieldD: '',
        prefered: 'all',
    } )

    const [ border , setBorder ] = useState <any> ( {
        name: 'border-gray-200',
        email: 'border-gray-200',
        phone: 'border-gray-200',
        address: 'border-gray-200',
        fieldA: 'border-gray-200',
        fieldB: 'border-gray-200',
        fieldC: 'border-gray-200',
        fieldD: 'border-gray-200'
    } )

    const submitRequest = async ( e: any ) => {

        e.preventDefault()

        setWarning( [] )
        setDisabled( true )
        setLoading( true )

        const generateSerial = new GenerateSerial()
        const cipher = new Cipher()

        const serial: string = String( cipher.hash( String( generateSerial.keyCode() ) ) )

        await axios ( {
            method: 'post',
            url: `${ process.env.NEXT_PUBLIC_ACCESS_DOMAIN }/api/mail-us?serial=${ serial }`,
            data: { ... fields },
            headers: { 'X-Access-Authentication': serial }
        } )
        .then ( res => {

            const { obj , pass } = res.data

            setTimeout ( () => {

                if ( pass ) {

                    setLoading( false )
                    setPass( true )
                    setTimeout( () => location.reload() , 1000 )

                } else {

                    setBorder( {
                        name: obj.name.code === 0 ? 'border-red-500 hover:border-red-400 disabled:hover:border-red-500' : obj.name.code === 1 ? 'border-green-500 hover:border-green-400 disabled:hover:border-green-500' : obj.name.code === 2  ? 'border-gray-500 hover:border-gray-400 disabled:hover:border-gray-500' : 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                        email: obj.email.code === 0 ? 'border-red-500 hover:border-red-400 disabled:hover:border-red-500' : obj.email.code === 1 ? 'border-green-500 hover:border-green-400 disabled:hover:border-green-500' : obj.email.code === 2  ? 'border-gray-500 hover:border-gray-400 disabled:hover:border-gray-500' : 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                        phone: obj.phone.code === 0 ? 'border-red-500 hover:border-red-400 disabled:hover:border-red-500' : obj.phone.code === 1 ? 'border-green-500 hover:border-green-400 disabled:hover:border-green-500' : obj.phone.code === 2  ? 'border-gray-500 hover:border-gray-400 disabled:hover:border-gray-500' : 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                        address: obj.address.code === 0 ? 'border-red-500 hover:border-red-400 disabled:hover:border-red-500' : obj.address.code === 1 ? 'border-green-500 hover:border-green-400 disabled:hover:border-green-500' : obj.address.code === 2  ? 'border-gray-500 hover:border-gray-400 disabled:hover:border-gray-500' : 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                        fieldA: obj.fieldA.code === 0 ? 'border-red-500 hover:border-red-400 disabled:hover:border-red-500' : obj.fieldA.code === 1 ? 'border-green-500 hover:border-green-400 disabled:hover:border-green-500' : obj.fieldA.code === 2  ? 'border-gray-500 hover:border-gray-400 disabled:hover:border-gray-500' : 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                        fieldB: obj.fieldB.code === 0 ? 'border-red-500 hover:border-red-400 disabled:hover:border-red-500' : obj.fieldB.code === 1 ? 'border-green-500 hover:border-green-400 disabled:hover:border-green-500' : obj.fieldB.code === 2  ? 'border-gray-500 hover:border-gray-400 disabled:hover:border-gray-500' : 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                        fieldC: obj.fieldC.code === 0 ? 'border-red-500 hover:border-red-400 disabled:hover:border-red-500' : obj.fieldC.code === 1 ? 'border-green-500 hover:border-green-400 disabled:hover:border-green-500' : obj.fieldC.code === 2  ? 'border-gray-500 hover:border-gray-400 disabled:hover:border-gray-500' : 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                        fieldD: obj.fieldD.code === 0 ? 'border-red-500 hover:border-red-400 disabled:hover:border-red-500' : obj.fieldD.code === 1 ? 'border-green-500 hover:border-green-400 disabled:hover:border-green-500' : obj.fieldD.code === 2  ? 'border-gray-500 hover:border-gray-400 disabled:hover:border-gray-500' : 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                    } )

                    setWarning( [
                        obj.name.msg,
                        obj.email.msg,
                        obj.phone.msg,
                        obj.address.msg,
                        obj.fieldA.msg,
                        obj.fieldB.msg,
                        obj.fieldC.msg,
                        obj.fieldD.msg
                    ] )
    
                    setDisabled( false )
                    setLoading( false )
                    setPass( false )

                }

            } , 1000 )

        } )
        .catch ( err => {

            setTimeout ( () => {

                console.error( err.message )

                setWarning( [ '* internal server error.' ] )

                setBorder( {
                    name: 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                    email: 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                    phone: 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                    address: 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                    fieldA: 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                    fieldB: 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                    fieldC: 'border-red-200 hover:border-red-200 disabled:hover:border-red-200',
                    fieldD: 'border-red-200 hover:border-red-200 disabled:hover:border-red-200'
                } )

                resetAll()

                setDisabled( false )
                setLoading( false )
                setPass( false )

            } , 1000 )

        } )

        function resetAll () {

            e.target.name.value = ''
            e.target.email.value = ''
            e.target.phone.value = ''
            e.target.address.value = ''
            e.target.fa.value = ''
            e.target.fb.value = ''
            e.target.fc.value = ''
            e.target.fd.value = ''
            e.target.all.checked = true

            setFields( {
                name: '',
                email: '',
                phone: '',
                address: '',
                fieldA: '',
                fieldB: '',
                fieldC: '',
                fieldD: '',
                prefered: 'all' 
            } )

        }

    }

    return (
        <div id='qoute' className='bg-gray-100'>
            <div
                className={ `
                    w-auto mx-5 py-10
                    md:w-2/3 md:mx-auto md:py-20
                ` }
            >

                <div className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
                
                    <div className='block'>
                        <div className='flex flex-col space-y-2'>
                            <h5 className='text-sky-700 text-sm uppercase'>get some professional advice from our engineers.</h5>
                            <h1 className='text-[#111827] text-4xl font-bold'>Energy Solution that fits to my needs</h1>
                            <p className='text-[#111827] py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, itaque eaque error molestiae incidunt cum a nam distinctio temporibus. Laboriosam?</p>
                        </div>
                        <div className='bg-sky-700 h-5 w-5 my-5'></div>
                        <div className='flex flex-col space-y-2'>
                            <h1 className='text-[#111827] text-2xl font-bold'>get in touch.</h1>
                            <p className='text-[#111827] py-5'>We are open between 9am to 6pm, monday to friday. We also offer consultation everyday including weekends except holidays; Call us and we were happy to help you.</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
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
                        onSubmit={ submitRequest }
                        className='flex flex-col space-y-3 bg-white shadow-black/10 shadow-lg drop-shadow-lg rounded p-5 sm:p-10'
                        typeof='submit'
                    >
                        <h1 className='text-sky-700 text-2xl font-medium capitalize'>request a qoute</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <input
                                id='name'
                                onChange={ ( e: any ) => setFields( { ... fields , name: String( e.target.value ).trim() } ) }
                                placeholder='Name'
                                type='text'
                                disabled={ disabled }
                                className={ `bg-transparent ${ border.name } text-gray-950 text-sm border-2 cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-gray-400 disabled:opacity-50` }
                            />
                            <input
                                id='email'
                                onChange={ ( e: any ) => setFields( { ... fields , email: String( e.target.value ).trim() } ) }
                                placeholder='Email'
                                type='email'
                                disabled={ disabled }
                                className={ `bg-transparent ${ border.email } text-gray-950 text-sm border-2 cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-gray-400 disabled:opacity-50` }
                            />
                            <input
                                id='phone'
                                onChange={ ( e: any ) => setFields( { ... fields , phone: String( e.target.value ).trim() } ) }
                                placeholder='Phone'
                                type='number'
                                disabled={ disabled }
                                className={ `bg-transparent ${ border.phone } text-gray-950 text-sm border-2 cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-gray-400 disabled:opacity-50` }
                            />
                            <input
                                id='address'
                                onChange={ ( e: any ) => setFields( { ... fields , address: String( e.target.value ).trim() } ) }
                                placeholder='Address'
                                type='text'
                                disabled={ disabled }
                                className={ `bg-transparent ${ border.address } text-gray-950 text-sm border-2 cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-gray-400 disabled:opacity-50` }
                            />
                        </div>
                        <h1 className='text-sky-700 text-base font-medium capitalize'>System data</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <input
                                id='fa'
                                onChange={ ( e: any ) => setFields( { ... fields , fieldA: String( e.target.value ).trim() } ) }
                                // placeholder='System Installer?'
                                placeholder='Field A'
                                type='text'
                                disabled={ disabled }
                                className={ `bg-transparent ${ border.fieldA } text-gray-950 text-sm border-2 cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-gray-400 disabled:opacity-50` }
                            />
                            <input
                                id='fb'
                                onChange={ ( e: any ) => setFields( { ... fields , fieldB: String( e.target.value ).trim() } ) }
                                // placeholder='Monthly Electric Usage'
                                placeholder='Field B'
                                type='text'
                                disabled={ disabled }
                                className={ `bg-transparent ${ border.fieldB } text-gray-950 text-sm border-2 cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-gray-400 disabled:opacity-50` }
                            />
                            <input
                                id='fc'
                                onChange={ ( e: any ) => setFields( { ... fields , fieldC: String( e.target.value ).trim() } ) }
                                placeholder='Field C'
                                type='text'
                                disabled={ disabled }
                                className={ `bg-transparent ${ border.fieldC } text-gray-950 text-sm border-2 cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-gray-400 disabled:opacity-50` }
                            />
                            <input
                                id='fd'
                                onChange={ ( e: any ) => setFields( { ... fields , fieldD: String( e.target.value ).trim() } ) }
                                placeholder='Field D'
                                type='text'
                                disabled={ disabled }
                                className={ `bg-transparent ${ border.fieldD } text-gray-950 text-sm border-2 cursor-auto outline-none rounded p-4 transition ease-in-out duration-300 hover:border-gray-400 disabled:opacity-50` }
                            />
                            <div className={ `${ warning.length === 0 ? 'hidden' : 'block' } col-span-1 md:col-span-2 bg-red-100 text-red-500 text-xs p-5 rounded` }>
                                {
                                    warning.map( ( arr: string , ind: number ) => (
                                        arr !== ''
                                            ? ( <p key={ ind } >{ arr }</p> )
                                            : ( <p key={ ind } ></p> )
                                     ) )
                                }
                            </div>
                        </div>
                        <h1 className='text-sky-700 text-base font-medium capitalize'>We will contact you via?</h1>
                        <div className='flex items-center space-x-3'>
                            <div className='flex items-center w-max'>
                                <input
                                    onChange={ ( e: any ) => setFields( { ... fields , prefered: 'all' } ) }
                                    type='radio'
                                    id='all'
                                    name='prefered'
                                    disabled={ disabled }
                                    defaultChecked={ true }
                                    className='bg-white border-gray-200 text-gray-950 text-sm border-2 cursor-pointer outline-none rounded p-4 transition ease-in-out duration-300'
                                />
                                <label htmlFor='all' className='text-gray-950 text-sm capitalize ml-1'>both</label>
                            </div>
                            <div className='flex items-center w-max'>
                                <input
                                    onChange={ ( e: any ) => setFields( { ... fields , prefered: 'phone' } ) }
                                    type='radio'
                                    id='telephone'
                                    name='prefered'
                                    disabled={ disabled }
                                    defaultChecked={ false }
                                    className='bg-white border-gray-200 text-gray-950 text-sm border-2 cursor-pointer outline-none rounded p-4 transition ease-in-out duration-300'
                                />
                                <label htmlFor='telephone' className='text-gray-950 text-sm capitalize ml-1'>phone</label>
                            </div>
                            <div className='flex items-center w-max'>
                                <input
                                    onChange={ ( e: any ) => setFields( { ... fields , prefered: 'email' } ) }
                                    type='radio'
                                    id='email'
                                    name='prefered'
                                    disabled={ disabled }
                                    defaultChecked={ false }
                                    className='bg-white border-gray-200 text-gray-950 text-sm border-2 cursor-pointer outline-none rounded p-4 transition ease-in-out duration-300'
                                />
                                <label htmlFor='email' className='text-gray-950 text-sm capitalize ml-1'>email</label>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className={ `flex items-center justify-center ${ pass ? 'bg-green-500 border-green-500 hover:bg-green-500 hover:border-green-500' : 'bg-[#111827] border-[#111827] hover:bg-sky-700 hover:border-sky-700' } text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-sm py-4 w-full transition ease-in-out duration-300 group` }
                            disabled={ disabled }
                        >
                            {
                                loading
                                    ?   <svg
                                            className='h-5 w-5'
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='1em'
                                            height='1em'
                                            viewBox='0 0 24 24'
                                        >
                                            <g stroke='currentColor'>
                                                <circle
                                                    cx='12' cy='12' r='9.5'
                                                    fill='none'
                                                    strokeLinecap='round'
                                                    strokeWidth='3'
                                                >
                                                    <animate
                                                        attributeName='stroke-dasharray'
                                                        calcMode='spline'
                                                        dur='1.5s'
                                                        keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1'
                                                        keyTimes='0;0.475;0.95;1'
                                                        repeatCount='indefinite'
                                                        values='0 150;42 150;42 150;42 150'
                                                    />
                                                    <animate
                                                        attributeName='stroke-dashoffset'
                                                        calcMode='spline'
                                                        dur='1.5s'
                                                        keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1'
                                                        keyTimes='0;0.475;0.95;1'
                                                        repeatCount='indefinite'
                                                        values='0;-16;-59;-59'
                                                    />
                                                </circle>
                                                <animateTransform attributeName='transform' dur='2s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12' />
                                            </g>
                                        </svg>
                                    :   pass
                                            ?   <svg
                                                    className='h-5 w-5'
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                                                    />
                                                </svg>
                                            :   <>
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
                                                </>
                            }
                        </button>
                    </form>
                
                </div>

            </div>
        </div>
    )

}
