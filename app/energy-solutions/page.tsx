import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'
import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'
import Chat from '@/components/chat'

import EnergySolutionsBanner from '@/components/energy-solutions-banner'
import EnergySolutionsContent from '@/components/energy-solutions-content'
import EnergySolutionsOthers from '@/components/energy-solutions-others'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'

export const metadata: Metadata = {
    title: 'ezpower | energy solutions',
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

                <EnergySolutionsBanner params={ params } searchParams={ searchParams } />

                <EnergySolutionsContent />

                <EnergySolutionsOthers />

                <Qoute/>

                <Footer />

            </div>

            <Toaster />

            <QuickUp />

            <Chat />
            
        </div>
    )

}
