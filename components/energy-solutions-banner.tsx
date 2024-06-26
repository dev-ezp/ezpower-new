'use client'

type Props = { 
    params?: any
    searchParams?: any
}

const switchImage = ( route?: string ): string => {
    switch ( route ) {
        default:
        return 'bg-[url("/assets/content/energy-solutions/eb-00.png")]'
        
        case 'commercial-and-industrial':
        return 'bg-[url("/assets/content/energy-solutions/eb-01.png")]'

        case 'home-solutions':
        return 'bg-[url("/assets/content/energy-solutions/eb-02.png")]'

        case 'community-development':
        return 'bg-[url("/assets/content/energy-solutions/eb-03.png")]'
    }
}

export default function EnergySolutionsBanner ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className={ `relative z-10 ${ switchImage( params.route ) } bg-center bg-[length:1920px_1080px] bg-fixed bg-no-repeat flex items-center justify-center h-[580px] lg:h-[720px] pb-12` }>
            
            <div className='absolute inset-0 flex items-center bg-black/50 h-full w-full'>

                <div className={ `
                    w-auto mx-5 py-10
                    md:w-2/3 md:mx-auto md:py-20
                ` }>

                    <div className='flex flex-col space-y-5'>
                        {
                                params.route === 'commercial-and-industrial'
                                    ?   <h1 className='text-white font-thin text-4xl sm:text-5xl lg:text-6xl uppercase'>commercial and <span className='font-bold'>industrial</span></h1>
                            :   params.route === 'home-solutions'
                                    ?   <h1 className='text-white font-thin text-4xl sm:text-5xl lg:text-6xl uppercase'>home <span className='font-bold'>solutions</span></h1>
                            :   params.route === 'community-development'
                                    ?   <h1 className='text-white font-thin text-4xl sm:text-5xl lg:text-6xl uppercase'>community <span className='font-bold'>development</span></h1>
                            :   <h1 className='text-white font-thin text-4xl sm:text-5xl lg:text-6xl uppercase'>providing <span className='font-bold'>energy solutions</span> to everyone</h1>   
                        }
                        {
                            params.route === undefined || params.route === null
                                ?   <h5 className='text-white font-semibold italic text-sm sm:text-base'>
                                        &quot;Conforming to your energy needs, preferences and expectations&quot;
                                    </h5>
                                :   <></>
                        }
                        <div className='bg-white h-4 sm:h-5 w-4 sm:w-5'></div>
                    </div>

                </div>

            </div>

        </div>
    )

}
