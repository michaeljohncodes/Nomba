import Hero from "../layouts/landing.page.layout/Hero";
import Wallet from "../layouts/landing.page.layout/Wallet";
import Floats from "../layouts/landing.page.layout/Floats";
import Transactions from "../layouts/landing.page.layout/Transactions";
import Testimonials from "../layouts/landing.page.layout/Testimonials";
import FAQs from "../layouts/landing.page.layout/FAQs";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Wallet />
      <Floats />
      <Transactions />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default LandingPage;
