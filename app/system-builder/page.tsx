import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'
import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'
import Chat from '@/components/chat'

import SystemBuilderContent from '@/components/system-builder-content'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'

export const metadata: Metadata = {
    title: 'ezpower | system builder',
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

                <SystemBuilderContent />
                
                <Qoute/>
                
                <Footer />

            </div>

            <Toaster />

            <QuickUp />

            <Chat />

        </div>
    )

}
