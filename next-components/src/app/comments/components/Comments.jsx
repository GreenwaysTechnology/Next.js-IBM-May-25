'use client'

import { useState } from "react"
import User from "@/app/comments/components/User"

export default function Comment() {
    const [comment, setComment] = useState('this is comment')
    return <div>
        <h1>{comment}</h1> <User />
    </div>
}