import express from "express"; 
import cors from "cors";
import morgan from "morgan";    
import {dirname} from "path";
import {fileURLToPath} from "url";
import "../database/db.js"


class Server {
     constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares()
     }

     middlewares(){
        this.app.use(cors());
        this.app.use(morgan("dev"))
        this.app.use(express.json())

        const __dirname = dirname(fileURLToPath(import.meta.url))
        console.log(__dirname + "/../../public")
        this.app.use(express.static(__dirname + "/../../public")) // configuracion de un archivo estatico
       
     }

     listen(){
        this.app.listen(this.port, () => {
            console.info(`Server running on port ${this.port}`);
        }); 

    }
}

export default Server;  