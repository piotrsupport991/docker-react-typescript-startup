import {GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID, GraphQLScalarType} from 'graphql'
import userType from './user_type'
import UserType from './user_type'
const userQueries = require('../../queries/userQueries')

export const mutation: GraphQLObjectType<string, () => object> = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstname: { type: GraphQLString },
                lastname: { type: GraphQLString },
                is_admin: { type: GraphQLBoolean }
            },
            resolve(parentValue, { firstname, lastname, is_admin}) {
                return userQueries.createUser(firstname, lastname, is_admin)
            }
        },
        updateUser: {
            type: UserType,
            args: {
                user_id: { type: GraphQLID },
                firstname: { type: GraphQLString },
                lastname: { type: GraphQLString },
                is_admin: { type: GraphQLBoolean }
            },
            resolve(parentValue, { user_id, firstname, lastname, is_admin }) {
                return userQueries.updateUser(user_id, firstname, lastname, is_admin)
            }
        },

        removeUser: {
            type: UserType,
            args: { user_id: { type: GraphQLID }
        },
        resolve(parentValue, { user_id }) {
            return userQueries.removeUser(user_id)
        }
        }
    }
})