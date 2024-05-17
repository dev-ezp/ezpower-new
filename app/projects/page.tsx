import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'
import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'
import Chat from '@/components/chat'

import ProjectsBanner from '@/components/projects-banner'
import ProjectsContent from '@/components/projects-content'
import ProjectsDeployedDevices from '@/components/projects-deployed-devices'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'

export const metadata: Metadata = {
    title: 'ezpower | projects',
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

                <ProjectsBanner params={ params } searchParams={ searchParams } />

                <ProjectsContent />

                <ProjectsDeployedDevices />

                <Qoute/>

                <Footer />

            </div>

            <Toaster />

            <QuickUp />

            <Chat />

        </div>
    )

}
