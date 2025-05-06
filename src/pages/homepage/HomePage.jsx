import HeroSection from './components/HeroSection';
import CallToAction from './components/CallToAction';
// import CoreFocus from './components/CoreFocus';
import TargetAudience from './components/TargetAudience';
import PartnershipBenefits from './components/PartnershipBenefits';
import ThemeCard from './components/ThemeCard';
import PartnershipOpportunities from './components/PartnershipOpportunitiess';
import KeyObjectives from './components/Objectivess';
import FocusAreas from './components/FocusAreas';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CallToAction />
      <ThemeCard />
      <KeyObjectives />
      <FocusAreas />
      <PartnershipOpportunities />
      <TargetAudience />
      <PartnershipBenefits />
    </>
  );
}
