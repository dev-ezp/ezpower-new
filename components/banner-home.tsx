'use client'

import Link from 'next/link'
import Image from 'next/image'

import Slider from 'react-slick'

type Props = {}

export default function BannerHome ( props: Props ) {

    return (
        <div className='relative z-10 h-[820px]'>

            <div className='absolute z-10 top-0 h-full w-full overflow-hidden'>
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
                            src='/assets/1.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div>
                        <Image
                            src='/assets/2.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div>
                        <Image
                            src='/assets/3.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div>
                        <Image
                            src='/assets/4.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div>
                        <Image
                            src='/assets/5.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                </Slider>
            </div>
            
            <div className='relative z-20 flex flex-col justify-center items-center space-y-5 bg-black/50 h-full'>
                <h1 className='text-white font-thin text-6xl uppercase'>leading the way to <span className='font-bold'>sustainable</span></h1>
                <h1 className='text-white font-thin text-6xl uppercase'>and <span className='font-bold'>inclusive</span> energy solution</h1>
                <h5 className='text-white font-semibold italic'>
                    &quot;Providing clean and safe energy for everyone.&quot;
                </h5>
                <div className='flex items-center space-x-10'>
                    <Link
                        href='/'
                        className='bg-white border-white text-[#111827] border-2 font-medium uppercase cursor-pointer rounded-sm py-4 px-8 transition ease-in-out duration-300 hover:bg-[#111827] hover:border-[#111827] hover:text-white'
                    >
                        download our vcard
                    </Link>
                </div>
            </div>

        </div>
    )

}
