import Frame from "@/app/components/Frame";
import photos from "@/app/mock-data/photo";

export default async function PhotoPage({ params} ) {
    const id = (await params).id 
    const photo = photos.find(p => p.id == id)
    return <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto border border-gray-700">
              <Frame photo={photo} />
        </div>
    </div>
}