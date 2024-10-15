import { Section } from './section';
import { Footer } from '../components/navigation/Footer';

import '@/font/main_font.css';

// Constants for styling and functionality
const DIVIDER_HEIGHT = 5;

const dividerStyle = {
  height: `${DIVIDER_HEIGHT}px`,
  backgroundColor: 'transparent',
};

export default function MainPage() {
  return (
    <>
      <Section.Section1 id="section1" />
      {/* <Section.Section2 id="section2" /> */}
      <Section.Section3 id="section3" />
      <Section.Section4 id="section4" />
      <Section.Section5 id="section5" />
      <Section.Section6 id="section6" />
      <Section.Section7 id="section7" />
      <Footer />
    </>
  );
}
