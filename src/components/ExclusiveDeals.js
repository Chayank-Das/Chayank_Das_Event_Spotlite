// src/components/ExclusiveDeals.js
import React from 'react';
import styled from 'styled-components';
import { FaTicketAlt } from 'react-icons/fa'; // Importing Font Awesome ticket icon

const DealsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: #d3d3d3;
  border-radius: 15px;
  max-width: 1000px;
  margin: 1.5rem auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const DealsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const JoinButton = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

function ExclusiveDeals() {
  return (
    <DealsContainer>
      <DealsContent>
        <IconContainer>
          <FaTicketAlt size={24} /> {/* Replaced with Font Awesome ticket icon */}
        </IconContainer>
        <TextContainer>
          <Title>Exclusive Deals!</Title>
          <Description>Join our Event Club for exclusive event offers and updates!</Description>
        </TextContainer>
      </DealsContent>
      <JoinButton>Join Now</JoinButton>
    </DealsContainer>
  );
}

export default ExclusiveDeals;
