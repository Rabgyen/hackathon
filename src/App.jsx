
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
import RegistrationSection from './components/RegistrationSection';
import PreviewSection from './components/PreviewSection';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';
import TestimonialSection from './components/TestimonialSection';

const App = () => {
  return (
    <div className='min-h-screen w-full bg-[radial-gradient(circle_at_top,rgba(0,92,143,0.09),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f7fbfd_58%,#eef7fb_100%)]'>
      <NavBar/>
      <Hero/>
      <div className='text-slate-800'>
        <div id='about' className='flex scroll-mt-24 flex-col items-center justify-center gap-4 py-8'>
          <h1 className='text-2xl font-semibold text-[#005c8f] sm:text-3xl md:text-4xl'>About the event</h1>
          <p className='max-w-2xl px-4 text-sm font-medium text-slate-600 sm:text-base md:text-lg text-center'>The first-ever Code Fest and Hackathon at Uniglobe College will take place on August 7 and 8. The first day features an interactive and exciting Code Fest, while the final day showcases hackathon project presentations, followed by judging and winner announcements.</p>
        </div>
          <StatsGrid />
            <EventTitleSection />
            <EventDateSection />
            <PrizeSection />
            <RequirementsSection />
            <ScheduleSection />
            <EvaluationSection />
          </div>
        <RegistrationSection />
          <PreviewSection />
        <ContactSection />
        <LocationSection />
        <MosaicGallery />
        <TestimonialSection />
    </div>
  )
}

export default App
