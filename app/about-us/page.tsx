import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'
import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'
import Chat from '@/components/chat'

import AboutUsBanner from '@/components/about-us-banner'
import AboutUsContent from '@/components/about-us-content'
import Footer from '@/components/footer'

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

                <AboutUsContent />

                <Footer />

            </div>

            <Toaster />

            <QuickUp />

            <Chat />
            
        </div>
    )

}
