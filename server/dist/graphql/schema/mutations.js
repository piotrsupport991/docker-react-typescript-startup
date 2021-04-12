"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutation = void 0;
var graphql_1 = require("graphql");
var user_type_1 = __importDefault(require("./user_type"));
var userQueries = require('../../queries/userQueries');
exports.mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: user_type_1.default,
            args: {
                firstname: { type: graphql_1.GraphQLString },
                lastname: { type: graphql_1.GraphQLString },
                is_admin: { type: graphql_1.GraphQLBoolean }
            },
            resolve: function (parentValue, _a) {
                var firstname = _a.firstname, lastname = _a.lastname, is_admin = _a.is_admin;
                return userQueries.createUser(firstname, lastname, is_admin);
            }
        },
        updateUser: {
            type: user_type_1.default,
            args: {
                user_id: { type: graphql_1.GraphQLID },
                firstname: { type: graphql_1.GraphQLString },
                lastname: { type: graphql_1.GraphQLString },
                is_admin: { type: graphql_1.GraphQLBoolean }
            },
            resolve: function (parentValue, _a) {
                var user_id = _a.user_id, firstname = _a.firstname, lastname = _a.lastname, is_admin = _a.is_admin;
                return userQueries.updateUser(user_id, firstname, lastname, is_admin);
            }
        },
        removeUser: {
            type: user_type_1.default,
            args: { user_id: { type: graphql_1.GraphQLID }
            },
            resolve: function (parentValue, _a) {
                var user_id = _a.user_id;
                return userQueries.removeUser(user_id);
            }
        }
    }
});
