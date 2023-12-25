import styled from "styled-components";

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px !important;
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
  z-index: 999;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

function LoaderSection() {
  return (
    <StyledDiv>
      <StyledLoader />
    </StyledDiv>
  );
}

export default LoaderSection;
