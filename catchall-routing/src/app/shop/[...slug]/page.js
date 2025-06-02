export default async function ShopDetailsPage(props){
    const params = (await props.params)
    console.log(params)
    return <div>
        <h1>Shop Details Page  {JSON.stringify(params)}</h1>
    </div>
}