import ServicesBanner from '@/components/services-banner'
import ServicesContent from '@/components/services-content'
import ServicesBrands from '@/components/services-brands'
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

            <ServicesBanner params={ params } searchParams={ searchParams } />

            <ServicesContent />

            <ServicesBrands />

            <Qoute/>

            <Footer />

        </div>
    )

}
