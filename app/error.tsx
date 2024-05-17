'use client'

import InternalServerError from '@/components/misc/internal-server-error'

export default function Error ( { error , reset }: { error: Error & { digest?: string , message?: string } , reset: () => void } ) {
    return (
        <InternalServerError />
    )
}