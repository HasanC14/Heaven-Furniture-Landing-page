import { Collections } from "./collections";
import { Faq } from "./faq";
import { Header } from "./header";
import { Hero } from "./hero";
import { Inspiration } from "./inspiration";
import { PageMotion } from "./page-motion";
import { Philosophy } from "./philosophy";
import { Services } from "./services";
import { ProjectCallout, Footer, ShowroomCallout } from "./static-sections";
import { Testimonials } from "./testimonials";

export function LandingPage() {
  return (
    <PageMotion>
      <Header />
      <Hero />
      <Philosophy />
      <Collections />
      <ProjectCallout />
      <Testimonials />
      <Services />
      <Inspiration />
      <Faq />
      <ShowroomCallout />
      <Footer />
    </PageMotion>
  );
}
