"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var user_type_1 = __importDefault(require("./user_type"));
var userQueries = require('../../queries/userQueries');
var RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: function () { return ({
        users: {
            type: new graphql_1.GraphQLList(user_type_1.default),
            resolve: function () {
                return userQueries.getUsers();
            }
        },
        user: {
            type: user_type_1.default,
            args: { user_id: { type: graphql_1.GraphQLString } },
            resolve: function (parentValue, _a) {
                var user_id = _a.user_id;
                return userQueries.getUser(user_id);
            }
        }
    }); }
});
exports.default = RootQuery;
