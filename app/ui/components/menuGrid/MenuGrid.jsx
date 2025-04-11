"use client"; 
import ButtonSort from "../shop/ButtonSort";
import ProductList from "../shop/ProductList";

export default function MenuOne() {
  return (
    <section className="bg-[#f7f0e6] py-12 px-6 md:px-20">
      <div className="text-center mb-8">
        <h2 className="text-6xl font-bold text-gray-900 mt-6">CHOOSE MENU</h2>
        <p className="text-gray-800 my-5 max-w-lg mx-auto text-xl">
          Indulge in an array of meticulously crafted sushi rolls, artfully blending
          fresh ingredients for a delightful taste experience
        </p>
        
      </div>
      <div className="justify-center">
      <ButtonSort/>
 
<ProductList/>
      </div>
    </section>
  );
}
