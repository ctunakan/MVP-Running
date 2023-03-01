import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px 12%;
`

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  

  & > h1 {
    font-size: 60px;
    font-family: 'Dancing Script', cursive;
    justify-self: center;
    margin-bottom: 10px;
  }
`

export const StyledButton = styled.button`
  margin: 20px 0;
  font-size: 14px;
  width: 20%;
  border-radius: 20px;
`
