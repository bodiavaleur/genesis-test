import React from "react";
import styled from "styled-components";
import { Option, Question } from "../atoms";
import { List } from "../molecules/";
import { GamePanel } from "../organisms";

const GameViewUI = styled.div`
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export function GameView({ isMenuOpened }) {
  return isMenuOpened ? (
    <List>
      <Option />
      <Option />
      <Option />
      <Option />
    </List>
  ) : (
    <GameViewUI>
      <GamePanel />
    </GameViewUI>
  );
}
