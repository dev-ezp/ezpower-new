'use client'

import Link from 'next/link'

type Props = {}

export default function InternalServerError ( props: Props ) {

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0'>
            <div className='flex items-center justify-center h-full w-full'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-gray-600 text-8xl font-semibold'>500</h1>
                    
                    <div className='my-2'></div>
                    
                    <div className='bg-red-500 text-white text-lg flex items-center rounded-full py-1 px-5'>
                        <svg
                            className='h-8 w-8'
                            xmlns='http://www.w3.org/2000/svg'
                            width='1em'
                            height='1em'
                            viewBox='0 0 256 256'
                        >
                            <path
                                fill='currentColor'
                                d='M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 130.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32L139.31 128Z'
                            />
                        </svg>
                        <div className='mx-1'></div>
                        <h2 className='font-semibold'>Internal server error</h2>
                    </div>
                    
                    <h2 className='text-gray-600 font-thin my-5'>There was a problem connecting to the server.</h2>
                
                    <div className='bg-gradient-to-r from-red-500 to-red-400 p-1 w-16'></div>

                    <div className='my-3'></div>

                    <Link href='https://www.google.com' className='text-gray-300 outline-none cursor-pointer transition ease-in-out duration-300 hover:text-red-500'>
                        <svg
                            className='h-7 w-7'
                            xmlns='http://www.w3.org/2000/svg'
                            width='1em'
                            height='1em'
                            viewBox='0 0 56 56'
                        >
                            <path
                                fill='currentColor'
                                fillRule='evenodd'
                                d='M28.458 5c6.167 0 11.346 2.2 15.368 5.804l.323.295l-6.62 6.464c-1.695-1.59-4.666-3.493-9.07-3.493c-6.204 0-11.47 4.093-13.372 9.749c-.47 1.46-.756 3.023-.756 4.64c0 1.615.287 3.18.782 4.639c1.877 5.656 7.142 9.748 13.345 9.748c3.347 0 5.928-.886 7.881-2.176l.251-.17l.307-.222c2.813-2.108 4.144-5.084 4.46-7.169l.03-.22h-12.93v-8.705h22.025c.339 1.46.495 2.867.495 4.795c0 7.142-2.554 13.163-6.985 17.255c-3.884 3.597-9.201 5.682-15.535 5.682c-9.031 0-16.85-5.102-20.772-12.57l-.184-.358l-.222-.457A23.45 23.45 0 0 1 5 28.458c0-3.6.827-7.01 2.28-10.073l.222-.457l.184-.357C11.608 10.1 19.426 5 28.458 5'
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )

}
