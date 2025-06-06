import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'

//Mock users
const USERS = [
    {
        id: 1,
        firstName: "Subramanian",
        lastName: "Murugan",
        age: 10,
        points: 100,
        status: true
    },
    {
        id: 2,
        firstName: "Geetha",
        lastName: "Subramanian",
        age: 30,
        points: 900,
        status: true
    },
    {
        id: 4,
        firstName: "Hema",
        lastName: "Chandran",
        age: 30,
        points: 900,
        status: true
    }

]

//define schema
const typeDefs = `
    type User {
        id:ID!
        firstName:String!
        lastName:String!
        status:Boolean
        age:Int
        points:Float
    }
    type Query {
       users:[User!]!
    }
`
//biz logic : resolvers
const resolvers = {
    Query: {
        users() {
            return USERS 
        }
    },

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