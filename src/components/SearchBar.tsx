import React from 'react';
import { cvar } from 'src/theming/cvar';
import { pathStyle } from 'src/theming/shared-styles/path';
import styled from 'styled-components';
import { ReactComponent as FilterSVG } from '../assets/top-area/filter-icon.svg';
import { ReactComponent as SearchSVG } from '../assets/top-area/search-icon.svg';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <Wrapper>
      <SearchSVG className='search-svg' />
      <input type='text' placeholder='Search Dashboard' />
      <FilterSVG className='filter-svg' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 5rem;
  width: 31rem;
  padding: 1rem;

  border-radius: 0.7rem;

  display: flex;
  align-items: center;

  background-color: ${cvar('searchColor')};

  // Change search icon opacity when Search bar is hovered
  // But filter icon opacity only when it's hovered
  // Unable to select svgs imported as ReactComponents in styled directly...
  &:hover .search-svg g,
  &:not(.filter-svg) {
    opacity: 1;
  }

  input {
    font-size: 1.3rem;
    padding-left: 1rem;

    background-color: inherit;

    border: none;
    outline: none;
  }

  g {
    transition: ease 0.3s;
  }

  // Initial animation of svh
  ${pathStyle}

  // Position to the left and change opacity when hovered
  .filter-svg {
    margin-left: auto;

    &:hover g {
      opacity: 1;
    }

    &:hover .search-svg {
      opacity: 0;
    }
  }
`;

export default SearchBar;
