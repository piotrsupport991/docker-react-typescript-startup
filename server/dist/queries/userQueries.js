"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pool_1 = __importDefault(require("./pool"));
var tableName = "users";
var getUsers = function () {
    return pool_1.default
        .query("SELECT * FROM " + tableName + " ORDER BY user_id ASC")
        .then(function (data) {
        return data.rows;
    })
        .catch(function (err) {
        throw err;
    });
};
var getUser = function (user_id) {
    return pool_1.default
        .query("SELECT * FROM " + tableName + " WHERE user_id = '" + user_id + "' ORDER BY user_id ASC")
        .then(function (data) {
        return data.rows[0];
    })
        .catch(function (err) {
        throw err;
    });
};
var createUser = function (firstname, lastname, is_admin) {
    return pool_1.default
        .query("INSERT INTO " + tableName + " (firstname, lastname, is_admin) VALUES ($1, $2, $3)", [firstname, lastname, is_admin])
        .then(function (data) {
        return data.rowCount;
    })
        .catch(function (err) {
        throw err;
    });
};
var updateUser = function (user_id, firstname, lastname, is_admin) {
    return pool_1.default
        .query("UPDATE " + tableName + " SET firstname = $2, lastname = $3, is_admin = $4 WHERE user_id = $1", [user_id, firstname, lastname, is_admin])
        .then(function (data) {
        return data.rows[0];
    })
        .catch(function (err) {
        throw err;
    });
};
var removeUser = function (id) {
    return pool_1.default
        .query("DELETE FROM " + tableName + " WHERE user_id = $1", [id])
        .then(function (data) {
        return data.rows;
    }).catch(function (err) {
        throw err;
    });
};
module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    createUser: createUser,
    updateUser: updateUser,
    removeUser: removeUser
};
