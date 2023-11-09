'use client'

import Link from 'next/link'

type Props = {}

export default function QouteHome ( props: Props ) {

    return (
        <div className='bg-white h-max py-20'>
            <div className='mx-96'>

                <p className='text-gray-950 text-sm text-center'>
                    note: qoute ui here similar to:<Link href='httspans://7oroof.com/demos/solatec/request-quote.html' className='text-blue-500 underline italic mx-1'>https://7oroof.com/demos/solatec/request-quote.html</Link>we need to implement our own qouting method.
                </p>

            </div>
        </div>
    )

}
