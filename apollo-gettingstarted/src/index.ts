import { RESTDataSource } from "@apollo/datasource-rest";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'

//Type class
export class Book {
    id: number;
    title: string
    author: string
}
//Data Source Class which talks Rest api
export class BooksAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = "http://localhost:3000/"
    }
    //apis
    async getBooks() {
        return this.get<Book[]>(`books`)
    }
    //save
    async postBook(book: Book) {
        return this.post<Book>(`books`, { body: book }).then(res => res)
    }
}
//Define schema
const typeDefs = `
type Book {
    id:ID
    title:String
    author:String
}
type Query{
   books:[Book]
}

input BookInput {
    id:Int
    title:String!
    author:String!
}

type Mutation {
    addBook(input:BookInput):Book
}   

`
const resolvers = {
    //Query 
    Query: {
        books(parent, args, ctx) {
            return ctx.dataSources.booksAPI.getBooks()
        }
    },
    Mutation: {
        async addBook(parent, args, ctx) {
            const { input } = args;
            return ctx.dataSources.booksAPI.postBook(input)
        },
    }
}
//context Type
type MyContext = {
    dataSources: {
        booksAPI: BooksAPI
    }
}
const server = new ApolloServer<MyContext>({
    typeDefs: typeDefs,
    resolvers: resolvers
})
//Start the Webserver and deploy
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    },
    context: async () => {
        return {
            dataSources: {
                booksAPI: new BooksAPI()
            }
        }
    }
})
console.log(`Apollo Server is Started at ${url}`)