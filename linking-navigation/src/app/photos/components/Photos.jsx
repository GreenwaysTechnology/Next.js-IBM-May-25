import PhotosDetails from "./PhotosDetails"

//make api call
export async function fetchPhotos() {
    const url = `https://jsonplaceholder.typicode.com/photos`
    const response = await fetch(url)
    return response.json()
}

export default async function Photos(props) {
    const photos = await fetchPhotos()
    return <div>
           <PhotosDetails photos={photos}/>
    </div>
}