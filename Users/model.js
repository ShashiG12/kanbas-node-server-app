import mongoose from "mongoose";
import schema from "./schema.js";
// const model = mongoose.model("UserModel", schema);
const model = mongoose.model("users", schema);
export default model;