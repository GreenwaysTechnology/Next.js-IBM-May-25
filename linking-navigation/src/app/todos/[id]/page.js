import { TODOS } from "@/app/mock-data/todos"

export default async function TodosDetailsPage(props) {
    const id = (await props.params).id
    const todo = TODOS.find(todo => todo.id === Number(id))
    return <>
        <h1> {id} - TodosDetails Page</h1>
        <h2>{todo.title} - {todo.status ? 'Completed' : 'In Progress'}</h2>
    </>
}