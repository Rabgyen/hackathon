
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import StatsGrid from './components/StatsGrid';
import Sponsors from './components/Sponsors';
import EventTitleSection from './components/EventTitleSection';
import EventDateSection from './components/EventDateSection';
import PrizeSection from './components/PrizeSection';
import RequirementsSection from './components/RequirementsSection';
import ScheduleSection from './components/ScheduleSection';
import EvaluationSection from './components/EvaluationSection';
import MosaicGallery from './components/MosaicGallery';
import ContactSection from './components/ContactSection';
import TestimonialSection from './components/TestimonialSection';

const App = () => {
  return (
    <div className='bg-[#120f17] min-h-screen w-full'>
      <NavBar/>
      <Hero/>
      <div className='text-white'>
        <div id='about' className='flex scroll-mt-24 flex-col items-center justify-center gap-4 py-8'>
          <h1 className='text-2xl font-semibold sm:text-3xl md:text-4xl'>About the event</h1>
          <p className='max-w-2xl px-4 text-sm font-medium text-white/75 sm:text-base md:text-lg text-center'>The first-ever Code Fest and Hackathon at Uniglobe College will take place on June 28 and 29. The first day features an interactive and exciting Code Fest, while the final day showcases hackathon project presentations, followed by judging and winner announcements.</p>
        </div>
          <StatsGrid />
            <Sponsors />
            <EventTitleSection />
            <EventDateSection />
            <PrizeSection />
            <RequirementsSection />
            <ScheduleSection />
            <EvaluationSection />
          </div>
          <ContactSection />
          <MosaicGallery />
          <TestimonialSection />
    </div>
  )
}

export default App
