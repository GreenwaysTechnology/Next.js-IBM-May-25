import TODOS from "@/app/mock-data/todos";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    console.log(params)
    const id = (await params).id
    const payload = TODOS.filter(todo => todo.id === parseInt(id))
    if (payload.length === 0) {
        return NextResponse.json({ message: 'No Todos Found' })
    }
    return NextResponse.json(payload)
}