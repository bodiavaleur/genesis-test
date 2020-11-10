import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Option, Question } from "../atoms";
import { List } from "../molecules";
import questions from "../../questions.json";

export function GamePanel() {
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const clickAnswer = (evt) => {
    const answer = evt.target.name;
  };

  return (
    <>
      <Question>
        How old your elder brother was 10 years before you was born, mate?
      </Question>
      <List>
        {}
        <Option />
      </List>
    </>
  );
}
