import type { Metadata } from 'next'

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
        <div className='w-full'>

            <EnergySolutionsBanner params={ params } searchParams={ searchParams } />

            <EnergySolutionsContent />

            <EnergySolutionsOthers />

            <Qoute/>

            <Footer />

        </div>
    )

}
