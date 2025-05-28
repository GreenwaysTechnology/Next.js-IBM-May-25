
export async function fetchPhotoById(id) {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    const response = await fetch(url)
    return response.json()
}

export default async function PhotosDetailsPage(props) {
    const id = (await props.params).id
    //get data from the api
    const photo = await fetchPhotoById(parseInt(id))
    return <div>
        <h1>{id} details</h1>
        <h2>{photo.title}</h2>
    </div>
}