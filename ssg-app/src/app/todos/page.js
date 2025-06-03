import Link from "next/link"

export async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()
    return todos
}

export default async function Todos() {
    const todos = await fetchTodos()
    return <div>
        <h1>Totoal Todos: {todos.length}</h1>
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>
                    <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                </li>
            })}
        </ul>
    </div>
}