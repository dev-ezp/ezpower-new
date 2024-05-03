import type { Metadata } from 'next'

import SystemBuilderContent from '@/components/system-builder-content'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'

export const metadata: Metadata = {
    title: 'ezpower | system builder',
    description: ''
}

type Props = {}

export default function Page ( props: Props ) {

    return (
        <div className='w-full'>

            <SystemBuilderContent />
            
            <Qoute/>
            
            <Footer />

        </div>
    )

}
