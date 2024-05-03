import type { Metadata } from 'next'
import ConnectRedirect from '@/components/connect-redirect'

export const metadata: Metadata = {
    title: 'ezpower - connect',
    description: ''
}

type Props = {}

export default function Page ( props: Props ) {

    return ( <ConnectRedirect /> )

}
