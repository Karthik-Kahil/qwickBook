/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledButton = styled.button`
  outline: 0;
  border: 0;
  background-color: #e4f0a8;
  padding: 1.2rem 2.2rem;
  border-radius: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #c8d877;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
