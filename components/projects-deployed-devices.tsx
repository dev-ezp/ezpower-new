'use client'

import { useState } from 'react'

import Map , { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import src from '../public/assets/locations/locations.json'

import { ArrowRight } from 'lucide-react'

type Props = {}

export default function ProjectsDeployedDevices ( props: Props ) {

    type Classes = { left: string , rotate: string }
    const [ classes , setClasses ] = useState <Classes> ( { left: 'left-0' , rotate: 'rotate-0' } ) 

    const [ toggle , setToggle ] = useState <boolean> ( false )

    const locations: Array<{ lat: number , lng: number }> = src

    // console.log( locations.length )

    return (
        <div className='relative flex items-center h-screen'>
            <div className='h-full w-full'>
                <Map
                    initialViewState={ {
                        latitude: 14.771037,
                        longitude: 121.050127,
                        zoom: 6.5
                    } }
                    style={ { width: '100%' , height: '100%' } }
                    mapStyle='mapbox://styles/dev-sonen/ckzf9nz2h000a14nxm2b235ub?optimize=true'
                    mapboxAccessToken={ process.env.NEXT_PUBLIC_MAPBOX_TOKEN }
                >
                    {
                        locations.map( ( arr: { lat: number , lng: number } , ind: number ) => (
                            <Marker key={ ind } latitude={ arr.lat } longitude={ arr.lng }>
                                <div className='relative'>
                                    <div className='text-red-600'>
                                        <svg
                                            className='h-7 w-7'
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                fill="currentColor" 
                                                d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </Marker>
                        ) )
                    }
                </Map>
            </div>
            <div className={ `absolute ${ classes.left } top-0 right-0 bottom-0 bg-black/50 transition-all ease-in-out duration-300` }>
                <div className='relative'>
                    <div className='absolute p-5 md:p-10 left-0'>
                        <button
                            onClick={ function ( e: any ) {
                                setToggle( !toggle )
                                if ( toggle ) {
                                    setClasses( { left: 'left-0' , rotate: 'rotate-0' } )
                                } else {
                                    setClasses( { left: 'left-[75%]' , rotate: 'rotate-180' } )
                                }
                            } }
                            type='button'
                            className={ `text-white cursor-pointer outline-none rounded-full p-2 transition ease-in-out duration-300 ${ classes.rotate } hover:bg-white hover:text-gray-800` }
                        >
                            <ArrowRight className='h-5 md:h-7 w-5 md:w-7' />
                        </button>
                        <div className={ `absolute w-max flex flex-col items-start space-y-2 xl:hidden pt-3` }>
                            <h5 className='text-white text-xs md:text-sm uppercase'>plants and devices across luzon.</h5>
                            <h1 className='text-white text-3xl md:text-4xl font-bold'>Our deployed systems.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute p-10 right-0 w-[50%] hidden xl:block'>
                <div className='flex flex-col space-y-2'>
                    <h5 className='text-white text-sm uppercase'>plants and devices across luzon.</h5>
                    <h1 className='text-white text-4xl font-bold'>Our deployed systems.</h1>
                </div>
                <div className='bg-sky-700 h-5 w-5 my-10'></div>
            </div>
        </div>
    )

}
