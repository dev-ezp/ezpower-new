import { Toaster } from '@/components/ui/toaster'
import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'
import Chat from '@/components/chat'

import EnergySolutionsBanner from '@/components/energy-solutions-banner'
import EnergySolutionsDetails from '@/components/energy-solutions-details'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'
import EnergySolutionsBreadcrumbs from '@/components/energy-solutions-breadcrumbs'

import CookieConsent from '@/components/cookie-consent'

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
    
                <EnergySolutionsBanner params={ params } searchParams={ searchParams } />
    
                <EnergySolutionsBreadcrumbs params={ params } searchParams={ searchParams } />
    
                <EnergySolutionsDetails params={ params } searchParams={ searchParams }/>
    
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
