// src/components/TopRatedEvents.js
import React from 'react';
import styled from 'styled-components';
import { FiStar, FiChevronRight } from 'react-icons/fi';
import topRatedData from '../data/mockData.json'; // Import mock data

const TopRatedContainer = styled.section`
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
  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 1rem;
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
  border-radius: 10px;
  margin-bottom: 0.5rem;
`;

const RatingBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #000;
  color: #fff;
  border-radius: 50%;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  font-weight: bold;
`;

const FavoriteIcon = styled(FiStar)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  background: #000;
  border-radius: 50%;
  padding: 0.3rem;
  font-size: 1.1rem;
`;

const EventDetails = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const EventTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const Location = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

const Price = styled.p`
  font-weight: bold;
  color: #007bff;
  font-size: 0.9rem;
`;

const ArrowIcon = styled(FiChevronRight)`
  position: absolute;
  bottom: 15px;
  right: 15px;
  color: #333;
  font-size: 1.2rem;
`;

function TopRatedEvents() {
  return (
    <TopRatedContainer>
      <Title>Top Rated Events</Title>
      <Grid>
        {topRatedData.topRatedEvents.map((event) => (
          <Card key={event.id}>
            {/* Use the public path for images */}
            <Image src={event.image} alt={event.title} />
            <RatingBadge>{event.rating}</RatingBadge>
            <FavoriteIcon />
            <EventDetails>
              <EventTitle>{event.title}</EventTitle>
              <Location>{event.location}</Location>
              <Price>from {event.price}/ticket</Price>
            </EventDetails>
            <ArrowIcon />
          </Card>
        ))}
      </Grid>
    </TopRatedContainer>
  );
}

export default TopRatedEvents;
