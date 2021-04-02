"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
//import cookieParser from "cookie-parser";
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
//import schema from './graphql/schema/schema'
//const indexRouter = require("./routes/index");
//const usersRouter = require("./routes/users");
var app = express_1.default();
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(cors_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.get('/', function (req, res) {
    res.send("test");
});
// app.use('/graphql', graphqlHTTP({
//     schema, 
//     graphiql: !(process.env.NODE_ENV == 'production')
// }))
// app.use("/", indexRouter);
//app.use("/users", usersRouter);
module.exports = app;
