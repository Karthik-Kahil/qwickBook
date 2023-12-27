/* eslint-disable react/prop-types */
import { useState } from "react";
import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  background-color: var(--color-grey-2);
  padding: 2rem 2rem 0rem 2rem;
  border-radius: 1rem;
  flex: 2;
  margin-top: 5rem;
  margin-bottom: 5rem;
  height: auto;
  max-height: 220px;
  overflow: scroll;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    gap: 5px;
  }

  div > .active {
    background-color: var(--color-active-a0);
    border: 1px solid var(--color-active-a1);
  }

  div > .active:hover {
    background-color: var(--color-active-a1);
  }
`;

const StyledBtn = styled.button`
  width: auto;
  background-color: var(--color-green-a1-hover);
  outline: 0;
  border: 1px solid var(--color-green-a1);
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: var(--color-grey-0);
  margin-top: 0rem !important;
  margin-bottom: 2rem !important;
  /* margin-right: 1rem; */

  &:hover {
    background-color: var(--color-green-a1);
  }

  abbr {
    text-decoration: none;
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

function BookingSlots({ bookingData, setSelectedTimeBook, setValue }) {
  const bookedSlots = bookingData[0]?.balanceSlots || [];

  const [bookedSlotsData, setBookedSlotsData] = useState([]);

  const slotHandler = (data) => {
    setValue("appointmentTime", data);
    setValue("doctorsEmail", bookingData[0]?.email);
    setValue("hospitalName", bookingData[0]?.hospital);
    setValue("hospitalLocation", bookingData[0]?.location);

    setBookedSlotsData(data);
    setSelectedTimeBook(data);
  };

  // console.log(bookedSlotsData);
  // console.log(bookedSlots.includes(bookedSlotsData));
  // console.log(bookedSlotsData);

  return (
    <StyledContainer>
      <div>
        {bookingData[0]?.availableSlots.map((data) => (
          <StyledBtn
            className={data === bookedSlotsData ? "active" : ""}
            onClick={() => slotHandler(data)}
            type="button"
            disabled={!bookedSlots.includes(data)}
            key={data}
          >
            <abbr
              title={
                bookedSlots.includes(data) ? "Available" : "Already booked"
              }
            >
              {data}
            </abbr>
          </StyledBtn>
        ))}
      </div>
    </StyledContainer>
  );
}

export default BookingSlots;
