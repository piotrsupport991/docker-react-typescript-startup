"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
//import videoType from './video_type'
//const videoQueries = require('../queries/videoQueries')
var userType = new graphql_1.GraphQLObjectType({
    name: "UserType",
    fields: function () { return ({
        user_id: { type: graphql_1.GraphQLID },
        firstname: { type: graphql_1.GraphQLString },
        lastname: { type: graphql_1.GraphQLString },
        is_admin: { type: graphql_1.GraphQLBoolean },
        // videos: {
        //     type: new GraphQLList(videoType),
        //     resolve(parentValue, args) {
        //         console.log(parentValue)
        //         return videoQueries.getVideosByUserId(parentValue.id)
        //     }
        // }
    }); }
});
exports.default = userType;
