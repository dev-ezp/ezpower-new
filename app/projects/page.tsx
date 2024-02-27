import ProjectsBanner from '@/components/projects-banner'
import ProjectsContent from '@/components/projects-content'
import ProjectsDeployedDevices from '@/components/projects-deployed-devices'
import Qoute from '@/components/qoute'
import Footer from '@/components/footer'

type Props = {
    params?: any
    searchParams?: any
}

export default function Page ( props: Props ) {

    const { params , searchParams } = props

    return (
        <div className='w-full'>

            <ProjectsBanner params={ params } searchParams={ searchParams } />

            <ProjectsContent />

            <ProjectsDeployedDevices />

            <Qoute/>

            <Footer />

        </div>
    )

}
