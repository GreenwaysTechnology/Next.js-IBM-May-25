// export default async function CachePage(props) {
//     //api call to test whether the caching is enabled or no
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url)
//     const data = await response.json()
//     return <div>
//          <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
//     </div>
// }

//enable cache
// export default async function CachePage(props) {
//     //api call to test whether the caching is enabled or no
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url, { cache: 'force-cache' })
//     const data = await response.json()
//     return <div>
//         <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
//     </div>
// }

//revaildation: time based
// export default async function CachePage(props) {
//     //api call to test whether the caching is enabled or no
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url, { cache: 'force-cache', next: { revalidate: 2 } })
//     const data = await response.json()
//     return <div>
//         <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
//     </div>
// }

//on demand Revalidation : path based
// export default async function CachePage(props) {
//     //api call to test whether the caching is enabled or no
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url, { cache: 'force-cache'})
//     const data = await response.json()
//     return <div>
//         <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
//     </div>
// }

//ondemand Revalidation: tag based
export default async function CachePage(props) {
    //api call to test whether the caching is enabled or no
    const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    //enable e
    const response = await fetch(url, {
        cache: 'force-cache', next: {
            tags: ['timerTag']
        }
    })
    const data = await response.json()

    return <div>
        <h1>Caching App</h1>
        <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </div>
}

export async function generateStaticParams() {
    return [{
        city: 'Kolkata'
    }]
}