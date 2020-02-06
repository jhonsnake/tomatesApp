import styled from "styled-components";

const Progress = styled.div`
  width: 100%;
  height: 10px;
  z-index: 3;
  background: linear-gradient(
    to right,
    ${props => {
        if (props.scroll > 50) {
          return "rgba(70, 150, 200, 1)";
        } else {
          return "rgba(220, 60, 87, 1)";
        }
      }}
      ${props => props.scroll + "%"},
    transparent 0
  );
`;

export default Progress;
