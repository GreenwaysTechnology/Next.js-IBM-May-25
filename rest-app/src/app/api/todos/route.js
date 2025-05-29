//Rest api

import { NextResponse } from "next/server";
import TODOS from "@/app/mock-data/todos";

export async function GET(request) {
    return NextResponse.json(TODOS)
}

//post
export async function POST(request) {
    const payload = await request.json()
    console.log(payload)
    return NextResponse.json({ message: 'Saved' })

}