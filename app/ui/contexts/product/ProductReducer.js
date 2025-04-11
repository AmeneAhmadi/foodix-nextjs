export const initialProductState = {
  products: Array.from({ length: 30 }, (_, index) => {
    const fixedPrices = [
      12.99, 15.49, 20.0, 8.75, 25.99, 18.5, 10.0, 22.49, 30.0, 14.99, 19.99,
      16.5, 11.25, 24.0, 13.5, 17.99, 21.0, 9.99, 26.5, 29.99, 12.5, 15.0, 20.5,
      8.99, 27.0, 18.99, 10.5, 23.0, 31.0, 14.5,
    ];
    return {
      id: index + 1,
      title: `Product ${index + 1}`,
      price: fixedPrices[index % fixedPrices.length].toFixed(2),
      rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
      reviews: Math.floor(Math.random() * (500 - 100) + 100),
      image: `/assets/images/product-${(index % 6) + 1}.jpg`,
      features: ["Premium Quality", "Special Sauce"],
      category: ["Beef", "Grilled", "Sizzling", "Steak Bliss"][index % 4],
      quantity: 1,
      description:
        "Indulge in a mouthwatering culinary delight with our Chicken Skewers paired with vibrant slices of sweet bell peppers. Tender pieces of succulent chicken are marinated to perfection, resulting in a flavorful and juicy experience.",
      ingredients: [
        "Fresh chicken breast or thigh meat, cubed",
        "Assorted sweet bell peppers sliced into rings",
        "Marinade (your choice of herbs, spices, and seasonings)",
        "Olive oil",
        "Salt and pepper",
      ],
      preparation: [
        "Enjoy the skewers with a side of fresh salad or rice",
        "Drizzle with a zesty lemon or lime juice for an extra burst of flavor",
        "Pair with your favorite dipping sauce or chutney for added variety",
      ],
      videoSrc: "https://www.youtube.com/embed/G8xELw231qs",
    };
  }),

  selectedCategory: "Beef",
  sortBy: "",
  filteredProducts: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_CATEGORY": {
      const category = action.payload;
      let updatedProducts =
        category === "All"
          ? state.products
          : state.products.filter((product) => product.category === category);

      if (state.sortBy) {
        updatedProducts = updatedProducts.sort((a, b) =>
          state.sortBy === "low_to_high" ? a.price - b.price : b.price - a.price
        );
      }

      return {
        ...state,
        selectedCategory: category,
        filteredProducts: updatedProducts,
      };
    }

    case "SORT_BY_PRICE": {
      const sortBy = action.payload;
      let sortedProducts = [
        ...(state.filteredProducts.length
          ? state.filteredProducts
          : state.products),
      ];

      sortedProducts.sort((a, b) =>
        sortBy === "low_to_high" ? a.price - b.price : b.price - a.price
      );

      return { ...state, sortBy, filteredProducts: sortedProducts };
    }

    default:
      return state;
  }
};
