'use client'

import Image from 'next/image'

type Props = {}

export default function ServicesBrands ( props: Props ) {

    return (
        <section className='bg-white'>
            <div className={ `
                w-auto mx-5 py-10
                md:w-2/3 md:mx-auto md:py-20
            ` }>

                <div className='flex items-center justify-center w-full pb-10'>
                    <div className='flex flex-col space-y-2 w-[720px]'>
                        <h5 className='text-sky-700 text-center text-sm sm:text-base uppercase'>quality products</h5>
                        <h1 className='text-[#111827] text-center text-2xl sm:text-4xl font-bold'>Our Trusted Brands</h1>
                    </div>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center'>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/deye.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/dyness.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/hoymiles.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/jolywood.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/luxpowertek.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/seplos.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/seraphim.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/solaredge.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/sunpal.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/suntree.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/sunways.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-5'>
                        <Image
                            src='/assets/brands/thinkpower.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                </div>

            </div>
        </section>
    )

}
