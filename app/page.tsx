import BannerHome from '@/components/banner-home'
import AboutUsHome from '@/components/about-us-home'
import ServicesHome from '@/components/services-home'
import WhyChooseUsHome from '@/components/why-choose-us-home'
import FAQHome from '@/components/faq-home'
import ProjectsHome from '@/components/projects-home'
import Footer from '@/components/footer'

type Props = {}

export default function Page ( props: Props ) {

    return (
        <div className='w-full'>
            
            <BannerHome />

            <AboutUsHome />

            <ServicesHome />

            <WhyChooseUsHome />

            <ProjectsHome />

            <FAQHome />

            <Footer />

        </div>
    )

}
