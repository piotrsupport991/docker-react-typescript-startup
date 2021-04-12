import pool from "./pool";

const tableName = "users";

const getUsers = () => {
  return pool
    .query(`SELECT * FROM ${tableName} ORDER BY user_id ASC`)
    .then((data: any) => {
      return data.rows as object[];
    })
    .catch((err: any) => {
      throw err;
    });
};

const getUser = (user_id: string) => {
  return pool
    .query(
      `SELECT * FROM ${tableName} WHERE user_id = '${user_id}' ORDER BY user_id ASC`
    )
    .then((data: any) => {
      return data.rows[0];
    })
    .catch((err: any) => {
      throw err;
    });
};

const createUser = (firstname: string, lastname: string, is_admin: boolean) => {
  return pool
    .query(
      `INSERT INTO ${tableName} (firstname, lastname, is_admin) VALUES ($1, $2, $3)`,
      [firstname, lastname, is_admin]
    )
    .then((data: any) => {
      return data.rowCount;
    })
    .catch((err: any) => {
      throw err;
    });
};

const updateUser = (
  user_id: string,
  firstname: string,
  lastname: string,
  is_admin: boolean
) => {
  return pool
    .query(
      `UPDATE ${tableName} SET firstname = $2, lastname = $3, is_admin = $4 WHERE user_id = $1`,
      [user_id, firstname, lastname, is_admin]
    )
    .then((data: any) => {
      return data.rows[0];
    })
    .catch((err: any) => {
      throw err;
    });
};


const removeUser = (id: string) => {
  return pool
  .query(`DELETE FROM ${tableName} WHERE user_id = $1`, [id])
  .then((data: any) => {
    return data.rows;
  }).catch((err: any) => {
    throw err;
  })
}



module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  removeUser
};
