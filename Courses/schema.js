import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: false},
    number: { type: String, required: true, unique: false},
    startDate: Date,
    endDate: Date,
    lastName: String,
    department: String,
    credits: Number,
    description: String,
    image: String,
    students: [],
    faculty: []
  },
  { collection: "courses" }
);
export default courseSchema;
