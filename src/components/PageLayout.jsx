import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { IconButton, MiniLayout, StyledLink } from "./styles/Styles";
import styled from "styled-components";

function PageLayout({ children, title }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          alignSelf: "flex-start",
        }}
      >
        <StyledLink to="/">
          <IconButton>
            <IoArrowBackSharp size="1em" />
          </IconButton>
        </StyledLink>
        <h3>{title}</h3>
      </div>
      {children}
    </>
  );
}

export default PageLayout;
