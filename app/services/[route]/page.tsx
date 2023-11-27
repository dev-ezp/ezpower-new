import BannerServices from '@/components/banner-services'
import BreadcrumbsServices from '@/components/breadcrumbs-services'
import DetailsServices from '@/components/details-services'
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

            <BannerServices params={ params } searchParams={ searchParams } />

            <BreadcrumbsServices params={ params } searchParams={ searchParams }/>

            <DetailsServices params={ params } searchParams={ searchParams } />

            <Qoute/>

            <Footer />

        </div>
    )

}
