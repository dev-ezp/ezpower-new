import { Toaster } from '@/components/ui/toaster'
import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'
import Chat from '@/components/chat'

import ProjectsBanner from '@/components/projects-banner'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'

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
    
                <ProjectsBanner params={ params } searchParams={ searchParams } />
    
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
