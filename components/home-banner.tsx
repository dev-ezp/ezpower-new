'use client'

import Link from 'next/link'
import Image from 'next/image'

import Slider from 'react-slick'

type Props = {}

export default function HomeBanner ( props: Props ) {

    const source: { one: string , two: string , three: string , four: string , five: string } = {
        one: '/assets/content/1.png',
        two: '/assets/content/2.png',
        three: '/assets/content/3.png',
        four: '/assets/content/4.png',
        five: '/assets/content/5.png'
    }

    return (
        <div className='relative h-[720px] w-full overflow-hidden'>
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
                <div>
                    <Image
                        src={ source.one }
                        alt='img'
                        height={ 1080 }
                        width={ 1920 }
                        priority={ true }
                    />
                </div>
                <div>
                    <Image
                        src={ source.two }
                        alt='img'
                        height={ 1080 }
                        width={ 1920 }
                        priority={ true }
                    />
                </div>
                <div>
                    <Image
                        src={ source.three }
                        alt='img'
                        height={ 1080 }
                        width={ 1920 }
                        priority={ true }
                    />
                </div>
                <div>
                    <Image
                        src={ source.four }
                        alt='img'
                        height={ 1080 }
                        width={ 1920 }
                        priority={ true }
                    />
                </div>
                <div>
                    <Image
                        src={ source.five }
                        alt='img'
                        height={ 1080 }
                        width={ 1920 }
                        priority={ true }
                    />
                </div>
            </Slider>
            <div className='absolute left-0 top-0 right-0 bottom-0 bg-black/50'>
                <div className='flex flex-col space-y-5 items-center justify-center h-full'>
                    <h1 className='text-white font-thin text-6xl uppercase'>leading the way to <span className='font-bold'>sustainable</span></h1>
                    <h1 className='text-white font-thin text-6xl uppercase'>and <span className='font-bold'>inclusive</span> energy solution</h1>
                    <h5 className='text-white font-semibold italic'>
                        &quot;Providing clean and safe energy for everyone.&quot;
                    </h5>
                    {/* <div className='flex items-center space-x-10'>
                        <Link
                            href='/'
                            className='bg-white border-white text-[#111827] border-2 font-medium uppercase cursor-pointer rounded-sm py-4 px-8 transition ease-in-out duration-300 hover:bg-[#111827] hover:border-[#111827] hover:text-white'
                        >
                            download our vcard
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )

}
