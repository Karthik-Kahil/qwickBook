/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start; */
`;

function mergeSpecialists(specialists) {
  let specialistCounts = {};

  specialists.forEach((specialist) => {
    specialistCounts[specialist] = (specialistCounts[specialist] || 0) + 1;
  });

  let output = Object.entries(specialistCounts)
    .filter(([specialist, count]) => count > 0)
    .map(([specialist, count]) => `${specialist} (${count})`);

  return output;
}

function BookingSelection({
  bookingData,
  children,
  label,
  select,
  register,
  currentData,
  setCurrentData,
  currentBookingList,
  setCurrentBookingList,
}) {
  const data = bookingData?.data?.doctors;
  const [currentSelect, setCurrentSelect] = useState("");
  const [currentDoctor, setCurrentDoctor] = useState("");

  const emptyListData = [];

  if (select === "specialist") {
    data.filter(
      (data) =>
        data.specialist === data.specialist &&
        emptyListData.push(data.specialist)
    );
  }

  const currendDataHandler = (e) => {
    setCurrentSelect(e.target.value);
    setCurrentData(
      data.filter((ele) => e.target.value === ele.specialist && ele)
    );
  };

  const currentDoctorHandler = (e) => {
    console.log(e.target.value);
    setCurrentDoctor(e.target.value);
    setCurrentBookingList(
      currentData.filter((ele) => e.target.value === ele.name && ele)
    );
  };

  return (
    <StyledDiv>
      <label>{children}</label>

      {data && select === "specialist" && (
        <select
          {...register(select)}
          value={select === "specialist" && currentSelect}
          onChange={currendDataHandler}
        >
          <option value="">{label}</option>

          {mergeSpecialists(emptyListData).map((data) => (
            <option
              key={crypto.randomUUID()}
              value={data.replace(/\(\d+\)/, "").trim()}
            >
              {`${data.toUpperCase()}`}
            </option>
          ))}
        </select>
      )}

      {select === "doctorsname" && (
        <select
          {...register(select)}
          value={select === "doctorsname" && currentDoctor}
          onChange={currentDoctorHandler}
        >
          <option value="">{label}</option>
          {currentData.map((data) => (
            <option key={crypto.randomUUID()} value={data.name}>
              {`${data.name.split("")[0].toUpperCase()}${data.name
                .split("")
                .splice(1)
                .join("")} - (${data.hospital.toUpperCase()})`}
            </option>
          ))}
        </select>
      )}
    </StyledDiv>
  );
}

export default BookingSelection;
