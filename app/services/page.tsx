import BannerServices from '@/components/banner-services'
import ContentServices from '@/components/content-services'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'
import BrandsServices from '@/components/brands-services'

type Props = { 
    params?: any
    searchParams?: any
}

export default function Page ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className='w-full'>

            <BannerServices params={ params } searchParams={ searchParams } />

            <ContentServices />

            <BrandsServices />

            <Qoute/>

            <Footer />

        </div>
    )

}
