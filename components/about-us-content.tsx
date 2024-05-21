'use client'

type Props = {}

export default function AboutUsContent ( props: Props ) {

    return (
        <section id='goals' className='bg-white'>
            <div className={ `
                w-auto mx-5 pb-10
                md:w-2/3 md:mx-auto
            ` }>

                <p className='text-sm text-justify'>
                    Established on October of 2018, EZ Power by Edge-Systems Engineering Services had humble beginnings and modest resources but also was coming from solid grounds with its founder Engr. Edzel Galguerra, who had progressive 15 years career in design and development of electronics and power systems for global markets.
                </p>

                <br />

                <p className='text-sky-700 text-sm text-justify font-semibold'>
                    &quot;We are motivated by the belief that the next big impact to the economy will be defined by Energy, Environment and Efficiency on which the company was also founded for.&quot;
                </p>

                <br />

                <h1 className='text-2xl font-bold'>Our Vision</h1>
                <br />
                <p className='text-sm text-justify'>
                    we provide innovative and high-quality yet affordable clean energy solutions to everyone: households, businesses, communities, governments and agriculture to reduce their dependence on grid electricity powered by fossil and non-renewable sources.
                </p>

                <br />

                <h1 className='text-2xl font-bold'>Our Mission</h1>
                <br />
                <p className='text-sm text-justify'>
                    We envision our distributed clean energy systems and technologies, their integrations and derivatives operational to every home, office, factory, community and farm across the philippines.
                </p>

                <br />

                <h1 className='text-2xl font-bold'>Our Values</h1>
                <br />
                <p className='text-sm text-justify'>
                    While every business is built to create wealth, we also believe that wealth creation is secondary to our mission, a reward for doing our job diligently and passionately. our topmost priority is to deliver lasting value and benefits for our clients and the people and organizations that work with us. This reflects in our business decisions, work ethics and culture. 
                </p>

                <br />

                <div className='bg-red-100 rounded-md p-5'>
                    <blockquote className='border-red-400 text-sm border-l-2 p-5'>
                        <q>through increased self-consumption and reduced dependence on grid electricity, we can provide solutions to energy and imminent energy crisis that are truly inclusive and sustainable.</q>
                    </blockquote>
                </div>

            </div>
        </section>
    )

}
