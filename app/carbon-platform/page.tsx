import CarbonPlatformBanner from '@/components/carbon-platform-banner'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'

type Props = { 
    params?: any
    searchParams?: any
}

export default function Page ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className='w-full'>

            <CarbonPlatformBanner params={ params } searchParams={ searchParams } />

            <Qoute/>

            <Footer />

        </div>
    )

}