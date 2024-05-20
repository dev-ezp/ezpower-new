'use client'

import Link from 'next/link'
import Image from 'next/image'

import Slider from 'react-slick'

type Props = {}

export default function HomeBanner ( props: Props ) {

    const imgSrc: Array<string> = [
        '/assets/content/home/hb-01.png',
        '/assets/content/home/hb-02.png',
        '/assets/content/home/hb-03.png',
        '/assets/content/home/hb-04.png',
        '/assets/content/home/hb-05.png'
    ]

    return (
        <div className='relative h-[580px] lg:h-[720px] overflow-hidden'>
            <Slider
                dots={ false }
                infinite={ true }
                autoplay={ true }
                autoplaySpeed={ 4000 }
                fade={ true }
                speed={ 500 }
                slidesToShow={ 1 }
                slidesToScroll={ 1 }
            >
                {
                    imgSrc.map( ( arr: string , ind: number ) => (
                        <div key={ ind } className='relative h-[1080px] w-[1920px]'>
                            <Image
                                src={ arr }
                                alt='img'
                                style={ {
                                    objectFit: 'cover',
                                    objectPosition: '50% 50'
                                } }
                                priority
                                sizes='(max-width: 1920px) 100vw, (max-width: 1080px) 50vw, 33vw'
                                fill
                            />
                        </div>
                    ) )
                }
            </Slider>
            <div className='absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-black/50'>
                <div className='grid gap-5 mx-5 w-[900px]'>
                    <h1 className='text-white font-thin text-4xl sm:text-5xl lg:text-6xl text-left sm:text-center uppercase'>leading the way to <span className='font-bold'>sustainable</span> and <span className='font-bold'>inclusive</span> energy solutions</h1>
                    <h5 className='text-white font-semibold italic text-sm sm:text-base text-left sm:text-center'>&quot;providing clean energy to everyone.&quot;</h5>
                    <div className='flex justify-start sm:justify-center'>
                        <Link
                            href='/about-us'
                            className='bg-white border-white text-[#111827] text-sm sm:text-base border-2 font-medium uppercase cursor-pointer rounded-sm py-3 sm:py-4 px-5 transition ease-in-out duration-300 hover:bg-[#111827] hover:border-[#111827] hover:text-white'
                        >
                            our company
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
