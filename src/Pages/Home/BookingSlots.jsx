/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  background-color: var(--color-grey-0);
  padding: 2rem;
  border-radius: 1rem;
  flex: 2;
  margin-top: 5rem;
  margin-bottom: 5rem;
  height: 220px;
  overflow: scroll;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const StyledBtn = styled.button`
  width: 180px;
  background-color: var(--color-green-a1-hover);
  outline: 0;
  border: 1px solid var(--color-green-a1);
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: var(--color-grey-0);
  margin-top: 0rem !important;
  margin-bottom: 2rem !important;

  &:hover {
    background-color: var(--color-green-a1);
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--color-red-a1);
      border: 1px solid var(--color-red-a1);

      &:hover {
        background-color: var(--color-red-a1);
      }
    `}
`;

function BookingSlots({ bookingData }) {
  return (
    <StyledContainer>
      <div>
        {bookingData.map((data) => (
          <StyledBtn key={data.name}>7:00 am - 8:00 am</StyledBtn>
        ))}
      </div>
    </StyledContainer>
  );
}

export default BookingSlots;
