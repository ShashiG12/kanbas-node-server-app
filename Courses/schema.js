import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true, unique: true },
    startDate: Date,
    endDate: Date,
    lastName: String,
    department: String,
    credits: Number,
    description: String,
    image: String,
  },
  { collection: "courses" }
);
export default courseSchema;
