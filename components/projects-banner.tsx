'use client'

type Props = { 
    params?: any
    searchParams?: any
}

const switchImage = ( route?: string ): string => {
    switch ( route ) {
        default:
        return 'bg-[url("/assets/8.jpg")]'
        
        case '1':
        return 'bg-[url("/assets/1.png")]'

        case '2':
        return 'bg-[url("/assets/2.png")]'

        case '3':
        return 'bg-[url("/assets/3.png")]'
    }
}

export default function ProjectsBanner ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className={ `relative z-10 ${ switchImage( params.route ) } bg-center bg-[length:1920px_1080px] bg-fixed bg-no-repeat flex items-center justify-center h-[500px] pb-12` }>
            
            <div className='absolute inset-0 flex items-center bg-black/50 h-full w-full'>

                <div className='mx-96 py-20 flex flex-col space-y-5'>
                    {
                            params.route === '1'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>route <span className='font-bold'>1</span></h1>
                        :   params.route === '2'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>route <span className='font-bold'>2</span></h1>
                        :   params.route === '3'
                                ?   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>route <span className='font-bold'>3</span></h1>
                        :   <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>our <span className='font-bold'>projects</span></h1>   
                    }
                    {
                        params.route === undefined || params.route === null
                            ?   <h5 className='text-white font-semibold italic'>
                                    &quot;We are building the community&quot;
                                </h5>
                            :   <></>
                    }
                    <div className='bg-white h-5 w-5'></div>
                </div>

            </div>

        </div>
    )

}
