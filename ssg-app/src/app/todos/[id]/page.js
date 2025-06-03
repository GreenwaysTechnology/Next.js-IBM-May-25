export async function fetchTodoById(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    const todo = await response.json()
    return todo
}

export async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()
    return todos
}

export default async function TodosDetails(props) {
    const id = (await props.params).id
    const todo = await fetchTodoById(Number(id))
    return <div>
        <h1>{todo.id}</h1>
        <h2>{todo.title}</h2>
        <h3>Status : {todo.status ? 'Done' : 'In Progress'}</h3>
    </div>
}
//generateStaticParams function gets called during build time
//inside this function we have to call api...
//next will create html pages for data.
export async function generateStaticParams() {
    const todos = await fetchTodos()
    //must return array and html page detail
    return todos.map(todo => {
        const id = todo.id.toString()
        return {
            id:id
        }
    })
}