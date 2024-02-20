import React from "react";
import CoverCard from "../components/CoverCard";
import Categories from "../components/Categories";
import StatsSection from "../components/StatsSection";
import Banner from "../components/Banner";
import BestSellerProducts from "../components/BestSellerProducts";
import Brands from "../components/Brands";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center px-2 md:px-6 max-w-7xl w-full min-w-sm m-auto">
      <CoverCard />
      <Categories />
      <StatsSection />
      <Banner />
      <BestSellerProducts />
      <Banner />
      <Brands />
    </div>
  );
}
