import React from "react";
import { useSelector } from "react-redux";
import { Step, List } from "../molecules";
import questions from "../../questions.json";

export function PrizeList(props) {
  const prize = useSelector((state) => state.prize);
  const sortedQuestions = questions.sort((a, b) => b.prize - a.prize);

  return (
    <List menu={props.menu}>
      {sortedQuestions &&
        sortedQuestions.map((question) => (
          <Step
            key={question.prize}
            currentPrize={question.prize}
            selectedPrize={prize === question.prize}
            disabled={prize > question.prize}
          />
        ))}
    </List>
  );
}
