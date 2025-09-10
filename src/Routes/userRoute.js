import express from "express";
import {
  fetch,
  createUser,
  update,
  deleteUser,
} from "../Controller/userController.js";
const route = express.Router();
import { createuservalidationschema } from "../Utils/validationschema.js";
import { checkSchema } from "express-validator";

// route.get("/fetch", fetch);
route.get("/getAllUsers", fetch);
route.post("/create", checkSchema(createuservalidationschema), createUser);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

// route.post("/",  checkSchema(createuservalidationschema));

export default route;
