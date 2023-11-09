import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

import MainNavbar from '@/components/main-navbar'
import QuickUp from '@/components/quick-up'

export const metadata: Metadata = {
    title: 'welcome to ezpower',
    description: 'leading the way to sustainable and inclusive energy solutions.'
}

export default function RootLayout( { children , }: { children: React.ReactNode } ) {

    return (
        <html lang='en'>
            <body className='relative z-50'>

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
                <link rel='icon' href='/assets/favicon.ico' />

                <MainNavbar />

                <main className='relative -z-10'>
                    { children }
                </main>

                <Toaster />

                <QuickUp goto='#top' />

            </body>
        </html>
    )

}
