'use client'

import Link from "next/link"

export default function PhotosDetails(props) {

    return <>{
        props.photos.map(photo => {
            return <div key={photo.id}>
                <Link href={`/photos/${photo.id}`}><h3>{photo.title}</h3></Link>
            </div>
        })
    }
    </>
}