import photos from "@/app/mock-data/photo"
import Frame from "@/app/components/Frame"
import Modal from "@/app/components/Modal"

export default async function PhotoModal({ params }) {
    const id = (await params).id 
    const photo = photos.find((p) => p.id == id)
    return (
        <Modal>
            <Frame photo={photo} />
        </Modal>
    )
}
