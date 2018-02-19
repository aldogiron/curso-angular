import { Application } from "express";
import * as express from "express";
import * as empleadoController from "./controllers/empleados.controller";

const router = express.Router();

router.route('/empleados')
  .get(empleadoController.get)
  .post(empleadoController.post);

router.route('/empleados/:empleadoId')
  .get(empleadoController.getById)
  .put(empleadoController.put)
  .delete(empleadoController._delete);

export default router;