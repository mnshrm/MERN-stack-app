import mysql from "mysql";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "Employeedb",
});
export default connection;
