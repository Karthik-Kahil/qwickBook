import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: s3 1s infinite linear;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

function Loader() {
  return (
    <StyledDiv>
      <StyledLoader />
    </StyledDiv>
  );
}

export default Loader;
