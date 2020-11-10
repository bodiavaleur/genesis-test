import React from "react";
import { AnswersTip, Question } from "../atoms";
import { List, Option } from "../molecules";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  display: flex;
  min-height: 6rem;
  flex-direction: column;
  justify-content: space-between;

  text-align: center;

  @media screen and (min-width: 425px) {
    max-width: 30rem;
    text-align: start;
  }
`;

export function GamePanel({
  correct,
  pending,
  wrong,
  selectedAnswers,
  clickAnswer,
  question,
  gameOver,
}) {
  const showQuestion = (answers) =>
    answers.map((answer, idx) => {
      // destructure entries of answer to get key of answer and actual answer
      const [key, answ] = Object.entries(answer)[0];
      return (
        <Option
          selected={selectedAnswers.includes(key)}
          correct={correct && selectedAnswers.includes(key)}
          pending={pending && selectedAnswers.includes(key)}
          wrong={wrong && selectedAnswers.includes(key)}
          key={idx}
          option={key.toUpperCase()}
          answer={answ}
          select={() => clickAnswer(key)}
        />
      );
    });

  // To show count of possible answers
  const correctAnswersLength = question?.rightAnswers.length;

  return (
    <>
      {question && (
        <>
          <QuestionWrapper>
            <Question>{question.question}</Question>
            {correctAnswersLength > 1 && (
              <AnswersTip>Possible answers: {correctAnswersLength}</AnswersTip>
            )}
          </QuestionWrapper>
          <List>{showQuestion(question.answers)}</List>
        </>
      )}

      {gameOver && <Redirect to={process.env.PUBLIC_URL + "/results"} />}
    </>
  );
}
