import styled from "styled-components";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export const buttonStyles = `
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: #5773ff;
  &:hover {
    color: #415bdf;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: center;
`;

export const PlusIcon = styled(AiFillPlusCircle)`
  ${buttonStyles}
`;

export const MinusIcon = styled(AiFillMinusCircle)`
  ${buttonStyles}
`;
