/* eslint-disable react/prop-types */
import { RxExit } from "react-icons/rx";
import styled from "styled-components";
import { logout } from "../Services/apiAuth";
import toast from "react-hot-toast";

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;

  h4 {
    font-size: 1.5rem;
    color: var(--color-grey-0);
  }
`;

const ExitIcon = styled(RxExit)`
  font-size: 2.5rem;
  cursor: pointer;
  color: var(--color-grey-0);
`;

function LoggedIcons({ data }) {
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

  const frontName = () => {
    const firstName = data.name.split(" ")[0].toUpperCase();

    const displayText =
      firstName.length > 10 ? `${firstName.slice(0, 10)}...` : firstName;

    return displayText;
  };

  return (
    <StyledDiv>
      <h4>{frontName()}</h4>
      {/* <AvatarIcon /> */}
      <ExitIcon onClick={handlerLogOut} />
    </StyledDiv>
  );
}

export default LoggedIcons;
