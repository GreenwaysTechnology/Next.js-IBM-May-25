'use client'

import { useEffect, useState } from "react"

export default function FetchPost() {
    const [posts, setPosts] = useState([])

    async function fetchPostDetails() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(url)
        const posts = await response.json()
        console.log('client')
        setPosts((myposts) => {
            return posts.concat(myposts)
        })
    }
    //api call and initialize inside useEffect
    useEffect(() => {
        fetchPostDetails()
    }, [])
    return <>
        <h1>Posts</h1>
        <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>
                        <span>{post.title}</span>
                    </li>
                })
            }
        </ul>
    </>

}