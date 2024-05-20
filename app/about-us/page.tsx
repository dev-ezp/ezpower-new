import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'
import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'
import Chat from '@/components/chat'

import AboutUsBanner from '@/components/about-us-banner'
import AboutUsContent from '@/components/about-us-content'
import AboutUsCookiePolicy from '@/components/about-us-cookie-policy'
import Footer from '@/components/footer'

import CookieConsent from '@/components/cookie-consent'

export const metadata: Metadata = {
    title: 'ezpower | about us',
    description: ''
}

type Props = { 
    params?: any
    searchParams?: any
}

export default function Page ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className='relative z-50'>

            <MainNavbar />

            <div className='relative w-full -z-10'>

                <AboutUsBanner />

                <div className='py-5'></div>

                <AboutUsContent />

                <AboutUsCookiePolicy />

                <br /> <br /> <br /> <br />

                <div className='flex justify-center'>
                    <div className='bg-sky-700 h-52 rounded-full w-0.5'></div>
                </div>

                <br /> <br /> <br /> <br />

                <Footer />

            </div>

            <Toaster />

            <QuickUp />

            <Chat />

            <CookieConsent />
            
        </div>
    )

}
