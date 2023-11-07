import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questions, deleteQuestion, updateQuestion}) {

  const quizQuestion = questions.map((question) => {
    return <QuestionItem key={question.id} question={question} 
    deleteQuestion={()=>deleteQuestion(question.id)} 
    updatedQuestionn={(newCorrectIndex) => updateQuestion(question.id, newCorrectIndex)}/>
  }) 


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {quizQuestion}
        </ul>
    </section>
  );
}

export default QuestionList;
