import React from 'react';
import App from "@/components/layout/app";
import Banner from "@/components/portfolio/banner/banner";
import Portfolio from "@/components/portfolio/portfolios/portfolio";

const Index = () => {
  return (
    <>
      <App>
        <Banner/>
        <Portfolio/>
      </App>
    </>
  );
};

export default Index;