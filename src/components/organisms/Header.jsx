import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import burgerMenu from "../../assets/burger-menu.svg";
import burgerClose from "../../assets/burger-close.svg";
import { toggleMenu } from "../../redux/actionCreators";

const HeaderUI = styled.header`
  display: flex;
  width: 100%;
  height: 1rem;
  flex-direction: row-reverse;
`;

const ToggleButton = styled.button`
  background: none;
  outline: none;
  border: none;
`;

export function Header() {
  const isMenuOpened = useSelector((state) => state.isMenuOpened);
  const dispatch = useDispatch();

  const handleClickMenu = () => dispatch(toggleMenu());

  return (
    <HeaderUI>
      <ToggleButton onClick={handleClickMenu}>
        {isMenuOpened ? (
          <img src={burgerClose} alt='close' />
        ) : (
          <img src={burgerMenu} alt='menu' />
        )}
      </ToggleButton>
    </HeaderUI>
  );
}
