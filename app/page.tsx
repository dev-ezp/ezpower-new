import { Toaster } from '@/components/ui/toaster'
import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'
import Chat from '@/components/chat'

import HomeBanner from '@/components/home-banner'
import HomeAboutUs from '@/components/home-about-us'
import HomeServices from '@/components/home-services'
import HomeWhyChooseUs from '@/components/home-why-choose-us'
import HomeProjects from '@/components/home-projects'
import HomeFAQ from '@/components/home-faq'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'
import HomeStats from '@/components/home-stats'

type Props = { searchParams?: any }

export default function Page ( props: Props ) {

    return (
        <div className='relative z-50'>

            <MainNavbar />

            <div className='relative w-full -z-10'>
                
                <HomeBanner />

                <HomeStats />

                <HomeAboutUs />

                <HomeServices />

                <HomeWhyChooseUs />

                <HomeProjects />

                <HomeFAQ />

                <Qoute/>

                <Footer />

            </div>

            <Toaster />

            <QuickUp />

            <Chat />
            
        </div>
    )

}
