import { NextResponse } from "next/server"

const url = `https://jsonplaceholder.typicode.com/comments`

export async function GET(request, { params }) {

    try {
        const id = (await params).id
        const response = await fetch(`${url}/${id}`)
        const comment = await response.json()
        if (comment.id) {
            return NextResponse.json(comment)
        }
        return NextResponse.json({ message: `Comment for ${id} Not found` })

    }
    catch (err) {
        return NextResponse.json({ err: err })
    }
}

export async function PUT(request, { params }) {
    try {
        const id = (await params).id
        const { name, email, body } = await request.json()
        if (name || email || body) {
            const response = await fetch(`${url}/${Number(id)}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, body })
            })
            const updatedComment = await response.json()
            return NextResponse.json(updatedComment)
        }
        return NextResponse.json({ message: `No Comment is available for the ${id}` })

    }
    catch (err) {
        return NextResponse.json({ err: err })
    }
}

export async function DELETE(request, { params }) {
    try {
        const id = (await params).id
        const response = await fetch(`${url}/${Number(id)}`, { method: 'DELETE' })
        const comment = await response.json()
        return NextResponse.json({ comment: comment })
    }
    catch (err) {
        return NextResponse.json({ err: err })
    }
}