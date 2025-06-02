export default async function BlogDetails(props) {
    const params = (await props.params)
    return <h1>
         {JSON.stringify(params)}
    </h1>
}