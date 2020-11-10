import React from "react";
import styled from "styled-components";

const ListUI = styled.ul`
  display: flex;
  max-width: 40rem;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
`;

export function List({ children }) {
  return <ListUI>{children}</ListUI>;
}
