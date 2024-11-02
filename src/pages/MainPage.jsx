import { Section } from './section';
import { Footer } from '../components/navigation/footer/Footer';

import '@/font/main_font.css';

export default function MainPage() {
  return (
    <>
      <Section.Section1 />
      <Section.Section2 />
      <Section.Section3 />
      <Section.Section4 />
      <Section.Section5 />
      <Section.Section6 />
      <Section.Section7 />
      <Footer />
    </>
  );
}
