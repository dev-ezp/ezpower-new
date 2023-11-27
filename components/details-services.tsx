'use client'

type Props = { 
    params?: any
    searchParams?: any
}

export default function DetailsServices ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className='bg-white'>
            <div className='mx-96 py-10'>
                details
            </div>
        </div>
    )

}
