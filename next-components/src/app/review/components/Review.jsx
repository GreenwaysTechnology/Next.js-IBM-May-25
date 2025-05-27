
'use client' //directive

import { useState } from "react"

export default function Review() {
    const [review, setReview] = useState(0)
    const onIncrement = () => {
        console.log('review',review)
        setReview(review + 1)
    }
    return <div>
        <h1>Review {review}</h1>
        <button onClick={onIncrement}>Like</button>
    </div>
}