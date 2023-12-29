/* eslint-disable react/prop-types */
import { BsThreeDots } from "react-icons/bs";

import styled from "styled-components";
import { logout } from "../Services/apiAuth";
import toast from "react-hot-toast";
import capitalizeEachWord from "./TitleCaseConvert";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;

  h4 {
    font-size: 1.5rem;
    color: var(--color-grey-0);
    user-select: none;
  }
`;

const ExitIcon = styled(BsThreeDots)`
  font-size: 2.5rem;
  cursor: pointer;
  color: var(--color-grey-0);
`;

const DropDown = styled.div`
  position: absolute;
  background-color: var(--color-grey-0);
  top: ${(props) => (props.$isOpen ? "60px" : "50px")};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  right: 0;
  border-radius: 10px;
  width: 180px !important;
  justify-content: space-around !important;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  padding: 0 0 !important;
  transition: top 0.5s ease;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    user-select: none;
  }

  li {
    cursor: pointer;
    border-radius: 10px;
    padding: 1rem 2rem;
    transition: background-color 0.3s ease;
    width: 100%;

    &:hover {
      background-color: var(--color-grey-300);
      color: var(--color-grey-900);
    }
  }
`;

const LogOut = styled.p`
  color: var(--color-red-a1);
`;

function LoggedIcons({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handlerLogOut = async () => {
    localStorage.clear("userData");
    try {
      await logout();
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      toast.error("You already logged out!");
    }
  };

  return (
    <StyledDiv>
      <h4>{capitalizeEachWord(data.name.split(" ")[0])}</h4>
      <ExitIcon onClick={() => setIsOpen((_) => !_)} />

      <DropDown $isOpen={isOpen}>
        <ul>
          <li onClick={() => setIsOpen((_) => !_)}>
            <Link to="/booking-history">Booking History</Link>
          </li>
          <li>
            <LogOut onClick={handlerLogOut}>Logout</LogOut>
          </li>
        </ul>
      </DropDown>
    </StyledDiv>
  );
}

export default LoggedIcons;
