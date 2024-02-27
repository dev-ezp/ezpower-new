'use client'

import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function AboutUsContent ( props: Props ) {

    return (
        <div id='goals' className='bg-white'>
            <div className='mx-96 py-20'>

                <div className='flex start'>
                    <div className='grid gap-5 w-full'>
                        <p className='text-gray-950'>
                            Established on October of 2018, EZ Power by Edge-Systems Engineering Services had humble beginnings and modest resources but also was coming from solid grounds with its founder Engr. Edzel Galguerra, who had progressive 15 years career in design and development of electronics and power systems for global markets.
                        </p>
                        <p className='text-gray-600'>
                            We are motivated by the belief that the next big impact to the economy will be defined by Energy, Environment and Efficiency on which the company was also founded for.
                        </p>
                    </div>
                </div>

                <br /> <br />

                <div className='grid gap-2'>
                    <h1 className='text-[#111827] text-4xl font-bold'>Our Vision</h1>
                    <p className='text-gray-950 py-5'>
                        we provide innovative and high-quality yet affordable clean energy solutions to everyone: households, businesses, communities, governments and agriculture to reduce their dependence on grid electricity powered by fossil and non-renewable sources.
                    </p>
                </div>

                <br /> <br />

                <div className='grid gap-2'>
                    <h1 className='text-[#111827] text-4xl font-bold'>Our Mission</h1>
                    <p className='text-gray-950 py-5'>
                        We envision our distributed clean energy systems and technologies, their integrations and derivatives operational to every home, office, factory, community and farm across the philippines.
                    </p>
                </div>

                <br /> <br />

                <div className='grid gap-2'>
                    <h1 className='text-[#111827] text-4xl font-bold'>Our Values</h1>
                    <p className='text-gray-950 py-5'>
                        While every business is built to create wealth, we also believe that wealth creation is secondary to our mission, a reward for doing our job diligently and passionately. our topmost priority is to deliver lasting value and benefits for our clients and the people and organizations that work with us. This reflects in our business decisions, work ethics and culture. 
                    </p>
                </div>

                <br /> <br />

                <blockquote className='bg-sky-600 text-white text-lg p-5 rounded-lg'>
                    <q>through increased self-consumption and reduced dependence on grid electricity, we can provide solutions to energy and imminent energy crisis that are truly inclusive and sustainable.</q>
                </blockquote>

                <br /> <br /> <br /> <br /> <br />

                <div className='flex justify-center'>
                    <div className='bg-sky-700 h-40 w-1'></div>
                </div>

            </div>
        </div>
    )

}
