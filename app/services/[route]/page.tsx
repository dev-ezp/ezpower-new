import ServicesBanner from '@/components/services-banner'
import ServicesBreadcrumbs from '@/components/services-breadcrumbs'
import ServicesDetails from '@/components/services-details'
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

            <ServicesBreadcrumbs params={ params } searchParams={ searchParams }/>

            <ServicesDetails params={ params } searchParams={ searchParams } />

            <Qoute/>

            <Footer />

        </div>
    )

}
