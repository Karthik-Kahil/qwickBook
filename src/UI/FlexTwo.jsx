import styled from "styled-components";

const FlexTwo = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px !important;
  margin: auto;
  gap: 5rem;
  margin-top: 8rem !important;

  div {
    width: 100%;
    display: flex;
    align-items: baseline !important;
  }

  div > button {
    margin-top: 2rem;
  }

  div > img {
    width: 100%;
    max-width: 500px;
  }

  div > h2 {
    font-size: 4rem;
    text-align: left;
    width: 100%;
  }

  div > p {
    font-size: 1.5rem;
    text-align: left;
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export default FlexTwo;
