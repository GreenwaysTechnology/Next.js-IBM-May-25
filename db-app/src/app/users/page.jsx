// const url = 'http://localhost:3000/api/user'
const url = `${process.env.USERS_URL}`

export async function getUsers() {
    const response = await fetch(url)
    return response.json()
}

export default async function UsersPage() {
    const users = await getUsers()
    return <main>
        <h1>The App is Running in {process.env.MODE} mode</h1>
        <ul>
            {
                users.map(user => {
                    return <li key={user.id}>
                        <span>{user.id} -  {user.name}</span>
                    </li>
                })
            }
        </ul>
    </main>

}