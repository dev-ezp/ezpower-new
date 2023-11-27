'use client'

type Props = { 
    params?: any
    searchParams?: any
}

const switchImage = ( route?: string ): string => {
    switch ( route ) {
        default:
        return 'bg-[url("/assets/7.jpg")]'
        
        case 'planning-and-design':
        return 'bg-[url("/assets/1.png")]'

        case 'site-survey':
        return 'bg-[url("/assets/2.png")]'

        case 'testing':
        return 'bg-[url("/assets/3.png")]'

        case 'thermal-sensing':
        return 'bg-[url("/assets/4.png")]'

        case 'workforce':
        return 'bg-[url("/assets/5.png")]'

        case 'system-quotation':
        return 'bg-[url("/assets/1.png")]'

        case 'consultancy':
        return 'bg-[url("/assets/2.png")]'

        case 'customer-support':
        return 'bg-[url("/assets/3.png")]'
    }
}

export default function BannerServices ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className={ `relative z-10 ${ switchImage( params.route ) } bg-center bg-[length:1920px_1080px] bg-fixed bg-no-repeat flex items-center justify-center h-[500px] pb-12` }>
            
            <div className='absolute inset-0 flex items-center bg-black/50 h-full w-full'>

                <div className='mx-96 py-20 flex flex-col space-y-5'>
                    {
                            params.route === 'planning-and-design'
                                ?   <h1 className='text-white font-thin text-6xl uppercase'>planning and <span className='font-bold'>design</span></h1>
                        :   params.route === 'site-survey'
                                ?   <h1 className='text-white font-thin text-6xl uppercase'>site <span className='font-bold'>survey</span></h1>
                        :   params.route === 'testing'
                                ?   <h1 className='text-white font-thin text-6xl uppercase'><span className='font-bold'>testing</span></h1>
                        :   params.route === 'thermal-sensing'
                                ?   <h1 className='text-white font-thin text-6xl uppercase'>thermal <span className='font-bold'>sensing</span></h1>
                        :   params.route === 'workforce'
                                ?   <h1 className='text-white font-thin text-6xl uppercase'><span className='font-bold'>workforce</span></h1>
                        :   params.route === 'system-quotation'
                                ?   <h1 className='text-white font-thin text-6xl uppercase'>system <span className='font-bold'>quotation</span></h1>
                        :   params.route === 'consultancy'
                                ?   <h1 className='text-white font-thin text-6xl uppercase'><span className='font-bold'>consultancy</span></h1>
                        :   params.route === 'customer-support'
                                ?   <h1 className='text-white font-thin text-6xl uppercase'>customer <span className='font-bold'>support</span></h1>
                        :   <h1 className='text-white font-thin text-6xl uppercase'>our <span className='font-bold'>services</span></h1>   
                    }
                    {
                        params.route === undefined || params.route === null
                            ?   <h5 className='text-white font-semibold italic'>
                                    &quot;We provide quality and professional services&quot;
                                </h5>
                            :   <></>
                    }
                    <div className='bg-white h-5 w-5'></div>
                </div>

            </div>

        </div>
    )

}
