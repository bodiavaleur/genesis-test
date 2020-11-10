import React from "react";
import styled from "styled-components";
import { Option } from "../atoms";
import { List } from "../molecules";

const SideScoreUI = styled.aside`
  display: flex;
  width: 23.5rem;
  height: 100%;
  align-items: center;
  background: var(--white);
`;

export function SideScore() {
  return (
    <SideScoreUI>
      <List>
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
      </List>
    </SideScoreUI>
  );
}
