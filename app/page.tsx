
import Hero from "./src/components/hero";
import DynamicSection from "./src/components/dynamic";
import SectionThree from "./src/components/sectionThree";
import SectionFour from "./src/components/sectionFour";
import SectionFive from "./src/components/sectionFive";
import SectionSix from "./src/components/sectionSix";
import SectionSeven from "./src/components/sectionSeven";
import Footer from "./src/components/footer";
export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <DynamicSection />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </div>
  );
}
