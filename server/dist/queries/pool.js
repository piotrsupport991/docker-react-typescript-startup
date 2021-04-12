"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pool = require("pg").Pool;
var pool = new Pool({
    user: "postgres",
    host: "db",
    database: "practice",
    password: "password",
    port: 5432,
});
exports.default = pool;
