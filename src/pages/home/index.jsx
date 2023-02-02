import React, { useEffect, useState } from "react";
import { About } from "../../components/about";
import { Contact } from "../../components/contact";
import { Features } from "../../components/features";
import { Footer } from "../../components/footer";
import { Gallery } from "../../components/gallery";
import { Header } from "../../components/header";
import { Navigation } from "../../components/navigation";
import { Services } from "../../components/services";
import { Testimonials } from "../../components/testimonials";
import JsonData from "../../data/data.json";

function Home({ setTheme, theme }) {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation theme={theme} setTheme={setTheme} />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  );
}

export default Home;
