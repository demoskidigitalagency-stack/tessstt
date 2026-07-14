import { Suspense } from 'react';
import AnnouncementBar from '@/components/sections/AnnouncementBar';
import HeroSection from '@/components/sections/HeroSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import SolutionSection from '@/components/sections/SolutionSection';
import CurriculumSection from '@/components/sections/CurriculumSection';
import BonusesSection from '@/components/sections/BonusesSection';
import InstructorSection from '@/components/sections/InstructorSection';
import TransformationsSection from '@/components/sections/TransformationsSection';
import CareerSection from '@/components/sections/CareerSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import CountdownSection from '@/components/sections/CountdownSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <AnnouncementBar />
      <HeroSection />
      
      <Suspense fallback={<div className="h-96 bg-brand-navy" />}>
        <StatisticsSection />
      </Suspense>
      
      <PainPointsSection />
      <SolutionSection />
      <CurriculumSection />
      <BonusesSection />
      <InstructorSection />
      
      <Suspense fallback={<div className="h-96 bg-brand-navy" />}>
        <TransformationsSection />
      </Suspense>
      
      <CareerSection />
      <ProjectsSection />
      <PricingSection />
      <FAQSection />
      <CountdownSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
