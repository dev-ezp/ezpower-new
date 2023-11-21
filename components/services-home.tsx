'use client'

import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function ServicesHome ( props: Props ) {

    const source: { one: string , two: string , three: string , four: string } = {
        one: '/assets/1.png',
        two: '/assets/2.png',
        three: '/assets/3.png',
        four: '/assets/4.png'
    }

    return (
        <div className='bg-[#111827]'>
            <div className='mx-96 py-20'>

                <div className='flex items-center justify-between w-full pb-10'>
                    <div className='flex flex-col space-y-2 w-[720px]'>
                        <h5 className='text-white text-sm font-semibold uppercase'>our services.</h5>
                        <h1 className='text-white text-4xl font-bold'>We provide quality and professional service</h1>
                        <p className='text-white font-medium py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum quaerat. Voluptatem enim quis fuga? Ipsam reiciendis sint esse itaque voluptas quasi commodi totam officiis nam eius natus, excepturi saepe pariatur, beatae earum, enim harum iste. Voluptatum rerum consequatur quae placeat enim cumque soluta temporibus ipsam, quas, sunt corrupti quos.</p>
                    </div>
                    <div className='flex flex-col space-y-5 items-center justify-center p-16 h-full w-max'>
                        <Link
                            href='/'
                            className='bg-white border-white text-[#111827] border-2 font-medium uppercase cursor-pointer rounded-sm py-4 px-8 transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700 hover:text-white'
                        >
                            get a qoute
                        </Link>
                        <Link
                            href='/'
                            className='flex items-center bg-transparent border-transparent text-white border-2 font-medium uppercase cursor-pointer py-4 transition ease-in-out duration-300 hover:border-b-white'
                        >
                            explore more
                            <svg
                                className='h-5 w-5 ml-2'
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
                        </Link>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-8'>
                    <div className='relative bg-white shadow-white/20 shadow-lg drop-shadow-lg rounded-sm w-full h-[480px] overflow-hidden'>
                        <Link href={ source.one } className='cursor-pointer'>
                            <Image
                                className='rounded-t-sm transition ease-in-out duration-300 hover:scale-105'
                                src={ source.one }
                                alt='img'
                                height={ 960 }
                                width={ 520 }
                                priority={ true }
                            />
                        </Link>
                        <div className='p-4'>
                            <h5 className='text-[#111827] text-lg font-medium'>Planning and Design</h5>
                            <div className='bg-sky-700 h-2 w-2 my-4'></div>
                            <p className='text-gray-600 text-sm font-medium mb-4 h-44 overflow-y-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque, consequuntur distinctio eligendi molestiae velit magni? Deserunt reiciendis necessitatibus sit odit, praesentium fugit qui provident nihil placeat iusto sint nulla!</p>
                        </div>
                        <Link href='/' className='absolute left-4 bottom-4 flex items-center bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-sm px-5 py-2 w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
                            learn more
                            <svg
                                className='h-4 w-4 ml-2'
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
                        </Link>
                    </div>
                    <div className='relative bg-white shadow-white/20 shadow-lg drop-shadow-lg rounded-sm w-full h-[480px] overflow-hidden'>
                        <Link href={ source.two } className='cursor-pointer'>
                            <Image
                                className='rounded-t-sm transition ease-in-out duration-300 hover:scale-105'
                                src={ source.two }
                                alt='img'
                                height={ 960 }
                                width={ 520 }
                                priority={ true }
                            />
                        </Link>
                        <div className='p-4'>
                            <h5 className='text-[#111827] text-lg font-medium'>Site Survey</h5>
                            <div className='bg-sky-700 h-2 w-2 my-4'></div>
                            <p className='text-gray-600 text-sm font-medium mb-4 h-44 overflow-y-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque, consequuntur distinctio eligendi molestiae velit magni? Deserunt reiciendis necessitatibus sit odit, praesentium fugit qui provident nihil placeat iusto sint nulla!</p>
                        </div>
                        <Link href='/' className='absolute left-4 bottom-4 flex items-center bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-sm px-5 py-2 w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
                            learn more
                            <svg
                                className='h-4 w-4 ml-2'
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
                        </Link>
                    </div>
                    <div className='relative bg-white shadow-white/20 shadow-lg drop-shadow-lg rounded-sm w-full h-[480px] overflow-hidden'>
                        <Link href={ source.three } className='cursor-pointer'>
                            <Image
                                className='rounded-t-sm transition ease-in-out duration-300 hover:scale-105'
                                src={ source.three }
                                alt='img'
                                height={ 960 }
                                width={ 520 }
                                priority={ true }
                            />
                        </Link>
                        <div className='p-4'>
                            <h5 className='text-[#111827] text-lg font-medium'>System Qoutation</h5>
                            <div className='bg-sky-700 h-2 w-2 my-4'></div>
                            <p className='text-gray-600 text-sm font-medium mb-4 h-44 overflow-y-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque, consequuntur distinctio eligendi molestiae velit magni? Deserunt reiciendis necessitatibus sit odit, praesentium fugit qui provident nihil placeat iusto sint nulla!</p>
                        </div>
                        <Link href='/' className='absolute left-4 bottom-4 flex items-center bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-sm px-5 py-2 w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
                            learn more
                            <svg
                                className='h-4 w-4 ml-2'
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
                        </Link>
                    </div>
                    <div className='relative bg-white shadow-white/20 shadow-lg drop-shadow-lg rounded-sm w-full h-[480px] overflow-hidden'>
                        <Link href={ source.four } className='cursor-pointer'>
                            <Image
                                className='rounded-t-sm transition ease-in-out duration-300 hover:scale-105'
                                src={ source.four }
                                alt='img'
                                height={ 960 }
                                width={ 520 }
                                priority={ true }
                            />
                        </Link>
                        <div className='p-4'>
                            <h5 className='text-[#111827] text-lg font-medium'>Testing</h5>
                            <div className='bg-sky-700 h-2 w-2 my-4'></div>
                            <p className='text-gray-600 text-sm font-medium mb-4 h-44 overflow-y-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque, consequuntur distinctio eligendi molestiae velit magni? Deserunt reiciendis necessitatibus sit odit, praesentium fugit qui provident nihil placeat iusto sint nulla!</p>
                        </div>
                        <Link href='/' className='absolute left-4 bottom-4 flex items-center bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-sm px-5 py-2 w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
                            learn more
                            <svg
                                className='h-4 w-4 ml-2'
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
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )

}
