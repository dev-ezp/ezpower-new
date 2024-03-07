'use client'

import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function CarbonPlatformContent ( props: Props ) {

    return (
        <section className='bg-white'>
            <div className={ `
                w-auto mx-5 py-10
                md:w-2/3 md:mx-auto md:py-20
            ` }>
                
                <div className='flex justify-center'>
                    <div className='grid gap-2 w-[720px]'>
                        <h5 className='text-sky-700 text-sm font-semibold uppercase text-center'>Clean Energy + Sustainability</h5>
                        <h1 className='text-[#111827] text-4xl font-bold text-center'>Accelerating Carbon Footprint Reduction through projects that generate Carbon Credits</h1>
                    </div>
                </div>

                <br /> <br /> <br />

                <div className='grid grid-cols-1 xl:grid-cols-2'>
                    <Link href='/assets/content/carbon-platform/ca-02.png' className='cursor-pointer flex justify-center xl:justify-end w-full'>
                        <Image
                            src='/assets/content/carbon-platform/ca-02.png'
                            alt='img'
                            height={ 800 }
                            width={ 800 }
                            priority={ true }
                        />
                    </Link>
                    <div className='flex items-center px-0 lg:px-10 py-5 lg:py-10'>
                        <div className='block'>
                            <h5 className='text-sky-700 text-sm font-semibold uppercase'>what is carbon accounting?</h5>
                            <div className='my-2'></div>
                            <h1 className='text-[#111827] text-4xl font-bold'>Helping to fight climate change</h1>
                            <div className='my-10'></div>
                            <p className='text-[#111827] font-medium'>
                                Carbon accounting is a framework of methods to measure and track how much greenhouse gas an organization emits. It can also be used to track projects or actions to reduce emissions in sectors such as forestry or renewable energy. Corporations, cities and other groups use these techniques to help limit climate change.
                            </p>
                            <div className='my-5'></div>
                            <p className='text-[#111827] font-medium'>
                                Organizations will often set an emissions baseline, create targets for reducing emissions, and track progress towards them. The accounting methods enable them to do this in a more consistent and transparent manner.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-2'>
                    <div className='flex items-center px-0 lg:px-10 py-5 lg:py-10 order-last xl:order-first'>
                        <div className='block'>
                            <h5 className='text-sky-700 text-sm font-semibold uppercase'>what is carbon credit?</h5>
                            <div className='my-2'></div>
                            <h1 className='text-[#111827] text-4xl font-bold'>Processing resources can generate carbon footprint</h1>
                            <div className='my-10'></div>
                            <p className='text-[#111827] font-medium'>
                                Carbon credit refers to the amount of carbon equal to one ton of carbon dioxide that has been removed from the atmosphere with the use of clean energy. Every time an organization uses a resource that relies on burning fossil fuels, this process will create carbon emmissions also known as a carbon footprint and when this harmful substance enters the atmosphere it can significatly accelerate climate change. If an organization had 1,000 tons of carbon they needed to offset, they would purchase 1,000 carbon credits.
                            </p>
                            <div className='my-5'></div>
                            <p className='text-[#111827] font-medium'>
                                Purchasing carbon credits can be done by financing projects that reduce or absorb carbon emmissions, this will improve not just the life in the community but also the sustainability of energy resource itself.
                            </p>
                        </div>
                    </div>
                    <Link href='/assets/content/carbon-platform/ca-03.png' className='cursor-pointer flex justify-center xl:justify-start w-full'>
                        <Image
                            src='/assets/content/carbon-platform/ca-03.png'
                            alt='img'
                            height={ 800 }
                            width={ 800 }
                            priority={ true }
                        />
                    </Link>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-2'>
                    <Link href='/assets/content/carbon-platform/ca-04.png' className='cursor-pointer flex justify-center xl:justify-end w-full'>
                        <Image
                            src='/assets/content/carbon-platform/ca-04.png'
                            alt='img'
                            height={ 800 }
                            width={ 800 }
                            priority={ true }
                        />
                    </Link>
                    <div className='flex items-center px-0 lg:px-10 py-5 lg:py-10'>
                        <div className='block'>
                            <h5 className='text-sky-700 text-sm font-semibold uppercase'>credits as digital tokens</h5>
                            <div className='my-2'></div>
                            <h1 className='text-[#111827] text-4xl font-bold'>We had better idea</h1>
                            <div className='my-10'></div>
                            <p className='text-[#111827] font-medium'>
                                Carbon Credits is not a tangible asset but a concept of financing. Converting it to a digital token is one of many ways to make it viable which can be valued as a legitimate asset that can be sold to the market.
                            </p>
                            <div className='my-5'></div>
                            <p className='text-[#111827] font-medium'>
                                By leveraging open-sourced software and blockchain technology, this idea has great potential to be mainstream.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='relative w-full'>
                    <Link href='/assets/content/carbon-platform/ca-05.png' className='cursor-pointer'>
                        <Image
                            src='/assets/content/carbon-platform/ca-05.png'
                            alt='img'
                            height={ 1080 }
                            width={ 1920 }
                            priority={ true }
                        />
                    </Link>
                    <div className='hidden xl:block absolute top-0 bottom-0 bg-black/50'>
                        <div className='flex items-center h-full px-10'>
                            <div className='grid gap-2'>
                                <h5 className='text-white text-sm font-semibold uppercase'>the loop continues as we develop</h5>
                                <h1 className='text-white text-4xl font-bold'>The Cycle of Sustainability</h1>
                                <p className='text-white font-medium'>Clean Energy Projects that are funded by purchasing carbon credits will generate new carbon credits to fund more projects in the future. This cycle can provide not just for sustainable life in the community but can also accelerate the adoption of clean and renewable energy.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex xl:hidden items-center px-0 lg:px-10 py-5 lg:py-10'>
                    <div className='block'>
                        <h5 className='text-sky-700 text-sm font-semibold uppercase'>the loop continues as we develop</h5>
                        <div className='my-2'></div>
                        <h1 className='text-[#111827] text-4xl font-bold'>The Cycle of Sustainability</h1>
                        <div className='my-10'></div>
                        <p className='text-[#111827] font-medium'>
                            Clean Energy Projects that are funded by purchasing carbon credits will generate new carbon credits to fund more projects in the future. This cycle can provide not just for sustainable life in the community but can also accelerate the adoption of clean and renewable energy.
                        </p>
                    </div>
                </div>

                <br /> <br /> <br />

                <div className='flex justify-center'>
                    <div className='block w-[720px]'>
                        <h5 className='text-sky-700 text-sm font-semibold text-center uppercase'>join us!</h5>
                        <div className='my-2'></div>
                        <h1 className='text-[#111827] text-4xl font-bold text-center pb-5'>Help us develop this technology</h1>
                        <div className='flex justify-center'>
                            <div className='bg-sky-700 h-5 w-5'></div>
                        </div>
                        <p className='text-[#111827] font-medium text-center pt-5'>We at EZPower is determined to make this idea possible, therefore we invite the government, businesses, organizations and professionals to work with us in this project.</p>
                    </div>
                </div>

                <br /> <br /> <br /> <br /> <br />

                <div className='flex justify-center'>
                    <div className='bg-sky-700 h-40 w-1'></div>
                </div>

            </div>
        </section>
    )

}
