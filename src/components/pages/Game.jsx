import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Header, SideScore, GamePanel, PrizeList } from "../organisms";
import { useMediaQuery } from "react-responsive";
import { setPrize } from "../../redux/actionCreators";
import questions from "../../questions.json";

const GameWrapper = styled.main`
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: column;
  padding: 1rem;
  background: var(--bg-gray);
`;

const GameViewUI = styled.div`
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export function Game() {
  const isMenuOpened = useSelector((state) => state.isMenuOpened);
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [pending, setPending] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Go to next question
    questions && setQuestion(questions.find((q) => q.id === questionId));

    // If there's no more questions available - go to results
    if (questionId > questions.length) {
      setGameOver(true);
    }
  }, [questionId]);

  useEffect(() => {
    // Check if selected answers match quantity of right answers
    if (question && selectedAnswers.length === question.rightAnswers.length) {
      setPending(true);

      // Timeout to imitate pending
      setTimeout(() => {
        setPending(false);
        // Check if selected answers match right answers
        // If they do match - go to next question, otherwise game is over
        if (selectedAnswers.every((x) => question.rightAnswers.includes(x))) {
          setCorrect(true);

          setTimeout(() => {
            setCorrect(false);
            setQuestionId(questionId + 1);
            setSelectedAnswers([]);
            dispatch(setPrize(question.prize));
          }, 1000);
        } else {
          setWrong(true);

          setTimeout(() => {
            setGameOver(true);
            setSelectedAnswers([]);
          }, 1000);
        }
      }, 2000);
    }
  }, [selectedAnswers]);

  const clickAnswer = (answerKey) => {
    // To toggle between selected/deselected
    if (selectedAnswers.includes(answerKey)) {
      setSelectedAnswers(selectedAnswers.filter((answ) => answ !== answerKey));
    } else {
      setSelectedAnswers([...selectedAnswers, answerKey]);
    }
  };

  return (
    <>
      <GameWrapper>
        {!isLaptop && <Header />}
        {isMenuOpened ? (
          <PrizeList menu questions={questions} />
        ) : (
          <GameViewUI>
            <GamePanel
              correct={correct}
              pending={pending}
              wrong={wrong}
              selectedAnswers={selectedAnswers}
              clickAnswer={clickAnswer}
              question={question}
              gameOver={gameOver}
            />
          </GameViewUI>
        )}
      </GameWrapper>
      {isLaptop && <SideScore />}
    </>
  );
}
