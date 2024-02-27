'use client'

import { useEffect , useState } from 'react'
import CountUp from 'react-countup'

type Props = {}

export default function HomeStats ( props: Props ) {

    const [ height , setHeight ] = useState <number> ( 0 )
    useEffect( () => window.addEventListener( 'scroll' , () => setHeight( window.scrollY ) ) , [ height ] )

    return (
        <div className='bg-[#111827]'>
            <div className='mx-5 md:mx-40 lg:mx-60 py-5 sm:py-10'>

                <div className='flex justify-center'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

                        <div className='grid gap-1 text-white w-40 p-1'>
                            <div className='flex items-center space-x-2'>
                                <Cube className='h-10 w-10' />
                                <h5 className='text-sm font-semibold uppercase'>installed capacity</h5>
                            </div>
                            <p className='text-5xl font-bold'>
                                {
                                    height >= 50
                                        ?   <CountUp
                                                end={ 1.054 }
                                                duration={ 1 }
                                                decimals={ 3 }
                                            />
                                        :   <>0</>
                                }
                            </p>
                            <span className='font-bold'>MWp</span>
                        </div>

                        <div className='grid gap-1 text-white w-40 p-1'>
                            <div className='flex items-center space-x-2'>
                                <Bolt className='h-10 w-10' />
                                <h5 className='text-sm font-semibold uppercase'>power generation</h5>
                            </div>
                            <p className='text-5xl font-bold'>
                                {
                                    height >= 50
                                        ?   <CountUp
                                                end={ 725.6 }
                                                duration={ 1 }
                                                decimals={ 1 }
                                            />
                                        :   <>0</>
                                }
                            </p>
                            <span className='font-bold'>MWh</span>
                        </div>

                        <div className='grid gap-1 text-white w-40 p-1'>
                            <div className='flex items-center space-x-2'>
                                <Check className='h-10 w-10' />
                                <h5 className='text-sm font-semibold uppercase'>projects accomplished</h5>
                            </div>
                            <p className='text-5xl font-bold'>
                                {
                                    height >= 50
                                        ?   <CountUp
                                                end={ 100 }
                                                duration={ 1 }
                                                decimals={ 0 }
                                            />
                                        :   <>0</>
                                }
                            </p>
                            <span className='font-bold'>and counting</span>
                        </div>

                        <div className='grid gap-1 text-white w-40 p-1'>
                            <div className='flex items-center space-x-2'>
                                <Tree className='h-10 w-10' />
                                <h5 className='text-sm font-semibold uppercase'>carbon credits</h5>
                            </div>
                            <p className='text-5xl font-bold'>
                                {
                                    height >= 50
                                        ?   <CountUp
                                                end={ 516.8 }
                                                duration={ 1 }
                                                decimals={ 1 }
                                            />
                                        :   <>0</>
                                }
                            </p>
                            <span className='font-bold'>tCO2</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}

function Cube ( props: { className: string } ) {

    return (
        <svg
            { ... props }
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
        >
            <rect width='9' height='9' x='1.5' y='1.5' fill='currentColor' rx='1'>
                <animate id='svgSpinnersBlocksScale0' attributeName='x' begin='0;svgSpinnersBlocksScale1.end+0.15s' dur='0.6s' keyTimes='0;.2;1' values='1.5;.5;1.5' />
                <animate attributeName='y' begin='0;svgSpinnersBlocksScale1.end+0.15s' dur='0.6s' keyTimes='0;.2;1' values='1.5;.5;1.5' />
                <animate attributeName='width' begin='0;svgSpinnersBlocksScale1.end+0.15s' dur='0.6s' keyTimes='0;.2;1' values='9;11;9' />
                <animate attributeName='height' begin='0;svgSpinnersBlocksScale1.end+0.15s' dur='0.6s' keyTimes='0;.2;1' values='9;11;9' />
            </rect>
            <rect width='9' height='9' x='13.5' y='1.5' fill='currentColor' rx='1'>
                <animate attributeName='x' begin='svgSpinnersBlocksScale0.begin+0.15s' dur='0.6s' keyTimes='0;.2;1' values='13.5;12.5;13.5' />
                <animate attributeName='y' begin='svgSpinnersBlocksScale0.begin+0.15s' dur='0.6s' keyTimes='0;.2;1' values='1.5;.5;1.5' />
                <animate attributeName='width' begin='svgSpinnersBlocksScale0.begin+0.15s' dur='0.6s' keyTimes='0;.2;1' values='9;11;9' />
                <animate attributeName='height' begin='svgSpinnersBlocksScale0.begin+0.15s' dur='0.6s' keyTimes='0;.2;1' values='9;11;9' />
            </rect>
            <rect width='9' height='9' x='13.5' y='13.5' fill='currentColor' rx='1'>
                <animate attributeName='x' begin='svgSpinnersBlocksScale0.begin+0.3s' dur='0.6s' keyTimes='0;.2;1' values='13.5;12.5;13.5' />
                <animate attributeName='y' begin='svgSpinnersBlocksScale0.begin+0.3s' dur='0.6s' keyTimes='0;.2;1' values='13.5;12.5;13.5' />
                <animate attributeName='width' begin='svgSpinnersBlocksScale0.begin+0.3s' dur='0.6s' keyTimes='0;.2;1' values='9;11;9' />
                <animate attributeName='height' begin='svgSpinnersBlocksScale0.begin+0.3s' dur='0.6s' keyTimes='0;.2;1' values='9;11;9' />
            </rect>
            <rect width='9' height='9' x='1.5' y='13.5' fill='currentColor' rx='1'>
                <animate id='svgSpinnersBlocksScale1' attributeName='x' begin='svgSpinnersBlocksScale0.begin+0.45s' dur='0.6s' keyTimes='0;.2;1' values='1.5;.5;1.5' />
                <animate attributeName='y' begin='svgSpinnersBlocksScale0.begin+0.45s' dur='0.6s' keyTimes='0;.2;1' values='13.5;12.5;13.5' />
                <animate attributeName='width' begin='svgSpinnersBlocksScale0.begin+0.45s' dur='0.6s' keyTimes='0;.2;1' values='9;11;9' />
                <animate attributeName='height' begin='svgSpinnersBlocksScale0.begin+0.45s' dur='0.6s' keyTimes='0;.2;1' values='9;11;9' />
            </rect>
        </svg>
    )

}

function Bolt ( props: { className: string } ) {

    return (
        <svg
            { ... props }
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
        >
            <path
                fill='currentColor'
                d='m11 14.5l-5.925-.75q-.625-.075-.813-.675t.263-1.025l10.225-9.8q.125-.125.3-.187T15.525 2q.5 0 .763.425t.012.875L13 9.5l5.925.75q.625.075.813.675t-.263 1.025L9.25 21.75q-.125.125-.3.188T8.475 22q-.5 0-.763-.425T7.7 20.7zm1.55 1.325l4.025-3.85l-6.725-.85L11.425 8.2l-4 3.85l6.7.825zM12 12'
            />
        </svg>
    )

}


function Check ( props: { className: string } ) {
    return (
        <svg
            { ... props }
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
        >
            <path fill='currentColor' d='m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83z' />
        </svg>
    )
  }

function Tree ( props: { className: string } ) {

    return (
        <svg
            { ... props }
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 256 256'
        >
            <g fill='currentColor'>
                <path d='M128 187.88h-.06a71.3 71.3 0 0 1-8 4.61V232a8 8 0 0 0 16 0v-39.51a71.3 71.3 0 0 1-8-4.61Z' />
                <path d='M198.1 62.6a76 76 0 0 0-140.2 0A72.29 72.29 0 0 0 16 127.8c-.11 38.82 31.36 71.2 70.14 72.2a71.68 71.68 0 0 0 33.86-7.51v-35.55l-43.58-21.78a8 8 0 1 1 7.16-14.32L120 139.06V88a8 8 0 0 1 16 0v27.06l36.42-18.22a8 8 0 1 1 7.16 14.32L136 132.94v59.55a71.45 71.45 0 0 0 32 7.51h1.86c38.78-1 70.25-33.36 70.14-72.18a72.26 72.26 0 0 0-41.9-65.22' />
            </g>
        </svg>
    )

}
