'use client'

import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function HomeServices ( props: Props ) {

    const source: Array <{ img: string , service_name: string , content: string }> = [
        {
            img: '/assets/content/home/hs-01.png',
            service_name: 'planning and design',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        },
        {
            img: '/assets/content/home/hs-02.png',
            service_name: 'site survey',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        },
        {
            img: '/assets/content/home/hs-03.png',
            service_name: 'testing',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        },
        {
            img: '/assets/content/home/hs-04.png',
            service_name: 'analysis',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        },
        {
            img: '/assets/content/home/hs-05.png',
            service_name: 'skilled workforce',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        },
        {
            img: '/assets/content/home/hs-06.png',
            service_name: 'consultancy',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate.'
        }
    ]

    return (
        <section id='services' className='bg-[#111827]'>
            <div
                className={ `
                    w-auto mx-5 py-10
                    md:w-2/3 md:mx-auto md:py-20
                ` }
            >

                <div className='grid gap-2'>
                    <h5 className='text-white text-sm uppercase'>our services.</h5>
                    <h1 className='text-white text-4xl font-bold'>Cost Effective and Responsive</h1>
                </div>

                <div className='my-10'></div>

                <div className='grid gap-5'>
                    <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere mollitia voluptatem quae, ipsum voluptate. Minus, laborum quaerat. Voluptatem enim quis fuga? Ipsam reiciendis sint esse itaque voluptas quasi commodi totam officiis nam eius natus, excepturi saepe pariatur, beatae earum, enim harum iste. Voluptatum rerum consequatur quae placeat enim cumque soluta temporibus ipsam, quas, sunt corrupti quos.</p>
                    <div className='flex items-center w-full md:w-max'>
                        <Link
                            href='#qoute'
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

                <div className='my-10'></div>

                <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10'>
                    {
                        source.map( ( arr: { img: string , service_name: string , content: string } , ind: number ) => (
                            <div key={ ind } className='bg-white shadow-white/20 shadow-lg drop-shadow-lg w-full'>
                                <div className='relative overflow-hidden w-full h-max'>
                                    <Link href={ arr.img } className='cursor-pointer'>
                                        <Image
                                            className='transition ease-in-out duration-300 hover:scale-105'
                                            src={ arr.img }
                                            alt='img'
                                            height={ 1920 }
                                            width={ 1080 }
                                            priority
                                        />
                                    </Link>
                                    <div className='absolute left-0 right-0 bottom-0 bg-black/50 p-5'>
                                        <h5 className='text-white font-semibold capitalize'>{ arr.service_name }</h5>
                                    </div>
                                </div>
                                <div className='grid gap-3 p-5'>
                                    {/* <p className='text-gray-600 flex items-center text-sm h-20 overflow-y-auto'>{ arr.content }</p> */}
                                    <div className='bg-gray-200 rounded-full w-full h-0.5'></div>
                                    <div className='flex justify-center'>                                         
                                        <Link href={ `/services/${ arr.service_name.replace( /\s/g , '-' ) }` } className='flex items-center text-[#111827] text-sm font-medium uppercase cursor-pointer rounded-sm px-5 py-2 w-max transition ease-in-out duration-300 hover:bg-gray-200 hover:border-gray-200 group'>
                                            learn more
                                            <div className='relative'>                                                 
                                                <svg
                                                    className='h-5 w-5 ml-2 group-hover:animate-ping'
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
                                                    className='h-5 w-5 ml-2 absolute top-0'
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
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) )
                    }
                </div>

            </div>
        </section>
    )

}
