import type { Metadata } from 'next'
import './globals.css'

import ServiceUnavailable from '@/components/misc/service-unavailable'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
    title: 'ezpower | home',
    description: 'leading the way to sustainable and inclusive energy solutions.'
}

const maintenace: any = process.env.MAINTENANCE

export default function RootLayout( { children }: { children: React.ReactNode } ) {
    
    const clientCookie: any = cookies()
    const policy: any = clientCookie.get( 'cookie-policy' )?.value

    return (
        <html lang='en'>
            <body>

                {/* for react-slick see: banner-home.tsx */}
                <link
                    rel='stylesheet'
                    type='text/css'
                    charSet='UTF-8'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
                />
                <link
                    rel='stylesheet'
                    type='text/css'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
                />

                {/* for icon */}
                <link rel='icon' href='/assets/app/favicon.ico' />

                {
                    maintenace === 'true' || policy === 'deny'
                        ?   <ServiceUnavailable />
                        :   <main>{ children }</main>
                }
                
            </body>
        </html>
    )

}
