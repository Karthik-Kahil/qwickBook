/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.li`
  .active {
    color: var(--color-grey-0);
  }

  a {
    color: var(--color-grey-500);
  }
`;

function NavLinkList({ children, path }) {
  return (
    <StyledLink>
      <NavLink to={path}>{children}</NavLink>
    </StyledLink>
  );
}

export default NavLinkList;
