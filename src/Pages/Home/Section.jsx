import styled from "styled-components";
import HeaderH2 from "../../UI/HeaderH2";
import HeaderP from "../../UI/HeaderP";
import FlexTwo from "../../UI/FlexTwo";
import Button from "../../UI/Button";

const StyledDiv = styled.div`
  background-color: var(--color-secondary-a0);
  padding: 8rem 8rem;

  div {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    width: 600px;
  }

  p {
    text-align: center;
    width: 800px;
  }
`;

function Section() {
  return (
    <StyledDiv>
      <div>
        <HeaderH2 color={"--color-grey-900"}>
          Why we are the best from others
        </HeaderH2>
        <HeaderP>
          Our website offers a comprehensive directory of doctors in your city,
          with information on their specialties qualifications, and experience.
          You can easily search for doctors in your area by using our advanced
          search filters, which allow you to narrow down your search based on
          your specific needs and preferences.
        </HeaderP>
      </div>
      <FlexTwo>
        <div>
          <img src="../public/nearest-hospital 1.png" alt="" />
        </div>
        <div>
          <h2>Your nearest hospital</h2>
          <p>
            Our website offers a comprehensive directory of doctors in your
            city, with information on their specialties, qualifications, and
            experience. You can easily search for doctors in your area by using
            our advanced search filters, which allow you to narrow down your
            search based on your specific needs and preferences.
          </p>
          <Button>Find Hospital</Button>
        </div>
      </FlexTwo>
      <FlexTwo>
        <div>
          <h2>Your nearest hospital</h2>
          <p>
            Our website offers a comprehensive directory of doctors in your
            city, with information on their specialties, qualifications, and
            experience. You can easily search for doctors in your area by using
            our advanced search filters, which allow you to narrow down your
            search based on your specific needs and preferences.
          </p>
          <Button>Find Hospital</Button>
        </div>
        <div>
          <img src="../public/free-consultation 1.png" alt="" />
        </div>
      </FlexTwo>
    </StyledDiv>
  );
}

export default Section;
