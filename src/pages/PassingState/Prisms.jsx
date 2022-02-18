import React from "react";
import prism from "../../images/darkBox.svg";
import styled from "styled-components";

function Prisms({ count }) {
  return (
    <Cont>
      {[...Array(count)].map((val, ind) => (
        <img
          src={prism}
          width="200px"
          alt="prism"
          style={{ marginBottom: "-10px", zIndex: count - ind }}
          key={ind}
        />
      ))}
    </Cont>
  );
}

export default Prisms;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
