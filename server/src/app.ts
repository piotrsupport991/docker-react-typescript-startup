import express from "express";
import path from "path";
//import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
const Pool = require("pg").Pool;

//import { graphqlHTTP } from "express-graphql";
//import schema from './graphql/schema/schema'
//const indexRouter = require("./routes/index");
//const usersRouter = require("./routes/users");

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "docker_practice",
  password: "password",
  port: 5432,
});

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const users = pool
    .query(`SELECT * FROM users`)
    .then((data: any) => {
        return data.rows 
    }).catch((err: any) => {
        throw err
    })
    res.send(users)
});

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: !(process.env.NODE_ENV == 'production')
// }))

// app.use("/", indexRouter);
//app.use("/users", usersRouter);

module.exports = app;
