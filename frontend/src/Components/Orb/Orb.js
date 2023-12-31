import React from "react";
import styled from "styled-components";

function Orb() {
  // const { width, height } = useWindowSize();

  // // const moveOrb = keyframes`
  // // 0%{
  // //     transform: translate(0, 0);
  // // }
  // // 50%{
  // //     transform: translate(${width}px, ${height / 2}px);
  // // }
  // // 100%{
  // //     transform: translate(0, 0);
  // // }
  // // `;
  return <OrbStyled />;
}

const OrbStyled = styled.div`
  width: 70vh;
  height: 70vh;
  position: absolute;
  border-radius: 50%;
  margin-left: -37vh;
  margin-top: -37vh;
  background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
  filter: blur(400px);
`;

export default Orb;
