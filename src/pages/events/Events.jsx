import EventHeroSection from './components/EventHeroSection';
import ProposedItinerary from './components/ProposedItinery';
import EventObjectives from './components/EventObjectives';
import ParticipationDetails from './components/ParticipationDetails';

export function Events() {
  return (
    <>
      <EventHeroSection />
      <EventObjectives />
      <ParticipationDetails />
      <ProposedItinerary />
    </>
  );
}
