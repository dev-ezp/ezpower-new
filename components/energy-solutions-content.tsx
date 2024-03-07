'use client'

import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function EnergySolutionsContent ( props: Props ) {

    const source: Array<{ img: string , solution: string , content: string }> = [
        {
            img: '/assets/content/energy-solutions/eb-01.png',
            solution: 'commercial and industrial',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        },
        {
            img: '/assets/content/energy-solutions/eb-02.png',
            solution: 'home solutions',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        },
        {
            img: '/assets/content/energy-solutions/eb-03.png',
            solution: 'community development',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?',
        }
    ]

    return (
        <section className='bg-white'>
            <div className={ `
                w-auto mx-5 py-10
                md:w-2/3 md:mx-auto md:py-20
            ` }>

                <div className='flex flex-col space-y-2 w-full lg:w-[720px]'>
                    <h5 className='text-sky-700 text-sm font-semibold uppercase'>subtitle here</h5>
                    <h1 className='text-[#111827] text-4xl font-bold'>Title Here</h1>
                    <p className='text-[#111827] font-medium pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in quod nobis ab molestias molestiae modi expedita, placeat, cum fuga reprehenderit totam, quaerat aliquid aut ex repellendus aliquam! Eveniet, nihil.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 py-20'>
                    {
                        source.map( ( arr: { img: string , solution: string , content: string } , ind: number ) => (
                            <div key={ ind } className='relative bg-white w-full h-[480px] shadow-black/20 shadow-2xl rounded-sm transition ease-in-out duration-300 group hover:bg-[#111827]'>
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
                                    <h5 className='text-[#111827] text-lg font-medium capitalize group-hover:text-white'>{ arr.solution }</h5>
                                    <div className='bg-sky-700 h-2 w-2 my-4 group-hover:bg-white'></div>
                                    <p className='text-gray-600 text-sm font-medium mb-4 h-44 overflow-y-auto group-hover:text-white'>{ arr.content }</p>
                                </div>
                                <Link href={ `/energy-solutions/${ arr.solution.replace( /\s/g , '-' ) }` } className='absolute left-4 bottom-4 flex items-center bg-[#111827] text-white text-sm font-medium uppercase cursor-pointer rounded-sm px-5 py-2 w-max transition ease-in-out duration-300 group-hover:bg-white group-hover:text-[#111827] group'>
                                    learn more
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
