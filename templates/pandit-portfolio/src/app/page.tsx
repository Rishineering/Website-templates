import Booking from "@/components/Booking";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import { sections } from "@/config/panditData";

export default function Home() {
  return (
    <>
      {sections.hero.enabled ? <Hero /> : null}
      {sections.philosophy.enabled ? <Philosophy /> : null}
      {sections.offerings.enabled ? <Offerings /> : null}
      {sections.testimonials.enabled ? <Testimonials /> : null}
      {sections.booking.enabled ? <Booking /> : null}
    </>
  );
}
