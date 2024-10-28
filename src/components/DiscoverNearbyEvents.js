// src/components/DiscoverNearbyEvents.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import discoverData from '../data/mockData.json'; // Import mock data

const Section = styled.section`
  padding: 2rem 4rem;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const EventCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 0.5rem;
`;

const EventTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

const EventDescription = styled.p`
  color: #666;
  margin: 0.5rem 0;
`;

const LikeCount = styled.p`
  font-weight: bold;
  color: #007bff;
`;

const DiscoverNearbyEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load the discover events from the mock data
    setEvents(discoverData.discoverEvents);
  }, []);

  return (
    <Section id="discover-nearby-events">
      <Title>Discover Nearby Events</Title>

      <EventsGrid>
        {events.map((event) => (
          <EventCard key={event.id}>
            <Image src={event.image} alt={event.title} /> {/* Render image */}
            <EventTitle>{event.title}</EventTitle>
            <EventDescription>{event.description}</EventDescription>
            <LikeCount>❤️ {event.likes}</LikeCount>
          </EventCard>
        ))}
      </EventsGrid>
    </Section>
  );
};

export default DiscoverNearbyEvents;
