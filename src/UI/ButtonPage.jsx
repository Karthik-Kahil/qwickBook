/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-grey-0);
  outline: 0;
  border: 0;
  padding: 0.8rem 2rem;
  border-radius: 10px;

  &:hover {
    background-color: var(--color-grey-blur);
  }
`;

function ButtonPage({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default ButtonPage;
