import styled from "styled-components";
import Button from "../../UI/Button";
import Logo from "../../UI/Logo";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoggedIcons from "../../UI/LoggedIcons";
import { useDispatch } from "react-redux";
import { setLoginPage } from "../../loginShowSlice";

const StyledDiv = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
    margin: auto;
    max-width: 1100px;
    flex: 0;
  }

  background-color: #173641;
`;

function NavBar() {
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
    <StyledDiv>
      <div>
        <Link to={"/"}>
          <Logo />
        </Link>
        <NavLinks />
        {isLoggedIn ? (
          <LoggedIcons data={loggedData} />
        ) : (
          <Button onClick={pageShowHandler}>Login</Button>
        )}
      </div>
    </StyledDiv>
  );
}

export default NavBar;
