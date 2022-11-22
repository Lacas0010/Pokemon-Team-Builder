import db from "./DataBase.js";

const createTable = () => {
  db.transaction((tx) => {
    // tx.executeSql("DROP TABLE Time1;");

    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Time1 (id INTEGER PRIMARY KEY AUTOINCREMENT, game TEXT, numDex INT, name TEXT, attack1 INT, attack2 INT, attack3 INT, attack4 INT, sprite TEXT, shiny INT);"
    )
  });
};

createTable();

export const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Time1 (game, numDex, name, attack1, attack2, attack3, attack4, sprite, shiny) values (?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [
          obj.game,
          obj.numDex,
          obj.name,
          obj.attack1,
          obj.attack2,
          obj.attack3,
          obj.attack4,
          obj.sprite,
          obj.shiny,
        ],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            resolve(insertId);
          } else {
            reject("Error inserting obj: " + JSON.stringify(obj));
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const update = (id, obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE Time1 SET game=?, numDex=?, name=?, attack1=?, attack2=?, attack3=?, attack4=?, sprite=?, shiny=? WHERE id=?;",
        [
          obj.game,
          obj.numDex,
          obj.name,
          obj.attack1,
          obj.attack2,
          obj.attack3,
          obj.attack4,
          obj.sprite,
          obj.shiny,
          id,
        ],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve(rowsAffected);
          } else {
            reject("Error updating obj: id=" + id);
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const find = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Time1 WHERE id=?;",
        [id],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows._array[0]);
          } else {
            reject("Obj not found: id=" + id);
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const all = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Time1",
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const remove = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM Time1",
        [],
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export default {
  create,
  update,
  find,
  all,
  remove,
};
