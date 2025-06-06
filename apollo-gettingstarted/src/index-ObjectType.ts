import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'

//define schema
const typeDefs = `
    type User {
        id:ID
        name:String
        status:Boolean
        age:Int
        points:Float
    }
    type Query {
       user:User
    }
`
//biz logic : resolvers
const resolvers = {
    Query: {
        user() {
            return {
                id: 1,
                name: 'Subramanian',
                status: true,
                age: 18,
                points: 10.8
            }
        }
    },
    // //Mutation
    // Mutation : {

    // }
}

//create appollo server
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})
//deploy it on Express web Container
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
})
console.log(`Apollo Server is Ready ${url}`)