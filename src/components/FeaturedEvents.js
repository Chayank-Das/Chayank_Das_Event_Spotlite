// src/components/FeaturedEvents.js
import React from 'react';
import styled from 'styled-components';
import featuredData from '../data/mockData.json'; // Import the mock data

const FeaturedContainer = styled.section`
  padding: 2rem;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const LabelOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  font-size: 0.9rem;
`;

function FeaturedEvents() {
  return (
    <FeaturedContainer>
      <Title>Featured Events</Title>
      <Grid>
        {featuredData.featuredEvents.map((event) => (
          <Card key={event.id}>
            <Image src={process.env.PUBLIC_URL + event.image} alt={event.title} /> {/* Use PUBLIC_URL */}
            <LabelOverlay>{event.title}</LabelOverlay>
          </Card>
        ))}
      </Grid>
    </FeaturedContainer>
  );
}

export default FeaturedEvents;
