'use client'

import { useRouter } from "next/navigation"

export default function Dashboard() {
    const router = useRouter()
    return <div>
        <button onClick={() => {
            router.push('/clients')
        }}>Clients</button>
        <button onClick={() => {
            router.push('/services')
        }}>Services</button>
        <button onClick={() => {
            router.push('/')
        }}>Home</button>
    </div>
}