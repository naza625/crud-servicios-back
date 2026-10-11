import Server from "./src/server/config.js";
import routes from "./src/routes/index.routes.js";  

const server = new Server();

// Rutas
//http://localhost:3000/api/servicios
server.app.use("/api", routes);

server.listen();

console.info("segundo mensaje del backend");