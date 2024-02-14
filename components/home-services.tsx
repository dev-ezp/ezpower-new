'use client'

import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function HomeServices ( props: Props ) {

    const imgSrc: Array <{ title: string , src: string , content: string }> = [
        {
            src: '/assets/content/home/hs-01.png',
            title: 'Planning and Design',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        },
        {
            src: '/assets/content/home/hs-02.png',
            title: 'Site Survey',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        },
        {
            src: '/assets/content/home/hs-03.png',
            title: 'Testing',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        },
        {
            src: '/assets/content/home/hs-04.png',
            title: 'Thermal Sensing',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        },
        {
            src: '/assets/content/home/hs-05.png',
            title: 'Workforce',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        },
        {
            src: '/assets/content/home/hs-06.png',
            title: 'Consultancy',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        }
    ]

    return (
        <div className='bg-[#111827]'>
            <div className='flex items-center justify-center mx-5 py-10 sm:py-20'>
                <div className='w-full md:w-4/5 xl:w-3/5'>

                    <div className='block'>
                        <div className='grid gap-2'>
                            <h5 className='text-white text-sm uppercase'>our services.</h5>
                            <h1 className='text-white text-4xl font-bold'>We provide quality and professional service</h1>
                        </div>
                        <p className='text-white font-medium py-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate. Minus, laborum quaerat. Voluptatem enim quis fuga? Ipsam reiciendis sint esse itaque voluptas quasi commodi totam officiis nam eius natus, excepturi saepe pariatur, beatae earum, enim harum iste. Voluptatum rerum consequatur quae placeat enim cumque soluta temporibus ipsam, quas, sunt corrupti quos.</p>
                        <div className='flex items-center w-full md:w-max'>
                            <Link
                                href='/'
                                className='flex items-center justify-center bg-white border-white text-[#111827] border-2 font-medium uppercase cursor-pointer rounded-sm py-4 w-40 transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700 hover:text-white'
                            >
                                get a qoute
                            </Link>
                            <div className='mx-2'></div>
                            <Link
                                href='/services'
                                className='flex items-center justify-center bg-transparent border-transparent text-white border-2 font-medium uppercase cursor-pointer rounded-sm py-4 w-40 transition ease-in-out duration-300 hover:border-white'
                            >
                                explore
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

                    <br /><br />

                    <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10'>
                        {
                            imgSrc.map( ( arr: { title: string , src: string , content: string } , ind: number ) => (
                                <div key={ ind } className='bg-white shadow-white/20 shadow-lg drop-shadow-lg rounded-sm w-full'>
                                    <div className='overflow-hidden rounded-t-sm w-full h-max'>
                                        <Link href={ arr.src } className='cursor-pointer'>
                                            <Image
                                                className='transition ease-in-out duration-300 hover:scale-105'
                                                src={ arr.src }
                                                alt='img'
                                                height={ 1920 }
                                                width={ 1080 }
                                                priority
                                            />
                                        </Link>
                                    </div>
                                    <div className='grid gap-3 p-5'>
                                        <h5 className='text-sky-700 text-lg font-bold'>{ arr.title }</h5>
                                        <p className='text-gray-600 text-sm h-20 overflow-y-auto'>{ arr.content }</p>
                                        <Link href='/services/planning-and-design' className='flex items-center bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-sm px-5 py-2 w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
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
                            ) )
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )

}
