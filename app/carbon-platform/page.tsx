import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'
import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'
import Chat from '@/components/chat'

import CarbonPlatformBanner from '@/components/carbon-platform-banner'
import CarbonPlatformContent from '@/components/carbon-platform-content'
import Footer from '@/components/footer'

import CookieConsent from '@/components/cookie-consent'

export const metadata: Metadata = {
    title: 'ezpower | carbon platform',
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

                <CarbonPlatformBanner />

                <CarbonPlatformContent />

                <Footer />

            </div>

            <Toaster />

            <QuickUp />

            <Chat />

            <CookieConsent />

        </div>
    )

}