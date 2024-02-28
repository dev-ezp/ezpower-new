'use client'

type Props = {}

export default function CarbonPlatformBanner ( props: Props ) {

    return (
        <div className='relative z-10 bg-[url("/assets/content/carbon-platform/ca-01.png")] bg-center bg-[length:1920px_1080px] bg-fixed bg-no-repeat flex items-center justify-center h-[720px] pb-12'>
            
            <div className='absolute inset-0 flex items-center bg-black/50 h-full w-full'>

                <div className='mx-96 py-20 flex flex-col space-y-5'>
                    <h1 className='text-white font-thin text-6xl w-[880px] uppercase'>carbon credits <span className='font-bold'>platform</span></h1>   
                    <h5 className='text-white font-semibold italic'>&quot;Creating cycle of sustainability as we generate clean energy&quot;</h5>
                    <div className='bg-white h-5 w-5'></div>
                </div>

            </div>

        </div>
    )

}
