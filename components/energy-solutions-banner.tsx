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
        <div className={ `relative z-10 ${ switchImage( params.route ) } bg-center bg-[length:1920px_1080px] bg-fixed bg-no-repeat flex items-center justify-center h-[720px] pb-12` }>
            
            <div className='absolute inset-0 flex items-center bg-black/50 h-full w-full'>

                <div className='mx-96 py-20 flex flex-col space-y-5'>
                    {
                            params.route === 'commercial-and-industrial'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>commercial and <span className='font-bold'>industrial</span></h1>
                        :   params.route === 'home-solutions'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>home <span className='font-bold'>solutions</span></h1>
                        :   params.route === 'community-development'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>community <span className='font-bold'>development</span></h1>
                        :   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>providing <span className='font-bold'>energy solutions</span> for the people</h1>   
                    }
                    {
                        params.route === undefined || params.route === null
                            ?   <h5 className='text-white font-semibold italic'>
                                    &quot;Clean, safe and innovative&quot;
                                </h5>
                            :   <></>
                    }
                    <div className='bg-white h-5 w-5'></div>
                </div>

            </div>

        </div>
    )

}
