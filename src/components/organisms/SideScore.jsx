import React from "react";
import styled from "styled-components";
import { PrizeList } from "../organisms";

const SideScoreUI = styled.aside`
  display: flex;
  width: 20rem;
  height: 100%;
  align-items: center;
  background: var(--white);
`;

export function SideScore() {
  return (
    <SideScoreUI>
      <PrizeList />
    </SideScoreUI>
  );
}
