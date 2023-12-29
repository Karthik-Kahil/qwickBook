/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

const StyledDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start; */
`;

function BookingInput({ children, type, nameId, value, register }) {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 7);

    setMin(today.toISOString().split("T")[0]);
    setMax(maxDate.toISOString().split("T")[0]);

    console.log();
  }, [type]);

  const handleInput = (e) => {
    const enteredDate = new Date(e.target.value);
    enteredDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 7);

    if (enteredDate < today || enteredDate > maxDate) {
      toast.error("Please enter a date within the next 7 days.");
      e.target.value = "";
    }
  };

  return (
    <StyledDiv>
      <label htmlFor={nameId}>{children}</label>
      <input
        {...register(nameId, { required: true })}
        type={type}
        min={type === "date" ? min : undefined}
        max={type === "date" ? max : undefined}
        id={nameId}
        value={value}
        onInput={handleInput}
      />
    </StyledDiv>
  );
}

export default BookingInput;
