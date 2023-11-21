import BannerServices from '@/components/banner-services'
import QouteHome from '@/components/qoute-home'
import Footer from '@/components/footer'

type Props = { searchParams?: any }

export default function Page ( props: Props ) {

    return (
        <div className='w-full'>

            <BannerServices />

            <QouteHome/>

            <Footer />

        </div>
    )

}
