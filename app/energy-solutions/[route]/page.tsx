import EnergySolutionsBanner from '@/components/energy-solutions-banner'
import EnergySolutionsDetails from '@/components/energy-solutions-details'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'
import EnergySolutionsBreadcrumbs from '@/components/energy-solutions-breadcrumbs'

type Props = { 
    params?: any
    searchParams?: any
}

export default function Page ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className='w-full'>

            {/* <EnergySolutionsBanner params={ params } searchParams={ searchParams } /> */}

            {/* <EnergySolutionsBreadcrumbs params={ params } searchParams={ searchParams } /> */}

            {/* <EnergySolutionsDetails params={ params } searchParams={ searchParams }/> */}

            {/* <Qoute/> */}

            {/* <Footer /> */}

        </div>
    )

}
