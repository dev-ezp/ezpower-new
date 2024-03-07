'use client'

import Image from 'next/image'
import Link from 'next/link'

import Slider from 'react-slick'

type Props = {}

export default function EnergySolutionsOthers ( props: Props ) {

    return (
        <section className='bg-[#111827]'>
            <div className={ `
                w-auto mx-5 py-10
                md:w-2/3 md:mx-auto md:py-20
            ` }>

                <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-20'>
                    <div className='flex flex-col space-y-2'>
                        <h5 className='text-white text-sm font-semibold uppercase'>clean energy everywhere</h5>
                        <h1 className='text-white text-4xl font-bold'>We harness Clean Energy</h1>
                        <p className='text-white font-medium py-5'>&#40;&#34;documented content for energy solutions aside from solar ex: hydroelectric or windmills&#34;&#41; Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum quaerat. Voluptatem enim quis fuga? Ipsam reiciendis sint esse itaque voluptas quasi commodi totam officiis nam eius natus, excepturi saepe pariatur, beatae earum, enim harum iste. Voluptatum rerum consequatur quae placeat enim cumque soluta temporibus ipsam, quas, sunt corrupti quos.</p>
                    </div>

                    <Image
                        src='/assets/content/energy-solutions/ea-01.png'
                        alt='img'
                        height={ 360 }
                        width={ 480 }
                    />
                </div>

            </div>
        </section>
    )

}
