import { revalidatePath, revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

// export async function GET(request, { params }) {
//     //get the path
//     const path = request.nextUrl.searchParams.get('path') || '/timecache/Kolkata'
//     //clear the cache for the url
//     revalidatePath(path)
//     console.log('revalided', path)
//     return NextResponse.json({ revalidate: true, now: new Date.now(), cache: 'no-store' })

// }
export async function GET(request) {
    //get the path
    const tag = request.nextUrl.searchParams.get('timerTag') || 'timerTag'
    revalidateTag(tag)
    console.log('revalided', tag)
    return NextResponse.json({ revalidate: true, now: Date.now(), cache: 'no-store' })
}