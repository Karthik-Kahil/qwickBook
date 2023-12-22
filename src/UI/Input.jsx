import styled from "styled-components";

/* eslint-disable react/prop-types */
const StyledDiv = styled.div`
  color: var(--color-grey-0);

  label {
    margin-bottom: 1rem;
  }

  input {
    padding: 6px 10px;
    border-radius: 10px;
    outline: 0;
    border: 0;
    color: var(--color-grey-1);
    margin-top: 1rem;
  }
`;

function Input({ children, type, nameId }) {
  return (
    <StyledDiv>
      <label htmlFor={nameId}>{children}</label>
      <input type={type} id={nameId} />
    </StyledDiv>
  );
}

export default Input;
