'use client'
import { useSearchParams } from 'next/navigation';

export default function SuccessPage(props) {
    const searchParams = useSearchParams()
    const name = searchParams.get('name');
    const email = searchParams.get('email');


    return <div>
        <h1>Submitted Details</h1>
        <h1>Name : {name}</h1>
        <h1>email: {email}</h1>
    </div>
}