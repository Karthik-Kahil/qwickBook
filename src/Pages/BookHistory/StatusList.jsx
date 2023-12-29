/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { FaHospitalAlt } from "react-icons/fa";
import { IoToday } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";

const StatusContainer = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  background-color: var(--color-grey-0);
  border-radius: 10px;
  gap: 4rem;
`;

const Icons = styled.div`
  ${(props) =>
    props.color &&
    css`
      color: var(${props.color});
      background-color: var(${props.$bg});
    `}

  padding: 2rem 2.3rem;
  border-radius: 50px;

  svg {
    font-size: 4rem;
  }
`;

const Message = styled.div`
  flex-grow: 2;

  h2 {
    font-size: 4rem;
    line-height: 5rem;
    padding: 0;
  }
  p {
    font-size: 2rem;
    line-height: 3rem;
    padding: 0;
  }
`;

function StatusList({ children, iconName, color, bg }) {
  return (
    <StatusContainer>
      <Icons color={color} $bg={bg}>
        {iconName === "FaHospitalAlt" && <FaHospitalAlt />}
        {iconName === "IoToday" && <IoToday />}
        {iconName === "MdOutlineTimer" && <MdOutlineTimer />}
      </Icons>
      <Message>{children}</Message>
    </StatusContainer>
  );
}

export default StatusList;
