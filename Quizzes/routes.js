import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const findQuizzesForCourse = async (req, res) => {
    const { cid } = req.params;
        const quizzes = await dao.findQuizzesForCourse(cid);
        res.json(quizzes);
    };
    app.get("/api/courses/:cid/quizzes", findQuizzesForCourse);

    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };
    app.post("/api/courses/:cid/quizzes", createQuiz);

    const deleteQuiz = async (req, res) => {
        const { cid, quizID } = req.params;
        const status = await dao.deleteQuiz(quizID);
        res.json(status);
    };
    app.delete("/api/quizzes/:quizID", deleteQuiz);

    const updateQuiz = async (req, res) => {
        const { cid, quizID } = req.params;
        const status = await dao.updateQuiz(quizID, req.body);
        res.json(status);
      };
    app.put("/api/quizzes/:quizID", updateQuiz);


}