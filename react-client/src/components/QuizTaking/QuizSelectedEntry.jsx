import React from 'react';

const QuizSelectedEntry = (props) => {

  function clickHandler(e) {
    let selectdValue = e.target.value;
    if (selectdValue === props.answer) {
      props.score[props.id] = true;
    }
    console.log(props.score)
  }

  return (
    <div className="quiz-question-entry">
      {props.id+1}) {props.questions}
      <div className="quiz-answer-entry">
        <button onClick={clickHandler} value={props.selection[0]}> {props.selection[0]} </button><br />
        <button onClick={clickHandler} value={props.selection[1]}> {props.selection[1]} </button><br />
        <button onClick={clickHandler} value={props.selection[2]}> {props.selection[2]} </button><br />
        <button onClick={clickHandler} value={props.selection[3]}> {props.selection[3]} </button>
      </div>
    </div>
  )
};

export default QuizSelectedEntry;

//on each selection, check to see if the user selected the right one
  //if they did, increment the counter

//on confirm submission, update the state with the user's score