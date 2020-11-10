import React from "react";
import styled from "styled-components";

const OptionUI = styled.li`
  width: 18rem;
  height: 3.5rem;
  border: 1px solid var(--border);
  background: var(--white);
  margin: 0.5rem;
`;

export function Option(props) {
  return <OptionUI {...props}>Test</OptionUI>;
}
