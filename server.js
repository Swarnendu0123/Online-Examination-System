const express = require("express");
const app = express();

const PORT = process.env.PUBLIC_PORT || 4000;
const questions = require("./data.json");

app.set("viwe engine", "ejs");
try {
  app.get("/exam/:examId/question/:questionId", (req, res) => {
    let questionId = req.params.questionId;
    let ques = questions[questionId - 1];
    console.log(ques);
    res.render("exam.ejs", { 
      ques:ques,
      questions:questions, 
    });
  });
} catch (error) {
  console.log(error);
}

try { 
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}