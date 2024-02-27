import AboutUsBanner from '@/components/about-us-banner'
import AboutUsContent from '@/components/about-us-content'
import Footer from '@/components/footer'

type Props = { 
    params?: any
    searchParams?: any
}

export default function Page ( props: Props ) {

    return (
        <div className='w-full'>

            <AboutUsBanner />

            <AboutUsContent />

            <Footer />

        </div>
    )

}
