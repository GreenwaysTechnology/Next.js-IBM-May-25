import FetchPost from "./components/FetchPost";
import FetchUsingSWR from "./components/PostsClientUsingSWR";

export default function PostsPage() {
    return <>
        {/* <FetchPost /> */}
        <FetchUsingSWR/>
    </>
}