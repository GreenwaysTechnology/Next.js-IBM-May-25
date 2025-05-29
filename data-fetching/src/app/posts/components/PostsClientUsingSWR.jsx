'use client'

import useSWR from "swr"

function fetcher(...args) {
    return fetch(...args).then(res => res.json())
}

export default function FetchUsingSWR() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const { data, error, isLoading } = useSWR(url, fetcher)
    //ui
    if (error) {
        return <div>
            <h1>Failed To Return</h1>
        </div>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return <ul>
        {
            data.map(post => {
                return <li key={post.id}>{post.title}</li>
            })
        }
    </ul>
}