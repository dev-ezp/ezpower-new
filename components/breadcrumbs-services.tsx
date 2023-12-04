'use client'

import Link from 'next/link'

type Props = { 
    params?: any
    searchParams?: any
}

export default function BreadcrumbsServices ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className='bg-white'>
            <div className='mx-96 pt-10'>
                
                <div className='flex items-center h-full'>
                    <Link href='/' className='flex items-center justify-center bg-white border-gray-200 text-[#111827] text-sm font-medium uppercase rounded-l h-10 px-2 border-y-2 border-l-2 transition ease-in-out duration-300 hover:bg-[#111827] hover:border-[#111827] hover:text-white'>
                        <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            width='1em' height='1em'
                            viewBox='0 0 24 24'
                        >
                            <path fill='currentColor' d='M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z' />
                        </svg>
                    </Link>
                    <Link href='/services' className='flex items-center justify-center bg-white border-gray-200 text-[#111827] text-sm font-medium uppercase h-10 px-4 border-y-2 border-l-2 transition ease-in-out duration-300 hover:bg-[#111827] hover:border-[#111827] hover:text-white'>
                        <svg
                            className='h-6 w-6 mr-1'
                            xmlns='http://www.w3.org/2000/svg'
                            width='1em' height='1em'
                            viewBox='0 0 24 24'
                        >
                            <path fill='currentColor' d='m14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 0 0-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm13.11 7.67l-.96-.74c.02-.14.04-.29.04-.44c0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 0 0-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 0 0-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 0 0 0 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 1 1 .001-2.701a1.35 1.35 0 0 1-.001 2.701z' />
                        </svg>
                        services
                    </Link>
                    <div className='flex items-center justify-center bg-white border-gray-200 text-gray-400 text-sm font-medium uppercase h-10 px-4 rounded-r border-2'>
                        { params.route }
                    </div>
                </div>

            </div>
        </div>
    )

} 
