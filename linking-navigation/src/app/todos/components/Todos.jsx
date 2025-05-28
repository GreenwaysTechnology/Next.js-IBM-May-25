'use client'
import { TODOS } from "@/app/mock-data/todos";
import Link from "next/link";
// import '../link.css'

export default function Todos(){
    return <>
      <ul>
        {TODOS.map(todo=>{
            return <li key={todo.id}>
                 <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
            </li>
        })}
      </ul>
    </>
}
