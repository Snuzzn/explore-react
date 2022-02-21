import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

export const Layout = styled.div`
  display: flex;
  gap: 25px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
`;

export const IconButton = styled.div`
  background-color: #2b2a33;
  cursor: pointer;
  padding: 11px;
  padding-bottom: 5px;
  align-self: flex-start;
  border-radius: 8px;
  &:hover {
    background-color: #373641;
    color: white;
  }
`;

export const StyledLink = styled(Link)`
  color: #bdbdbd;
  text-decoration: none;
`;

export const Input = styled.input`
  padding: 15px;
  background-color: #4e4d59;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16pt;
  box-sizing: border-box;
`;

export const MiniLayout = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  min-width: 450px;
`;

export const TextCont = styled.div`
  width: 700px;
  font-size: 14pt;
`;

export const List = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const ListNumber = styled.span`
  color: #5773ff;
  font-weight: bold;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 10px;
`;

export const UnstyledBtn = styled.button`
  border: none;
  text-decoration: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }  
  100% {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled(ImSpinner2)`
  animation: ${spin} 1.5s linear infinite;
`;

export const ResultsCont = styled.div`
  background-color: #2a2e33;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
`;

export const Result = styled.a`
  max-width: 580px;
  text-decoration: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  display: block;
  &:hover {
    background-color: #202327;
  }
`;
