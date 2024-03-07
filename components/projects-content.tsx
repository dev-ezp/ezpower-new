'use client'

import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function ProjectsContent ( props: Props ) {

    const source: Array<{ img: string , project_title: string , location: string }> = [
        {
            img: '/assets/content/projects/pb-01.png',
            project_title: 'Project Title',
            location: 'location',
        },
        {
            img: '/assets/content/projects/pb-02.png',
            project_title: 'Project Title',
            location: 'location',
        },
        {
            img: '/assets/content/projects/pb-03.png',
            project_title: 'Project Title',
            location: 'location',
        },
        {
            img: '/assets/content/projects/pb-04.png',
            project_title: 'Project Title',
            location: 'location',
        },
        {
            img: '/assets/content/projects/pb-05.png',
            project_title: 'Project Title',
            location: 'location',
        },
        {
            img: '/assets/content/projects/pb-06.png',
            project_title: 'Project Title',
            location: 'location',
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

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 py-10 lg:py-20'>
                    {
                        source.map( ( arr: { img: string , project_title: string , location: string } , ind: number ) => (
                            <div key={ ind } className='relative bg-white shadow-black/20 shadow-2xl rounded-sm group transition ease-in-out duration-300'>
                                <Link href={ arr.img } className='cursor-pointer'>
                                    <Image
                                        className='rounded-sm transition ease-in-out duration-300 hover:scale-105'
                                        src={ arr.img }
                                        alt='img'
                                        height={ 960 }
                                        width={ 520 }
                                        priority={ true }
                                    />
                                </Link>
                                <div className='absolute bottom-0 bg-black/50 w-full h-20 p-5 rounded-b-sm transition-all ease-in-out duration-300 group group-hover:rounded-xl'>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='grid'>
                                            <h1 className='text-white font-semibold'>{ arr.project_title }</h1>
                                            <p className='text-white text-xs truncate'>{ arr.location }</p>
                                        </div>

                                        <Link href={ `/projects/${ ind }` } className='text-white cursor-pointer rounded-sm transition ease-in-out duration-300 group'>
                                            <div className='relative ml-2'>
                                                <svg
                                                    className='h-8 w-8 group-hover:animate-ping'
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
                                                    className='h-8 w-8 absolute top-0'
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