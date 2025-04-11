"use client";

import PageBanner from "../ui/components/common/PageBanner";
import ButtonSort from "../ui/components/menu/ButtonSort";
import ProductList from "../ui/components/menu/ProductList";

export default function MenuGrids() {
  return (
    <div>
         <PageBanner
              title="menu restaurant"
              subtitles={[
                { page: "home", link: "/" },
                { page: "menu restaurant", link: "/menu_grid" },
              ]}
            />
      <section className="bg-[#f7f0e6] py-12 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-bold mt-6">CHOOSE MENU</h2>
          <p className="font-hanken text-black/80 my-5 max-w-xl mx-auto text-xl">
            Indulge in an array of meticulously crafted sushi rolls, artfully
            blending fresh ingredients for a delightful taste experience
          </p>
        </div>
        <div className="justify-center">
          <ButtonSort />

          <ProductList showAddToCart={true} />
        </div>
      </section>
    </div>
  );
}
