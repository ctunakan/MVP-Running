import React from 'react';
import { StyledHeader, StyledNav, StyledButton} from './styled/NavBar.styled';

const NavBar = ({/*need to pass open new run modal function*/ }) => {
  return (
    <StyledHeader>
      <StyledNav>
        <h1>pacer</h1>
        <StyledButton>Add Run</StyledButton>
      </StyledNav>
    </StyledHeader>
  )
}

export default NavBar;
