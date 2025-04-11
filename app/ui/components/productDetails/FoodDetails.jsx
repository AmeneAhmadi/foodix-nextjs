import IngredientsItem from "./IngredientsItem";
import PreparationItem from "./PreparationItem";

export default function FoodDetails({ product }) {
  return (
    <div>
      <p className="font-hanken text-[var(--text-color)] leading-relaxed">
        {product.description}
      </p>
      <h3 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
        Ingredients:
      </h3>
      <ul className="font-hanken list-none space-y-2">
        {product.ingredients.map((ingredient, index) => (
          <IngredientsItem key={index} text={ingredient} />
        ))}
      </ul>
      <h3 className="text-2xl font-bold mt-8 mb-4">Preparation:</h3>
      <ul className="font-hanken list-none space-y-2">
        {product.preparation.map((step, index) => (
          <PreparationItem key={index} text={step} />
        ))}
      </ul>
    </div>
  );
}
