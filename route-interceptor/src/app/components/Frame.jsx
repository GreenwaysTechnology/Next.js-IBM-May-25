import Image from "next/image"

export default function Frame({ photo }) {
    return (
        <>
            <Image alt="" src={photo.imageSrc} height={600} width={600} className="w-full object-cover aspect-square col-span-2" />
            <div className="bg-white p-4 px-6">
                <h1>{photo.name}</h1>
                <p>Taken by {photo.userName}</p>
            </div>
        </>
    )
}