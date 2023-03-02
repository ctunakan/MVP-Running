import React from 'react';
import { StyledHeader, StyledNav, StyledButton} from './styled/NavBar.styled';

const NavBar = ({openModal}) => {
  return (
    <StyledHeader>
      <StyledNav>
        <h1>pacer</h1>
        <StyledButton onClick={openModal}>Add Run</StyledButton>
      </StyledNav>
    </StyledHeader>
  )
}

export default NavBar;
