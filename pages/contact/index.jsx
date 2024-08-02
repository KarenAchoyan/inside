import React from 'react';
import App from "@/components/layout/app";
import Banner from "@/components/portfolio/banner/banner";
import Portfolio from "@/components/portfolio/portfolios/portfolio";
import Contact from "@/components/contact/contactus/contact";

const Index = () => {
  return (
    <div>
      <>
        <App>
          <Banner/>
          <Contact/>
        </App>
      </>
    </div>
  );
};

export default Index;