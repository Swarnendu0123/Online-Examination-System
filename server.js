const express = require("express");
const app = express();

const PORT = process.env.PUBLIC_PORT || 4000;
const questions = require("./data.json");

app.set("viwe engine", "ejs");

app.get("/exam/:examId/question/:questionId", (req, res) => {
  let questionId = req.params.questionId;
  let ques = questions[questionId - 1];
  console.log(ques);
  res.render("exam.ejs", {
    question_id: ques.question_id,
    sub: ques.subject,
    question: ques.question,
    ans1: ques.option1,
    ans2: ques.option2,
    ans3: ques.option3,
    ans4: ques.option4,
    type: ques.type,
    pos_marks: ques.pos_marks,
    neg_marks: ques.neg_marks,
    exam_name: ques.exam_name,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
