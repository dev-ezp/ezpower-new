'use client'

type Props = { 
    params?: any
    searchParams?: any
}

const switchImage = ( route?: string ): string => {
    switch ( route ) {
        default:
        return 'bg-[url("/assets/content/services/sb-00.png")]'
        
        case 'planning-and-design':
        return 'bg-[url("/assets/content/services/sb-01.png")]'

        case 'site-survey':
        return 'bg-[url("/assets/content/services/sb-02.png")]'

        case 'testing':
        return 'bg-[url("/assets/content/services/sb-03.png")]'

        case 'analysis':
        return 'bg-[url("/assets/content/services/sb-04.png")]'

        case 'skilled-workforce':
        return 'bg-[url("/assets/content/services/sb-05.png")]'

        case 'system-quotation':
        return 'bg-[url("/assets/content/services/sb-06.png")]'

        case 'consultancy':
        return 'bg-[url("/assets/content/services/sb-07.png")]'

        case 'customer-support':
        return 'bg-[url("/assets/content/services/sb-08.png")]'
    }
}

export default function ServicesBanner ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className={ `relative z-10 ${ switchImage( params.route ) } bg-center bg-[length:1920px_1080px] bg-fixed bg-no-repeat flex items-center justify-center h-[720px] pb-12` }>
            
            <div className='absolute inset-0 flex items-center bg-black/50 h-full w-full'>

                <div className='mx-96 py-20 flex flex-col space-y-5'>
                    {
                            params.route === 'planning-and-design'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>planning and <span className='font-bold'>design</span></h1>
                        :   params.route === 'site-survey'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>site <span className='font-bold'>survey</span></h1>
                        :   params.route === 'testing'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'><span className='font-bold'>testing</span></h1>
                        :   params.route === 'analysis'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'><span className='font-bold'>analysis</span></h1>
                        :   params.route === 'skilled-workforce'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>skilled <span className='font-bold'>workforce</span></h1>
                        :   params.route === 'system-quotation'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>system <span className='font-bold'>quotation</span></h1>
                        :   params.route === 'consultancy'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'><span className='font-bold'>consultancy</span></h1>
                        :   params.route === 'customer-support'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>customer <span className='font-bold'>support</span></h1>
                        :   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>our <span className='font-bold'>services</span></h1>   
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
