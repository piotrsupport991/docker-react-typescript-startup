import graphql, { GraphQLObjectType, GraphQLList, GraphQLString} from 'graphql'
import UserType from './user_type'

const userQueries = require('../../queries/userQueries')


const RootQuery: GraphQLObjectType = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return userQueries.getUsers();
            }
        },
        user: {
            type: UserType,
            args: { user_id: { type: GraphQLString }},
            resolve(parentValue, { user_id }) {
                return userQueries.getUser(user_id);
            }
        }
    })
})


export default RootQuery