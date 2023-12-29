import styled from "styled-components";
import Logo from "../../UI/Logo";
import HeaderP from "../../UI/HeaderP";
import { Link } from "react-router-dom";

const StyledFoot = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--color-blue-bg);
  padding: 6rem 0 0 0;

  p {
    padding-top: 3rem;
    padding-bottom: 5rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: var(--color-grey-0);
    max-width: 600px;
  }
`;

const FooterLinks = styled.div`
  ul {
    display: flex;
    gap: 20px;
    color: var(--color-grey-0);
  }

  ul > li {
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <StyledFoot>
      <Link to={"/"}>
        <Logo />
      </Link>
      <HeaderP>
        Finding the right doctors can be a doubting task, especially when you’re
        dealing with a medical condition that requires urgent attention. With so
        many healthcare providers out there. It can be difficult to know where
        to start your search.
      </HeaderP>
      <FooterLinks>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/about-us"}>About us</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/our-doctors"}>Our doctors</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/facilities"}>Facilities</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/consultation"}>Consultation</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/booking-history"}>Booking History</Link>
          </li>
        </ul>
      </FooterLinks>
      <p>&#169; Copyright 2023 | All rights reserved</p>
    </StyledFoot>
  );
}

export default Footer;
