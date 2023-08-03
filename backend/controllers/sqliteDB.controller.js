import sqlite3 from "sqlite3";

const orderTblName = "orders";

// open the database
let db = new sqlite3.Database("mydb.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the mydb database.");
});

// create a table
db.run(
  `CREATE TABLE IF NOT EXISTS ${orderTblName}(id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, vendorName TEXT, modelNumber TEXT, unitPrice REAL, quantity INTEGER)`
);

const indertOrder = ({ date, vendorName, modelNumber, unitPrice, quantity }) =>
  new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO  ${orderTblName}(date, vendorName, modelNumber, unitPrice, quantity) VALUES(?, ?, ?, ?, ?)`,
      [date, vendorName, modelNumber, unitPrice, quantity],
      function (err) {
        if (err) {
          console.log(`error occur ${err.message}`);
          reject(err);
        } else {
          console.log(
            `A new order has been inserted with rowid ${this.lastID}`
          );
          resolve(this.lastID);
        }
      }
    );
  });

const getAllOrders = () =>
  new Promise((resolve, reject) => {
    db.all(`SELECT * FROM ${orderTblName}`, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

export default {
  indertOrder,
  getAllOrders,
};
