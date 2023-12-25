/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start; */
`;

function BookingInput({
  children,
  type,
  nameId,
  value,
  register,
  watch,
  doctorDetailsHandler,
}) {
  if (nameId === "appoinmentDate")
    doctorDetailsHandler(watch("appoinmentDate"));

  return (
    <StyledDiv>
      <label htmlFor={nameId}>{children}</label>
      <input {...register(nameId)} type={type} id={nameId} value={value} />
    </StyledDiv>
  );
}

export default BookingInput;
