'use client'

import Image from 'next/image'

type Props = {}

export default function ServicesBrands ( props: Props ) {

    return (
        <div id='brands' className='bg-white'>
            <div className='mx-96 py-20'>

                <div className='flex items-center justify-center w-full pb-10'>
                    <div className='flex flex-col space-y-2 w-[720px]'>
                        <h5 className='text-sky-700 text-sm text-center font-semibold uppercase'>quality products</h5>
                        <h1 className='text-[#111827] text-4xl text-center font-bold'>Our Trusted Brands</h1>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-5 items-center'>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/deye.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/dyness.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/hoymiles.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/jolywood.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/luxpowertek.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/seplos.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/seraphim.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/solaredge.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/sunpal.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/suntree.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/sunways.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                    <div className='p-10'>
                        <Image
                            src='/assets/brands/thinkpower.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                        />
                    </div>
                </div>

            </div>
        </div>
    )

}
