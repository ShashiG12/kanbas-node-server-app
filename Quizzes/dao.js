import model from "./model.js";
export const findQuizzesForCourse = (courseID) => model.find({"course": courseID});
export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz);
  }  
export const deleteQuiz = (quizID) => model.deleteOne({ _id: quizID });
export const updateQuiz = (quizID, quiz) =>  model.updateOne({ _id: quizID }, { $set: quiz });