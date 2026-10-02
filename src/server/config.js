import express from "express"; 
import cors from "cors";
import morgan from "morgan";    

class Server {
     constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();

    
     }

     middlewares(){
        this.app.use(cors());
        this.app.use(morgan("dev"))
        this.app.use(express.json())   
     }

     listen(){
        this.app.listen(this.port, () => {
            console.info(`Server running on port ${this.port}`);
        }); 

    }
}

export default Server;  