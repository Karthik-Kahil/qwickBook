import styled from "styled-components";

const StyledDiv = styled.div`
  h2 {
    font-size: 3rem;
    cursor: pointer;
    color: var(--color-grey-0);
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  span {
    color: rgb(84, 180, 53);
  }
`;

function Logo() {
  return (
    <StyledDiv>
      <h2>
        Qwick<span>Book</span>.
      </h2>
    </StyledDiv>
  );
}

export default Logo;
