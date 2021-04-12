import graphql, { GraphQLList, GraphQLObjectType, GraphQLSchema } from 'graphql'
import RootQueryType from './root_query_types'
import { mutation } from './mutations'

export default new GraphQLSchema({
    query: RootQueryType,
    mutation: mutation
})