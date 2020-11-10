import React from "react";
import styled from "styled-components";
import hand from "../../assets/hand.svg";

const LogoUI = styled.img`
  width: 18rem;
  height: 12rem;
`;

export function Logo() {
  return <LogoUI src={hand} alt='hand-logo' />;
}
