"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var morgan_1 = __importDefault(require("morgan"));
var express_graphql_1 = require("express-graphql");
var schema_1 = __importDefault(require("./graphql/schema/schema"));
var cors_1 = __importDefault(require("cors"));
//const Pool = require("pg").Pool;
//import schema from './graphql/schema/schema'
//const indexRouter = require("./routes/index");
//const usersRouter = require("./routes/users");
// const pool = new Pool({
//   user: "postgres",
//   host: "db",
//   database: "practice",
//   password: "password",
//   port: 5432,
// });
var app = express_1.default();
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(cors_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// app.get("/", (req, res) => {
//   const users = pool
//     .query(`SELECT * FROM users`)
//     .then((data: any) => {
//         return data.rows 
//     }).catch((err: any) => {
//         throw err
//     })
//     res.send(users)
// });
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: schema_1.default,
    graphiql: !(process.env.NODE_ENV == 'production')
}));
// app.use("/", indexRouter);
//app.use("/users", usersRouter);
module.exports = app;
