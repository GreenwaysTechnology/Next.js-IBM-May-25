import { gql } from "@apollo/client"
import { getClient } from "../lib/client"

//Declare Query
const booksQuery = gql`query BOOKS_QUERY {
  books {
    id
    author
    title
  }
}
`


export default async function Books() {
    const { data: { books } } = await getClient().query({ query: booksQuery })
    return <>
        <ul>
            {books.map(book => {
                return <li key={book.id}>
                    <span>{book.title} by {book.author}</span>
                </li>
            })}
        </ul>
    </>
}