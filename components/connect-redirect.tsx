'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

export default function ConnectRedirect ( props: Props ) {

    const router = useRouter()

    useEffect ( () => {
        router.push( '/assets/vcard/contact-info.vcf' )
        setTimeout( () => router.push( '/' ) , 3000 )
    } , [ router ] )

    return ( <></> )

}
