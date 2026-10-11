import {Router} from 'express';
import {crearServicio, listarServicios ,prueba, servicioBuscado, borrarServicio} from '../controllers/servicios.controllers.js';  

const router = Router ()

//http://localhost:3000/api/servicios/test
//http://localhost:3000/api/servicios/
//get, post, put, delete
//router.route("/test").get(prueba)
router.route("/").post(crearServicio).get(listarServicios)
router.route("/:id").get(servicioBuscado).delete(borrarServicio)


export default router;