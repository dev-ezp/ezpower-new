'use client'

import Image from 'next/image'
import Link from 'next/link'

import Slider from 'react-slick'

type Props = {}

export default function HomeProjects ( props: Props ) {

    const source: { one: string , two: string , three: string , four: string } = {
        one: '/assets/content/home/hp-01.png',
        two: '/assets/content/home/hp-01.png',
        three: '/assets/content/home/hp-01.png',
        four: '/assets/content/home/hp-01.png'
    }

    return (
        <section className='bg-[#111827]'>
            <div
                className={ `
                    w-auto mx-5 py-10
                    md:w-2/3 md:mx-auto md:py-20
                ` }
            >
                <div className='flex flex-col xl:flex-row justify-center'>                    
                    <div className='grid gap-2 w-full xl:w-2/3'>
                        <h5 className='text-white text-sm uppercase'>our projects.</h5>
                        <h1 className='text-white text-4xl font-bold'>We provide energy solutions across luzon and other parts of the philippines</h1>
                        <p className='text-white py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum quaerat. Voluptatem enim quis fuga? Ipsam reiciendis sint esse itaque voluptas quasi commodi totam officiis nam eius natus, excepturi saepe pariatur, beatae earum, enim harum iste. Voluptatum rerum consequatur quae placeat enim cumque soluta temporibus ipsam, quas, sunt corrupti quos.</p>
                    </div>

                    <div className='flex items-center justify-start xl:justify-center w-full lg:w-1/3'>
                        <Link
                            href='/'
                            className='flex items-center justify-center bg-white border-white text-[#111827] border-2 font-medium uppercase cursor-pointer rounded-sm py-4 px-8 h-max w-full sm:w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700 hover:text-white'
                        >
                            see all projects
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
                
                <div className='py-10'>
                    <Slider
                        infinite={ true }
                        autoplay={ true }
                        autoplaySpeed={ 3000 }
                        speed={ 500 }
                        slidesToShow={ 3 }
                        slidesToScroll={ 1 }
                        responsive={ [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    infinite: true,
                                    dots: true
                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    initialSlide: 2
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ] }
                    >
                        <div className='px-5'>
                            <div className='relative bg-white rounded-sm w-full h-max overflow-hidden'>
                                <Link href={ source.one } className='cursor-pointer'>
                                    <Image
                                        className='rounded-t-sm'
                                        src={ source.one }
                                        alt='img'
                                        height={ 960 }
                                        width={ 520 }
                                        priority={ true }
                                    />
                                </Link>
                                <div className='flex items-center justify-between p-4'>
                                    <div className='grid gap-1 w-full'>
                                        <h5 className='text-[#111827] text-base font-medium w-11/12 truncate'>Project 1</h5>
                                        <p className='text-gray-600 text-xs font-medium w-11/12 truncate'>location</p>
                                    </div>
                                    <Link href='/' className='flex items-center bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-full p-1 w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='1em'
                                            height='1em'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                fill='currentColor'
                                                d='M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z'
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='px-5'>
                            <div className='relative bg-white rounded-sm w-full h-max overflow-hidden'>
                                <Link href={ source.two } className='cursor-pointer'>
                                    <Image
                                        className='rounded-t-sm'
                                        src={ source.two }
                                        alt='img'
                                        height={ 960 }
                                        width={ 520 }
                                        priority={ true }
                                    />
                                </Link>
                                <div className='flex items-center justify-between p-4'>
                                    <div className='grid gap-1 w-full'>
                                        <h5 className='text-[#111827] text-base font-medium w-11/12 truncate'>Project 2</h5>
                                        <p className='text-gray-600 text-xs font-medium w-11/12 truncate'>location</p>
                                    </div>
                                    <Link href='/' className='flex items-center bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-full p-1 w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='1em'
                                            height='1em'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                fill='currentColor'
                                                d='M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z'
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='px-5'>
                            <div className='relative bg-white rounded-sm w-full h-max overflow-hidden'>
                                <Link href={ source.three } className='cursor-pointer'>
                                    <Image
                                        className='rounded-t-sm'
                                        src={ source.three }
                                        alt='img'
                                        height={ 960 }
                                        width={ 520 }
                                        priority={ true }
                                    />
                                </Link>
                                <div className='flex items-center justify-between p-4'>
                                    <div className='grid gap-1 w-full'>
                                        <h5 className='text-[#111827] text-base font-medium w-11/12 truncate'>Project 3</h5>
                                        <p className='text-gray-600 text-xs font-medium w-11/12 truncate'>location</p>
                                    </div>
                                    <Link href='/' className='flex items-center bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-full p-1 w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='1em'
                                            height='1em'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                fill='currentColor'
                                                d='M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z'
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='px-5'>
                            <div className='relative bg-white rounded-sm w-full h-max overflow-hidden'>
                                <Link href={ source.four } className='cursor-pointer'>
                                    <Image
                                        className='rounded-t-sm'
                                        src={ source.four }
                                        alt='img'
                                        height={ 960 }
                                        width={ 520 }
                                        priority={ true }
                                    />
                                </Link>
                                <div className='flex items-center justify-between p-4'>
                                    <div className='grid gap-1 w-full'>
                                        <h5 className='text-[#111827] text-base font-medium w-11/12 truncate'>Project 4</h5>
                                        <p className='text-gray-600 text-xs font-medium w-11/12 truncate'>location</p>
                                    </div>
                                    <Link href='/' className='flex items-center bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-full p-1 w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='1em'
                                            height='1em'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                fill='currentColor'
                                                d='M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z'
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </section>
    )

}

