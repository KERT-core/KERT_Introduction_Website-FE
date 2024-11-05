import { Section } from './section';
import { Footer } from '@components/navigation/footer/Footer';

export default function MainPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Section.Section1 />
      <Section.Section2 />
      <Section.Section3 />
      <Section.Section4 />
      <Section.Section5 />
      <Section.Section6 />
      <Footer />
    </div>
  );
}
