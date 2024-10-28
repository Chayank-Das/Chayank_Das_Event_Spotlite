// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

// Hero container
const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-image: url('${process.env.PUBLIC_URL}/assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  margin: 1rem 2rem;
  padding: 2rem;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    margin: 1rem;
    height: 60vh;
    padding: 1.5rem;
  }
`;

// Heading styling
const Heading = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Subheading styling
const Subheading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

// Search bar container
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 30px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

// Input container styling
const InputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;

  &:not(:last-child) {
    border-right: 1px solid #ccc;
    padding-right: 1rem;

    @media (max-width: 768px) {
      border-right: none;
      padding-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

// Label and Input styling
const Label = styled.label`
  font-size: 0.8rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  font-size: 0.9rem;
  color: #555;
  padding: 0.5rem 0;

  &::placeholder {
    color: #888;
    font-weight: 500;
  }
`;

// Search button styling
const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

// Mobile-only search bar
const MobileSearchBar = styled(SearchBar)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <HeroContainer>
        <Heading>Explore events near you with EventSpot</Heading>
        <Subheading>Discover local events at your fingertips!</Subheading>

        {/* Search Bar for Desktop */}
        <SearchBar>
          <InputContainer>
            <Label>Search Events</Label>
            <Input type="text" placeholder="Find events near you" />
          </InputContainer>
          <InputContainer>
            <Label>Date</Label>
            <Input type="date" />
          </InputContainer>
          <InputContainer>
            <Label>Time</Label>
            <Input type="time" />
          </InputContainer>
          <InputContainer>
            <Label>Attendees</Label>
            <Input type="number" placeholder="Enter number" />
          </InputContainer>
          <SearchButton>
            <FiArrowRight />
          </SearchButton>
        </SearchBar>
      </HeroContainer>

      {/* Search Bar for Mobile */}
      <MobileSearchBar>
        <InputContainer>
          <Label>Search Events</Label>
          <Input type="text" placeholder="Find events near you" />
        </InputContainer>
        <InputContainer>
          <Label>Date</Label>
          <Input type="date" />
        </InputContainer>
        <InputContainer>
          <Label>Time</Label>
          <Input type="time" />
        </InputContainer>
        <InputContainer>
          <Label>Attendees</Label>
          <Input type="number" placeholder="Enter number" />
        </InputContainer>
        <SearchButton>
          <FiArrowRight />
        </SearchButton>
      </MobileSearchBar>
    </>
  );
}

export default HeroSection;
