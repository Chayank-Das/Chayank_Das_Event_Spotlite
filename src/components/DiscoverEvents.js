// src/components/DiscoverEvents.js
import React from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi'; // Close icon

const ModalContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseIcon = styled(FiX)`
  cursor: pointer;
  font-size: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const CategoryButton = styled.button`
  padding: 1rem;
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f3f3f3;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

function DiscoverEvents({ onClose }) {
  return (
    <ModalContainer>
      <Title>
        Discover Events <CloseIcon onClick={onClose} />
      </Title>

      <FormGroup>
        <Label>Date Range</Label>
        <Input type="date" placeholder="Start date" />
        <Input type="date" placeholder="End date" style={{ marginTop: '0.5rem' }} />
      </FormGroup>

      <Label>Event Category</Label>
      <CategoryContainer>
        <CategoryButton>Music</CategoryButton>
        <CategoryButton>Food & Drinks</CategoryButton>
        <CategoryButton>Workshops</CategoryButton>
      </CategoryContainer>

      <FormGroup>
        <Label>Number of Attendees</Label>
        <CheckboxGroup>
          <Input type="number" placeholder="No. of attendees" />
          <Input type="number" placeholder="No. of rooms" />
        </CheckboxGroup>
      </FormGroup>

      <FormGroup>
        <Label>Other</Label>
        <CheckboxGroup>
          <label>
            <input type="checkbox" /> Free parking
          </label>
          <label>
            <input type="checkbox" /> Live music
          </label>
          <label>
            <input type="checkbox" /> Networking
          </label>
        </CheckboxGroup>
      </FormGroup>

      <SubmitButton>Search Events</SubmitButton>
    </ModalContainer>
  );
}

export default DiscoverEvents;