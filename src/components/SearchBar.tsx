import React, { FC } from "react";
import styled from "styled-components";
import { Input } from "./styles/Styles";
import { BsSearch } from "react-icons/bs";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchProps> = ({ value, onChange }) => {
  return (
    <Wrapper>
      <SearchIcon value={value} />
      <SearchInput
        placeholder="Search now..."
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  padding: 15px;
  background-color: #4e4d59;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const SearchIcon = styled(BsSearch)<{ value: String }>`
  color: ${(props) => (props.value === "" ? "white" : "#758CFF")};
  transition: color 200ms ease;
`;

const SearchInput = styled.input`
  background-color: #4e4d59;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16pt;
  box-sizing: border-box;
  width: 100%;

  &:focus {
    outline: none !important;
    border: none;
    box-shadow: none;
  }
`;
