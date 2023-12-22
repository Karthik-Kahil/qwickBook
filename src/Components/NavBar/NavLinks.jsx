import styled from "styled-components";
import NavLinkList from "./NavLinkList";

const StyledNav = styled.nav`
  flex: 3;

  ul {
    display: flex;
    gap: 8%;
    justify-content: center;
  }
`;

function NavLinks() {
  return (
    <StyledNav>
      <ul>
        <NavLinkList path={"/"}>Home</NavLinkList>
        <NavLinkList path={"/about-us"}>About us</NavLinkList>
        <NavLinkList path={"/our-doctors"}>Our doctors</NavLinkList>
        <NavLinkList path={"/facilities"}>Facilities</NavLinkList>
        <NavLinkList path={"/consultation"}>Consultation</NavLinkList>
      </ul>
    </StyledNav>
  );
}

export default NavLinks;
