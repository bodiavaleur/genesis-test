import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Header, SideScore } from "../organisms";
import { GameView } from "../templates";
import { useMediaQuery } from "react-responsive";

const GameWrapper = styled.main`
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: column;
  padding: 1rem;
  background: var(--bg-gray);
`;

export function Game() {
  const isMenuOpened = useSelector((state) => state.isMenuOpened);
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <>
      <GameWrapper>
        {!isLaptop && <Header />}
        <GameView isMenuOpened={isMenuOpened} />
      </GameWrapper>
      {isLaptop && <SideScore />}
    </>
  );
}
