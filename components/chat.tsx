'use client'

import { useState , useEffect } from 'react'
import { FacebookProvider , SendToMessenger } from 'react-facebook'

type Props = {}

export default function Chat ( props: Props ) {

    const [ height , setHeight ] = useState <number> ( 0 )
    useEffect( () => window.addEventListener( 'scroll' , () => setHeight( window.scrollY ) ) , [ height ] )

    return (
        <FacebookProvider appId='1102743007119581'>
            <SendToMessenger messengerAppId='254352434418146' pageId='61556786006837' />
        </FacebookProvider>    
    )

}
