import React from "react";
import styled from "styled-components";
import { Logo } from "../atoms/";
import { OverviewMenu } from "../molecules/";

const OverviewWrapper = styled.main`
  display: flex;
  width: inherit;
  height: inherit;
  padding: 0 1rem;

  ${({ triangle }) =>
    triangle &&
    `
  background: linear-gradient(
    to bottom right,
    #fff 0%,
    #fff 50%,
    var(--semi-orange) 50%,
    var(--semi-orange) 100%
  );
  `}
`;

const OverviewUI = styled.div`
  display: flex;
  width: 100%;
  margin: auto 0;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export function Overview(props) {
  return (
    <OverviewWrapper triangle={!!props.triangle}>
      <OverviewUI>
        <Logo />
        <OverviewMenu {...props} />
      </OverviewUI>
    </OverviewWrapper>
  );
}
