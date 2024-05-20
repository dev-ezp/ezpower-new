import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'
import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'
import Chat from '@/components/chat'

import ServicesBanner from '@/components/services-banner'
import ServicesContent from '@/components/services-content'
import ServicesBrands from '@/components/services-brands'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'

import CookieConsent from '@/components/cookie-consent'

export const metadata: Metadata = {
    title: 'ezpower | services',
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

                <ServicesBanner params={ params } searchParams={ searchParams } />

                <ServicesContent />

                <ServicesBrands />

                <Qoute/>

                <Footer />

            </div>

            <Toaster />

            <QuickUp />

            <Chat />

            <CookieConsent />

        </div>
    )

}
