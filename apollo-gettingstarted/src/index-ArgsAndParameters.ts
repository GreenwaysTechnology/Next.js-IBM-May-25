import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'

//define schema
const typeDefs = `
    type Query {
       welcome(name:String):String
    }
`
//biz logic : resolvers
const resolvers = {
    Query: {
        welcome(parent, args, contextValue, info) {
            console.log(args)
            return `Welcome to ${args.name}`
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