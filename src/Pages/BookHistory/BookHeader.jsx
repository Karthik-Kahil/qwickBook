/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDiv = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
`;

function BookHeader({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default BookHeader;
