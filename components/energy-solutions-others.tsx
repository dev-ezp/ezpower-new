'use client'

import Image from 'next/image'
import Link from 'next/link'

import Slider from 'react-slick'

type Props = {}

export default function EnergySolutionsOthers ( props: Props ) {

    const source: { one: string , two: string , three: string , four: string } = {
        one: '/assets/1.png',
        two: '/assets/2.png',
        three: '/assets/3.png',
        four: '/assets/4.png'
    }

    return (
        <div className='bg-[#111827]'>
            <div className='mx-96 py-20'>

                <div className='flex items-center justify-between space-x-20'>
                    <div className='flex flex-col space-y-2'>
                        <h5 className='text-white text-sm font-semibold uppercase'>clean energy everywhere</h5>
                        <h1 className='text-white text-4xl font-bold'>We harness Clean Energy</h1>
                        <p className='text-white font-medium py-5'>&#40;&#34;documented content for energy solutions aside from solar ex: hydroelectric or windmills&#34;&#41; Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum quaerat. Voluptatem enim quis fuga? Ipsam reiciendis sint esse itaque voluptas quasi commodi totam officiis nam eius natus, excepturi saepe pariatur, beatae earum, enim harum iste. Voluptatum rerum consequatur quae placeat enim cumque soluta temporibus ipsam, quas, sunt corrupti quos.</p>
                    </div>

                    <div className='w-[360px]'>
                        <Slider
                            dots={ false }
                            infinite={ true }
                            autoplay={ true }
                            autoplaySpeed={ 4000 }
                            fade={ true }
                            arrows={ false }
                            speed={ 500 }
                            slidesToShow={ 1 }
                            slidesToScroll={ 1 }
                        >
                            <div>
                                <Image
                                    src='/assets/1.png'
                                    alt='img'
                                    height={ 360 }
                                    width={ 480 }
                                />
                            </div>
                            <div>
                                <Image
                                    src='/assets/2.png'
                                    alt='img'
                                    height={ 360 }
                                    width={ 480 }
                                />
                            </div>
                            <div>
                                <Image
                                    src='/assets/3.png'
                                    alt='img'
                                    height={ 360 }
                                    width={ 480 }
                                />
                            </div>
                            <div>
                                <Image
                                    src='/assets/4.png'
                                    alt='img'
                                    height={ 360 }
                                    width={ 480 }
                                />
                            </div>
                            <div>
                                <Image
                                    src='/assets/5.png'
                                    alt='img'
                                    height={ 360 }
                                    width={ 480 }
                                />
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className='text-center text-white text-xs font-thin italic'>add more documented content here if necessary</div>

            </div>
        </div>
    )

}
