import React, { useState } from "react";
import styled from "styled-components";
import { Button, ScoreLabel, Title } from "../atoms";
import { Redirect } from "react-router-dom";

const OverviewMenuUI = styled.div`
  display: flex;
  max-width: 25rem;
  height: 15rem;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 1024px) {
    max-width: 35rem;
    align-items: flex-start;
    text-align: start;
  }
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
`;

export function OverviewMenu({ title, buttonLabel, redirectTo, score }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <>
      <OverviewMenuUI>
        <Summary>
          {score && <ScoreLabel>Total score:</ScoreLabel>}
          <Title>{title}</Title>
        </Summary>
        <Button onClick={handleClick}>{buttonLabel}</Button>
      </OverviewMenuUI>

      {clicked && <Redirect to={process.env.PUBLIC_URL + redirectTo} />}
    </>
  );
}
