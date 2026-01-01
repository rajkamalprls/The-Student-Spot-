import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProblemSolution from "@/components/home/ProblemSolution";
import WhatMakesDifferent from "@/components/home/WhatMakesDifferent";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProblemSolution />
      <WhatMakesDifferent />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
