import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { IntroStats } from "@/components/sections/IntroStats";
import { CoreServices } from "@/components/sections/CoreServices";
import { Solutions } from "@/components/sections/Solutions";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { RecentPosts } from "@/components/RecentPosts";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <IntroStats />
      <CoreServices />
      <Solutions />
      <Process />
      <Testimonials />
      <RecentPosts />
      <CTASection />
      <Footer />
    </main>
  );
}
