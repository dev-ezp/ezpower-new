import HomeBanner from '@/components/home-banner'
import HomeAboutUs from '@/components/home-about-us'
import HomeServices from '@/components/services-home'
import HomeWhyChooseUs from '@/components/home-why-choose-us'
import HomeProjects from '@/components/home-projects'
import HomeFAQ from '@/components/home-faq'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'

type Props = { searchParams?: any }

export default function Page ( props: Props ) {

    return (
        <div className='w-full'>
            
            <HomeBanner/>

            <HomeAboutUs />

            <HomeServices />

            <HomeWhyChooseUs />

            <HomeProjects />

            <HomeFAQ />

            <Qoute/>

            <Footer />

        </div>
    )

}
