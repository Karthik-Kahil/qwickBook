/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start; */
`;

function BookingSelection({ bookingData, children }) {
  const data = bookingData?.data?.doctors;

  return (
    <StyledDiv>
      <label>{children}</label>

      <select>
        {data &&
          data.map((data) => (
            <option key={crypto.randomUUID()} value={data.specialist}>
              {`${data.specialist.split("")[0].toUpperCase()}${data.specialist
                .split("")
                .splice(1)
                .join("")}`}
            </option>
          ))}
      </select>
    </StyledDiv>
  );
}

export default BookingSelection;
