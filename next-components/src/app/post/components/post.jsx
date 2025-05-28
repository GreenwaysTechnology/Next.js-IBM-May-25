'use client'

import { useState } from 'react'

export const Post = props => {
    //inital data with some sample posts
    const [posts, setPosts] = useState([
        { id: 1, title: 'Post 1', body: 'this is firstPost' },
        { id: 2, title: 'Post 2', body: 'this is secondPost' }
    ])
    //To add new post into list
    const [form, setForm] = useState({ title: '', body: '', id: null })

    //to handle submit button either add or update
    const [isEditing, setIsEditing] = useState(false)

    //Form handler
    const handleSubmit = (evt) => {
        //call js event object method
        evt.preventDefault()
        isEditing ? updatePost() : addPost()

    }
    //functions
    const updatePost = () => {
        //array update
        setPosts(posts.map(post => (post.id === form.id ? form : post)));
        //reset form
        setForm({ title: '', body: '', id: null })
        //rest isEditing
        setIsEditing(false)

    }
    const addPost = () => {
        const newPost = { id: Date.now(), title: form.title, body: form.body }
        //add new Item into array
        setPosts([...posts, newPost])
        //reset form
        setForm({ title: '', body: '', id: null })
    }
    const handleEdit = post => {
        console.log(post)
        //load data from the list into form
        setForm({ title: post.title, body: post.body, id: post.id })
        setIsEditing(true)
    }
    const handleDelete = id => {
        setPosts(posts.filter(post => post.id !== id))

    }

    {/* List of posts */ }
    return <div>
        {/* Add new Post */}
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    required
                    onChange={e => setForm({ ...form, title: e.target.value })}
                />
            </div>
            <div>
                <textarea
                    placeholder="Body"
                    value={form.body}
                    required
                    onChange={e => setForm({ ...form, body: e.target.value })}
                />
            </div>
            <div>
                <button type="submit">{isEditing ? 'Update' : 'Add'} Post</button>
            </div>
        </form>
        {/* Listing posts */}
        <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={(evt) => {
                            // Pass Individual Post object
                            handleEdit(post)
                        }}>Edit</button>
                        <button onClick={(evt) => {
                            handleDelete(post.id)
                        }}>Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
}