import type { Metadata } from 'next'

import CarbonPlatformBanner from '@/components/carbon-platform-banner'
import CarbonPlatformContent from '@/components/carbon-platform-content'
import Footer from '@/components/footer'

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
        <div className='w-full'>

            <CarbonPlatformBanner />

            <CarbonPlatformContent />

            <Footer />

        </div>
    )

}