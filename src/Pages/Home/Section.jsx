import styled from "styled-components";
import HeaderH2 from "../../UI/HeaderH2";

const StyledDiv = styled.div`
  background-color: #f9fbe8;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

function Section() {
  return (
    <StyledDiv>
      <HeaderH2 color={"--color-grey-900"}>
        Why we are the best from others
      </HeaderH2>
    </StyledDiv>
  );
}

export default Section;
