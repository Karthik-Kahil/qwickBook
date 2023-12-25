/* eslint-disable react/prop-types */
import styled from "styled-components";
import BookingInput from "./BookingInput";
import SpinnerMini from "../../UI/SpinnerMini";
import BookingSlots from "./BookingSlots";
import { useForm } from "react-hook-form";
import { getDoctorDetails, sendBookings } from "../../Services/apiBooking";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BookingSelection from "./BookingSelection";
import LoaderSection from "../../UI/LoaderSection";

const StyledForm = styled.form`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 2rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  transition: height 1s all;

  background-color: #104655;

  padding: 3rem;
  border-radius: 2rem;

  border: 2px solid #53b434;

  div {
    width: 100%;
  }

  div > label {
    display: block;
    color: var(--color-grey-0);
    margin-bottom: 1rem;
  }

  div > input {
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 1rem;
    outline: 0;
    border: 0;
  }

  .form-container {
    grid-column: span 2;
    margin-top: 2rem;
  }

  .form-container > button {
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 1rem;
    outline: 0;
    border: 0;
    color: var(--color-grey-0);
    background-color: var(--color-green-a1-hover);
    cursor: pointer;
  }

  .form-container > button:hover {
    background-color: var(--color-green-a1);
  }
`;

const BookingTime = styled.div`
  grid-column: span 2;
  overflow: scroll;
`;

// eslint-disable-next-line no-unused-vars
function HomeBooking({ name, email }) {
  const { register, handleSubmit, watch } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [bookingData, setBookingData] = useState([]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);

    if (
      !data.name &&
      !data.email &&
      !data.mobile &&
      !data.appointmentDate &&
      !data.city
    ) {
      setIsSubmitting(false);
      return toast.error(`Please enter all the fields in *`);
    }

    try {
      await sendBookings(data);
      toast.success("You've booked");
      setIsSubmitting(false);
    } catch (error) {
      // Handle submission error
      toast.error(`You are not logged in`);
      setIsSubmitting(false);
    }
  };

  // Get doctors details
  const doctorDetailsHandler = async (date) => {
    if (date) {
      try {
        setIsLoading(true);
        const fetchDetails = await getDoctorDetails(date);
        console.log(fetchDetails);

        setBookingData(fetchDetails);
        setIsLoading(false);
      } catch (error) {
        toast.error("Invalid date selected");
      }
    }
  };

  useEffect(() => {
    doctorDetailsHandler(watch("appoinmentDate"));
  }, [watch, watch("appoinmentDate")]);

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <LoaderSection />}
        <BookingInput type={"text"} nameId={"name"} register={register}>
          First Name*
        </BookingInput>
        <BookingInput type={"text"} nameId={"lastName"} register={register}>
          Last Name
        </BookingInput>
        <BookingInput type={"email"} nameId={"email"} register={register}>
          Email id*
        </BookingInput>
        <BookingInput
          type={"date"}
          nameId={"appoinmentDate"}
          register={register}
        >
          Select Booking Date*
        </BookingInput>

        {/* <BookingTime>
        <label htmlFor="">Select time</label>
        <BookingSlots bookingData={bookingData} />
      </BookingTime> */}

        <BookingSelection bookingData={bookingData}>
          Select service*
        </BookingSelection>

        <BookingInput type={"text"} nameId={"city"} register={register}>
          City*
        </BookingInput>
        <BookingInput type={"number"} nameId={"mobile"} register={register}>
          Mobile Number*
        </BookingInput>

        <div className="form-container">
          <button>{!isSubmitting ? "Submit" : <SpinnerMini />}</button>
        </div>
      </StyledForm>
    </>
  );
}

export default HomeBooking;
