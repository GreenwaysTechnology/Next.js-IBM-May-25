import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    try {
        const id = (await params).id
        const users = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (!users) {
            return NextResponse.json({ message: "UserNot Found", code: 404 })
        }
        return NextResponse.json(users)
    }
    catch (err) {
        return NextResponse.json(err)
    }

}
export async function PUT(request, { params }) {
    try {
        const id = (await params).id
        const payload = await request.json()
        const user = await prisma.user.update({
            where: {
                id
            },
            data: payload
        })
        if (!user) {
            return NextResponse.json({ message: `No user found with ${id}`, code: 404 })
        }
        return NextResponse.json(user)
    }
    catch (err) {
        return NextResponse.json(err)

    }
}

//remove
export async function DELETE(request, { params }) {
    try {
        const id = (await params).id
        await prisma.user.delete({
            where: {
                id
            }
        })
        return new NextResponse(null, { status: 404 })
    }
    catch (err) {
        return NextResponse.json(err)


    }
}