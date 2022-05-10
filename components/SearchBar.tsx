import React, { FC } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: FC<SearchProps> = ({ value, onChange, placeholder }) => {
  return (
    <Wrapper>
      <SearchIcon value={value} />
      <SearchInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  padding: 15px;
  background-color: #2c2e33;
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
  background-color: #2c2e33;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16pt;
  box-sizing: border-box;
  width: 100%;
  &::placeholder {
    color: #8d98ab;
  }

  &:focus {
    outline: none !important;
    border: none;
    box-shadow: none;
  }
`;
