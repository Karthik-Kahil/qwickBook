import styled from "styled-components";
import BookHeader from "./BookHeader";

import StatusList from "./StatusList";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-grey-1);
  width: 100%;
  gap: 50px;
`;

function BookLive({ totalBooking, todayBooking }) {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <BookHeader>Live Status</BookHeader>
      <StyledDiv>
        <StatusList
          iconName="FaHospitalAlt"
          color="--color-status-a1-hover"
          bg="--color-status-a1"
        >
          <h2>{totalBooking}</h2>
          <p>Total Booking</p>
        </StatusList>

        <StatusList
          iconName="IoToday"
          color="--color-active-a1"
          bg="--color-active-a0"
        >
          <h2>{todayBooking}</h2>
          <p>Today Booking</p>
        </StatusList>

        <StatusList
          iconName="MdOutlineTimer"
          color="--color-green-a1"
          bg="--color-green-a1-hover"
        >
          <h2>01</h2>
          <p>Upcoming Booking</p>
        </StatusList>
      </StyledDiv>
    </div>
  );
}

export default BookLive;
