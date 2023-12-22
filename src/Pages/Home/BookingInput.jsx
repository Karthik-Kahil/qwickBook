/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start; */
`;

function BookingInput({ children, type, nameId, value, register }) {
  return (
    <StyledDiv>
      <label htmlFor={nameId}>{children}</label>
      <input type={type} id={nameId} value={value} {...register(nameId)} />
    </StyledDiv>
  );
}

export default BookingInput;
