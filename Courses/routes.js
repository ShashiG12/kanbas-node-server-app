import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const fetchAllCourses = async (req, res) => {
        const courses = await dao.fetchAllCourses();
        res.send(courses);
    };
    app.get("/api/courses", fetchAllCourses);

    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
    };
    app.post("/api/courses", createCourse);

    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.courseID);
        res.json(status);
    };
    app.delete("/api/courses/:courseID", deleteCourse);

    const updateCourse = async (req, res) => {
        const { courseID } = req.params;
        const status = await dao.updateCourse(courseID, req.body);
        res.json(status);
      };
    app.put("/api/courses/:courseID", updateCourse);

}