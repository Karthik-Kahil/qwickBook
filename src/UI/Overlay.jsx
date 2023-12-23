import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

function Overlay() {
  return <StyledDiv></StyledDiv>;
}

export default Overlay;
