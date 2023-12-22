/* eslint-disable react/prop-types */
import styled from "styled-components";

const HeaderH2 = styled.h2`
  width: 100%;
  font-size: 6rem;
  line-height: 7rem;

  color: ${(props) =>
    props.color ? `var(${props.color})` : "var(--color-grey-0)"};
  text-align: center;
`;

export default HeaderH2;
