'use client'

type Props = {}

export default function AboutUsBanner ( props: Props ) {

    return (
        <div className='relative z-10 bg-[url("/assets/content/about-us/ab-01.png")] bg-center bg-[length:1920px_1080px] bg-fixed bg-no-repeat flex items-center justify-center h-[480px] lg:h-[720px] pb-12'>
            
            <div className='absolute inset-0 flex items-center bg-black/50 h-full w-full'>

                <div className={ `
                    w-auto mx-5 py-10
                    md:w-2/3 md:mx-auto md:py-20
                ` }>

                    <div className='flex flex-col space-y-5'>
                        <h1 className='text-white font-thin text-5xl lg:text-6xl uppercase'>about <span className='font-bold'>us</span></h1>   
                        <h5 className='text-white font-semibold italic'>&quot;It starts with humble beginnings&quot;</h5>
                        <div className='bg-white h-5 w-5'></div>
                    </div>
                    
                </div>

            </div>

        </div>
    )

}
