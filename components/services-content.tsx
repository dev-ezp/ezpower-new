'use client'

import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function ServicesContent ( props: Props ) {

    const source: Array<{ img: string , service_name: string , content: string }> = [
        {
            img: '/assets/content/services/sb-01.png',
            service_name: 'planning and design',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        },
        {
            img: '/assets/content/services/sb-02.png',
            service_name: 'site survey',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        },
        {
            img: '/assets/content/services/sb-03.png',
            service_name: 'testing',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        },
        {
            img: '/assets/content/services/sb-04.png',
            service_name: 'analysis',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        },
        {
            img: '/assets/content/services/sb-05.png',
            service_name: 'skilled workforce',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        },
        {
            img: '/assets/content/services/sb-06.png',
            service_name: 'system quotation',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        },
        {
            img: '/assets/content/services/sb-07.png',
            service_name: 'consultancy',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        },
        {
            img: '/assets/content/services/sb-08.png',
            service_name: 'customer-support',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        }
    ]

    return (
        <section className='bg-white'>
            <div className={ `
                    w-auto mx-5 py-10
                    md:w-2/3 md:mx-auto md:py-20
            ` }>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10'>

                    <div className='bg-white w-full h-full'>

                        <div className='flex flex-col justify-center h-full space-y-2'>
                            <h5 className='text-sky-700 text-sm sm:text-base uppercase'>subtitle here</h5>
                            <h1 className='text-[#111827] text-2xl sm:text-4xl font-bold'>Title Here</h1>
                            <p className='text-[#111827] text-sm sm:text-base py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga commodi eum ratione nulla fugit odio magnam praesentium autem impedit vel quasi quae similique dolore non quo eaque explicabo qui doloribus unde officiis, aspernatur molestias nostrum repellendus. Ad blanditiis ab voluptatum?</p>
                        </div>

                    </div>
                    {
                        source.map( ( arr: { img: string , service_name: string , content: string } , ind: number ) => (
                            <div key={ ind } className='relative bg-white w-full shadow-black/20 shadow-2xl rounded-sm transition ease-in-out duration-300 group hover:bg-[#111827]'>
                                <div className='h-max overflow-hidden rounded-t-sm'>
                                    <Link href={ arr.img } className='cursor-pointer'>
                                        <Image
                                            className='rounded-t-sm transition ease-in-out duration-300 hover:scale-105'
                                            src={ arr.img }
                                            alt='img'
                                            height={ 960 }
                                            width={ 520 }
                                            priority={ true }
                                        />
                                    </Link>
                                </div>
                                <div className='p-4'>
                                    <h5 className='text-[#111827] text-base sm:text-lg font-medium capitalize group-hover:text-white'>{ arr.service_name }</h5>
                                    <div className='bg-sky-700 h-2 w-2 my-4 group-hover:bg-white'></div>
                                    <p className='text-gray-600 text-sm pr-3 h-32 overflow-y-auto group-hover:text-white'>{ arr.content }</p>
                                </div>
                                <Link href={ `/services/${ arr.service_name.replace( /\s/g , '-' ) }` } className='flex items-center bg-[#111827] text-white text-sm font-medium uppercase cursor-pointer rounded-sm px-5 py-3 mx-4 mb-4 w-max transition ease-in-out duration-300 group-hover:bg-white group-hover:text-[#111827] group'>
                                    details
                                    <div className='relative ml-2'>
                                        <svg
                                            className='h-4 w-4 group-hover:animate-ping'
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
                                            className='h-4 w-4 absolute top-0'
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
                        ) )
                    }
                </div>

            </div>
        </section>
    )

}
