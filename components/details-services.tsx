'use client'

import Image from 'next/image'

import Slider from 'react-slick'

type Props = { 
    params?: any
    searchParams?: any
}

export default function DetailsServices ( props: Props ) {

    const { params , searchParams } = props

    console.log( params )

    return (
        <div className='bg-white'>
            <div className='mx-96 pt-10 pb-20'>
                
                <div className='grid grid-cols-2 gap-10'>

                    <Slider
                        dots={ false }
                        infinite={ true }
                        autoplay={ true }
                        autoplaySpeed={ 3000 }
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

                    <div className='flex items-center'>
                        <div className='block w-full'>
                            <div className='flex flex-col space-y-2'>
                                <h5 className='text-sky-700 text-sm font-semibold uppercase'>subtitle here</h5>
                                <h1 className='text-[#111827] text-4xl font-bold'>Title here</h1>
                            </div>
                            <br />
                            <div className='bg-sky-700 h-5 w-5'></div>
                            <br />
                            <p className='text-gray-950 font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae delectus saepe incidunt, error aspernatur, dolore cupiditate architecto porro explicabo ex, ut dolor atque recusandae repellendus. Praesentium expedita accusamus earum, est, ipsam eveniet voluptate quod repudiandae sapiente iure odio voluptatibus eaque illum illo magni dolorem, optio iusto suscipit cumque voluptas!
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='block w-full'>
                            <p className='text-gray-950 font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae delectus saepe incidunt, error aspernatur, dolore cupiditate architecto porro explicabo ex, ut dolor atque recusandae repellendus. Praesentium expedita accusamus earum, est, ipsam eveniet voluptate quod repudiandae sapiente iure odio voluptatibus eaque illum illo magni dolorem, optio iusto suscipit cumque voluptas!
                            </p>
                            <br />
                            <p className='text-gray-600 font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde eius illum est, mollitia ea odio obcaecati voluptate porro minus, quis laudantium iste assumenda modi harum eligendi, molestias nam. Quibusdam.
                            </p>
                        </div>
                    </div>

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

            </div>
        </div>
    )

}
