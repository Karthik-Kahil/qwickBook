import styled from "styled-components";
import HomeBooking from "./HomeBooking";
import Section from "./Section";
import HeaderH2 from "../../UI/HeaderH2";
import { useEffect, useState } from "react";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { setLoginPage } from "../../loginShowSlice";

const StyledDiv = styled.div`
  background-color: var(--color-blue-bg);
  padding-top: 2rem;
  padding-bottom: 3rem;
  padding: 2% 5%;

  p {
    width: 100%;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: var(--color-grey-0);
    text-align: center;
    padding-top: 3rem;
  }

  div {
    max-width: 1100px;
    margin: auto;
  }
`;

const Cover = styled.div`
  padding-top: 5rem;
`;

const AppointmentSection = styled.div`
  display: flex;
  justify-content: center;
`;

const BookButton = styled.div`
  margin-top: 5rem !important;
  margin-bottom: 8rem !important;
`;

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedData, setLoggedData] = useState([]);
  const dispatch = useDispatch();

  const pageShowHandler = () => {
    dispatch(setLoginPage(true));
  };

  useEffect(() => {
    // Get all cookies
    const storedValue = localStorage.getItem("userData");

    if (!storedValue) {
      setIsLoggedIn(false);
      return;
    }

    // Parse the JSON string into an object
    const parsedData = JSON.parse(storedValue);

    // Update state with the parsed data
    setIsLoggedIn(true);
    setLoggedData(parsedData);
  }, [setLoggedData, setIsLoggedIn]);

  return (
    <>
      <StyledDiv>
        <Cover>
          <HeaderH2>
            We are the solution of <br />
            booking doctors in your city
          </HeaderH2>
          <p>
            Finding the right doctor can be a daunting task, especially when
            you&lsquo;re dealing with a medical condition that requires urgent
            attention. With so many healthcare providers out there, it can be
            difficult to know where to start your search.
          </p>
          <AppointmentSection>
            {isLoggedIn ? (
              <HomeBooking name={loggedData.name} email={loggedData.email} />
            ) : (
              <BookButton>
                <Button onClick={pageShowHandler}>
                  Book appoinment today!
                </Button>
              </BookButton>
            )}
          </AppointmentSection>
        </Cover>
      </StyledDiv>
      <Section />
    </>
  );
}

export default Home;
