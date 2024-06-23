import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    title: String,
    course: String,
    availableDate: Date,
    dueDate: Date,
    untilDate: Date,
    points: Number,
    numQuestions: Number,
    instructions: String,
    quizType: {
        type: String,
        enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
        default: "GRADED_QUIZ",
      },
    assignmentGroup: {
        type: String,
        enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
        default: "QUIZZES",
      },
    lockQuestions: {type: Boolean, default: false},
    shuffleAnswers: {type: Boolean, default: true},
    timeLimit: Number,
    multipleAttempts: {type: Boolean, default: false},
    howManyAttempts: Number,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneAtATime: {type: Boolean, default: true},
    webcamRequired: {type: Boolean, default: false},
    published : {type: Boolean, default: false},
    questions: [{
      title: String,
      type: {
        type: String,
        enum: ["CHOICE", "TF", "BLANKS"],
        default: "CHOICE",
      },
      points: Number,
      question: String,
      choices: [{
        text: String,
        correct: Boolean
      }],
      correctAnswer: Boolean,
      blankAnswers: [{
        type:String
      }]
    }],
    userAttempts: [{
      userID: String,
      attempts: [{
        answers: [{
          questionID: String,
          tfAnswer: Boolean,
          selectedAnswer: String,
        }]
      }]
    }]
  },
  { collection: "quizzes" }
);
export default quizSchema;
