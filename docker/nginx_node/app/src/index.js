const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "teste",
  database: "curso_db",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);
connection.query(
  "create table if not exists people (id int not null, name varchar(255), primary key (id))"
);
connection.query("insert ignore into people (id, name) values (1, 'Maria')");
connection.query("insert ignore into people (id, name) values (2, 'João')");

app.get("/", (req, res) => {
  connection.query("select * from people", function (err, result, fields) {
    if (err) throw err;
    let people = "<ul>";
    for (person of result) {
      people += `<li>${person.name}</li>`;
    }
    people += "</ul>";
    res.send("<h1>FullCycle Rocks!</h1>" + people);
  });
});

const server = app.listen(port, () => {
  console.log("Rodando na porta " + port);
});

process.on("SIGTERM", () => {
  console.log("Parando servidor...");
  server.close(() => {
    connection.end();
    console.log("Servidor encerrado");
  });
});
