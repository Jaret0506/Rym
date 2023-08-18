const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/routes.js");
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server levantado en el puerto: " + PORT);
});
// .createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   if (req.url.includes("/rickandmorty/character")) {
//     const id = Number(req.url.split("/").pop());
//     (res, id);
//   }
// })

// HW DE WEB SERVER
// if (req.url === "/") {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Prueba");
// }
// if (req.url.includes("/rickandmorty/character")) {
//   const id = Number(req.url.split("/").pop());

//   const character = data.find((character) => character.id === id);
//   if (character) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify(character));
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify({ error: "Character not found" }));
//   }
// }
