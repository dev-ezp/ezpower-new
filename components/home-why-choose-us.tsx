'use client'

import Link from 'next/link'

type Props = {}

export default function HomeWhyChooseUs ( props: Props ) {

    return (
        <div id='why-choose-us' className='bg-white'>
            <div
                className={ `
                    w-auto mx-5 py-10
                    md:w-2/3 md:mx-auto md:py-20
                ` }
            >

                <div className='grid gap-2 w-full xl:w-2/3'>
                    <h5 className='text-sky-700 text-sm uppercase'>why choose us?</h5>
                    <h1 className='text-[#111827] text-4xl font-bold'>Providing Equitable and High Quality Clean Energy Solutions</h1>
                    <p className='text-[#111827] py-5'>We believe that investing on clean energy should not be extraordinarily difficult, but as gratifying as living a sustainable lifestyle. Therefore, we are committed to provide equitable and high-quality clean energy solutions that can be affordable to everyone: households, businesses, communities, government and non-government organizations.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>

                    <div className='col-span-1 md:col-span-2 bg-white rounded-sm w-full h-60'>
                        <div className='flex flex-col justify-center h-full space-y-2'>
                            <h5 className='text-sky-700 text-sm uppercase'>we are experts in this field.</h5>
                            <h1 className='text-[#111827] text-4xl font-bold'>Our competitive advantage</h1>
                            <br />
                            <Link href='/energy-solutions' className='flex items-center justify-center sm:justify-start bg-[#111827] border-[#111827] text-white text-sm border-2 font-medium uppercase cursor-pointer rounded-sm px-5 py-4 w-full sm:w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
                                about our energy solution
                                <svg
                                    className='h-5 w-5 ml-2'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className='bg-gray-200 rounded-sm cursor-pointer w-full h-60 transition ease-in-out duration-300 hover:bg-[#111827] group'>
                        <div className='grid gap-3 p-5'>
                            <svg
                                className='text-sky-700 h-7 w-7 group-hover:text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 512 512'
                            >
                                <path
                                    fill='currentColor'
                                    d='M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96v160c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24s-24 10.7-24 24z'
                                />
                            </svg>
                            <h5 className='text-[#111827] font-medium group-hover:text-white'>Data Driven</h5>
                            <p className='text-gray-600 text-sm font-medium overflow-y-auto h-28 group-hover:text-white'>
                                We don&apos;t offer kits or ready-made solutions. Our system designs are derived from data provided by the clients or from our database of similar use cases treated to specific energy needs of the client. Energy Survey is conducted in the absence of suitable data. Once system is built, data is not only monitored but also continuously being analyzed for improvement of our systems and services.
                            </p>
                        </div>
                    </div>
                    <div className='bg-gray-200 rounded-sm cursor-pointer w-full h-60 transition ease-in-out duration-300 hover:bg-[#111827] group'>
                        <div className='grid gap-3 p-5'>
                            <svg
                                className='text-sky-700 h-7 w-7 group-hover:text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 48 48'
                            >
                                <mask
                                    id='ipSChip0'
                                >
                                    <g
                                        fill='none'
                                        stroke='#fff'
                                        strokeWidth='4'
                                    >
                                        <rect
                                            width='24'
                                            height='36'
                                            x='12'
                                            y='6'
                                            fill='#fff'
                                            rx='2'
                                        />
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M12 12H6m6 8H6m6 8H6m6 8H6m36-24h-6m6 8h-6m6 8h-6m6 8h-6'
                                        />
                                    </g>
                                </mask>
                                <path
                                    fill='currentColor'
                                    d='M0 0h48v48H0z'
                                    mask='url(#ipSChip0)'
                                />
                            </svg>
                            <h5 className='text-[#111827] font-medium group-hover:text-white'>Technology Agnostic</h5>
                            <p className='text-gray-600 text-sm font-medium overflow-y-auto h-28 group-hover:text-white'>
                                Our expertise in Power Electronics allows us to work with any distributed energy systems produced by solar, wind, hydro, waste-to-energy and their integrations. We don&apos;t limit ourselves to specific brands as long as the underlying technologies truly are responsive to the energy needs and preferences of our clients.
                            </p>
                        </div>
                    </div>
                    <div className='bg-gray-200 rounded-sm cursor-pointer w-full h-60 transition ease-in-out duration-300 hover:bg-[#111827] group'>
                        <div className='grid gap-3 p-5'>
                            <svg
                                className='text-sky-700 h-7 w-7 group-hover:text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M8 19V5h3.5a4.5 4.5 0 1 1 0 9H8m10-6H6m12 3H6'
                                />
                            </svg>
                            <h5 className='text-[#111827] font-medium group-hover:text-white'>Cost Effective</h5>
                            <p className='text-gray-600 text-sm font-medium overflow-y-auto h-28 group-hover:text-white'>
                                Transition to clean, renewable and distributed energy sources cannot be viable without real financial benefits. Our systems are designed to be worthwhile investments. Comprehensive financial analysis along with system performance report is included in our studies and proposals by default. We provide reasonably accurate and transparent quotations to clients that are founded on thorough studies.
                            </p>
                        </div>
                    </div>
                    <div className='bg-gray-200 rounded-sm cursor-pointer w-full h-60 transition ease-in-out duration-300 hover:bg-[#111827] group'>
                        <div className='grid gap-3 p-5'>
                            <svg
                                className='text-sky-700 h-7 w-7 group-hover:text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                            >
                                <g
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='1.5'
                                >
                                    <path d='M7 14a3 3 0 1 0 1 5.83' />
                                    <path d='M4.264 15.605a4 4 0 0 1-.874-6.636m.03-.081A2.5 2.5 0 0 1 7 5.5m.238.065A2.5 2.5 0 1 1 12 4.5V20m-4 0a2 2 0 1 0 4 0m0-13a3 3 0 0 0 3 3m5.61-1.031A3.99 3.99 0 0 1 22 12c0 .703-.181 1.364-.5 1.938m-.92-5.05A2.5 2.5 0 0 0 17 5.5m-5-1a2.5 2.5 0 1 1 4.762 1.065M14 22a2 2 0 0 1-2-2m8.5.5L22 22m-6-3.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0Z' />
                                </g>
                            </svg>
                            <h5 className='text-[#111827] font-medium group-hover:text-white'>Research & Development</h5>         
                            <p className='text-gray-600 text-sm font-medium overflow-y-auto h-28 group-hover:text-white'>
                                Our methods are founded on collaborative research with local universities whom we are actively engaged. Through our Energy Intelligence platform, we augment limited data from customers with Machine Learning Algorithms to create predictions of possible energy generation and consumption. In practice, we normally get less than 10% mean error with our design simulations.
                            </p>
                        </div>
                    </div>
                    <div className='bg-gray-200 rounded-sm cursor-pointer w-full h-60 transition ease-in-out duration-300 hover:bg-[#111827] group'>
                        <div className='grid gap-3 p-5'>
                            <svg
                                className='text-sky-700 h-7 w-7 group-hover:text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='currentColor'
                                    d='M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q1.625 0 3.075.475T17.75 3.8L16.3 5.275q-.95-.6-2.025-.938T12 4Q8.675 4 6.337 6.337T4 12q0 3.325 2.337 5.663T12 20q.8 0 1.55-.15t1.45-.425l1.5 1.525q-1.025.5-2.15.775T12 22Zm7-2v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2Zm-8.4-3.4l-4.25-4.25l1.4-1.4l2.85 2.85l10-10.025l1.4 1.4L10.6 16.6Z'
                                />
                            </svg>
                            <h5 className='text-[#111827] font-medium group-hover:text-white'>Added Value Creation</h5>         
                            <p className='text-gray-600 text-sm font-medium overflow-y-auto h-28 group-hover:text-white'>
                                AMP &lpar;Affiliate Marketing Program&rpar; is our initiative to let our previous clients expedite their returns through credits from referrals. ACCP (Aggregated Carbon Credits Program) is a system that we are developing that converts the environmental contributions of their systems into tradable digital assets through Blockchain. It will be available on 2024.
                            </p>
                        </div>
                    </div>
                    <div className='bg-gray-200 rounded-sm cursor-pointer w-full h-60 transition ease-in-out duration-300 hover:bg-[#111827] group'>
                        <div className='grid gap-3 p-5'>
                            <svg
                                className='text-sky-700 h-7 w-7 group-hover:text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='currentColor'
                                    d='m19 2l-5 4.5v11l5-4.5V2M6.5 5C4.55 5 2.45 5.4 1 6.5v14.66c0 .25.25.5.5.5c.1 0 .15-.07.25-.07c1.35-.65 3.3-1.09 4.75-1.09c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.31 4.75 1.06c.1.05.15.03.25.03c.25 0 .5-.25.5-.5V6.5c-.6-.45-1.25-.75-2-1V19c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V6.5C10.55 5.4 8.45 5 6.5 5Z'
                                />
                            </svg>
                            <h5 className='text-[#111827] font-medium group-hover:text-white'>Open Sourced</h5>         
                            <p className='text-gray-600 text-sm font-medium overflow-y-auto h-28 group-hover:text-white'>
                                We employ free and Open-sourced software tools in our design and business processes. This also allows us to keep overhead cost we charge to our clients much lesser. We also contribute to the development of Open-sourced software to keep it updated and at par with expensive commercial counterparts.
                            </p>
                        </div>
                    </div>

                </div>
            
            </div>
        </div>
    )

}
