export const headerMenuData = {
  menuItems: [
    {
      title: "Home",
      submenu: [
        { title: "Home Restaurant", href: "/" },
        { title: "Home Beef", href: "/beef" },
        { title: "Home Burger", href: "/burger" },
        { title: "Home Pizza", href: "/pizza" },
        { title: "Home Sushi", href: "/sushi" },
      ],
    },
    {
      title: "Menu",
      submenu: [
        { title: "Menu List One", href: "/menu-1" },
        { title: "Menu List Two", href: "/menu-2" },
        { title: "Menu Grid", href: "/menu-grid" },
        { title: "Menu Details", href: "/menu-details" },
      ],
    },
    {
      title: "Pages",
      submenu: [
        { title: "About Us", href: "/about" },
        { title: "Our History", href: "/history" },
        { title: "Our Chefs", href: "/chefs" },
        { title: "Our Gallery", href: "/gallery" },
        { title: "FAQs", href: "/faqs" },
        { title: "Error 404", href: "/404" },
      ],
    },
    {
      title: "Shop",
      submenu: [
        { title: "Our Shop", href: "/shop" },
        { title: "Product Details", href: "/product" },
        { title: "Cart", href: "/cart" },
        { title: "Checkout", href: "/checkout" },
      ],
    },
    {
      title: "Blog",
      submenu: [
        { title: "Blog Grid", href: "/blog" },
        { title: "Blog Standard", href: "/blog-standard" },
        { title: "Blog Details", href: "/blog-details" },
      ],
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};

export const cartData = {
  cartItems: [
    {
      image: "/assets/images/cart-1.jpg",
      title: "Urban Bourbon Bliss Ribeye",
      quantity: 1,
      price: 940,
    },
    {
      image: "/assets/images/cart-2.jpg",
      title: "Artisanal Truffle Tango Sirloin",
      quantity: 1,
      price: 940,
    },
    {
      image: "/assets/images/cart-3.jpg",
      title: "Smoked Paprika Perfection",
      quantity: 1,
      price: 940,
    },
    {
      image: "/assets/images/cart-4.jpg",
      title: "Tandoori Temptation Tender",
      quantity: 1,
      price: 940,
    },
  ],
};

export const categoryData = {
  boxes: [
    {
      title: "delish burger",
      itemsNumber: "25 items",
      animation: "animate-fadeInDown",
      icon: "PiHamburger",
    },
    {
      title: "sandwiches",
      itemsNumber: "20 items",
      animation: "animate-fadeInUp",
      icon: "LuSandwich",
    },
    {
      title: "Mexican Cuisine",
      itemsNumber: "30 items",
      animation: "animate-fadeInDown",
      icon: "PiBowlFoodLight",
    },
    {
      title: "Italian Cuisine",
      itemsNumber: "19 items",
      animation: "animate-fadeInUp",
      icon: "GiBowlOfRice",
    },
  ],
};
export const homeMenuData = {
  boxes: [
    {
      thumb: "menu-thumb1.png",
      title: "Truffle Mac and Cheese",
      caption: "Indulgent mac and cheese with truffle essence.",
      cost: "25.50",
    },
    {
      thumb: "menu-thumb2.png",
      title: "Grilled Ribeye Steak",
      caption: "Perfectly grilled ribeye steak with savory seasoning.",
      cost: "25.50",
    },
    {
      thumb: "menu-thumb3.png",
      title: "Honey-Glazed Salmon",
      caption: "Sweet and savory honey-glazed salmon fillet.",
      cost: "25.50",
    },
    {
      thumb: "menu-thumb4.png",
      title: "Thai Coconut Curry",
      caption: "Fragrant Thai coconut curry with vibrant vegetables.",
      cost: "25.50",
    },
    {
      thumb: "menu-thumb5.png",
      title: "Gourmet Mushroom Risotto",
      caption: "Rich, creamy risotto with gourmet mushrooms.",
      cost: "25.50",
    },
    {
      thumb: "menu-thumb6.png",
      title: "Margarita Shrimp Tacos",
      caption: "Zesty shrimp tacos with fresh margarita flavor.",
      cost: "25.50",
    },
    {
      thumb: "menu-thumb7.png",
      title: "BBQ Bacon Burger",
      caption: "Juicy burger topped with BBQ sauce and bacon.",
      cost: "35",
    },
    {
      thumb: "menu-thumb8.png",
      title: "Spicy Tuna Roll",
      caption: "Spicy tuna roll with a bold, flavorful kick.",
      cost: "39",
    },
  ],
};
export const galleryData = {
  galleryItems: [
    {
      id: 1,
      image: "/assets/images/gallery-14.jpg",
      title: "Special Pizza",
      number: 1,
    },
    {
      id: 2,
      image: "/assets/images/gallery-18.jpg",
      title: "Dessert Special",
      number: 2,
    },
    {
      id: 3,
      image: "/assets/images/gallery-17.jpg",
      title: "Hawaiiab Pizza",
      subtitle: "Pizza",
      number: 3,
    },
    {
      id: 4,
      image: "/assets/images/gallery-15.jpg",
      title: "Hawaiiab Pizza",
      subtitle: "Pizza",
      number: 2,
    },
    {
      id: 5,
      image: "/assets/images/gallery-16.jpg",
      title: "Hawaiiab Pizza",
      subtitle: "Pizza",
      number: 1,
    },
    {
      id: 1,
      image: "/assets/images/gallery-14.jpg",
      title: "Hawaiiab Pizza",
      subtitle: "Pizza",
      number: 1,
    },
    {
      id: 2,
      image: "/assets/images/gallery-18.jpg",
      title: "Hawaiiab Pizza",
      subtitle: "Pizza",
      number: 2,
    },
    {
      id: 3,
      image: "/assets/images/gallery-17.jpg",
      title: "Hawaiiab Pizza",
      subtitle: "Pizza",
      number: 3,
    },
    {
      id: 4,
      image: "/assets/images/gallery-15.jpg",
      title: "Hawaiiab Pizza",
      subtitle: "Pizza",
      number: 2,
    },
    {
      id: 5,
      image: "/assets/images/gallery-16.jpg",
      title: "Hawaiiab Pizza",
      subtitle: "Pizza",
      number: 1,
    },
  ],
};
export const teamData = {
  teamMembers: [
    {
      name: "David Liam",
      role: "CEO",
      image: "/assets/images/team-14.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      name: "Alex Mika",
      role: "Executive Chef",
      image: "/assets/images/team-15.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      name: "John Smith",
      role: "Executive Chef",
      image: "/assets/images/team-16.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
  ],
};

export const testimonialsData = {
  testimonials: [
    {
      rating: 5,
      quote:
        "From the moment we walked in, we were impressed by the warm and inviting atmosphere. The food was exceptional—each dish was bursting with fresh, vibrant flavors. The staff was attentive and knowledgeable, making our dining experience.",
      author: { name: "david liam", position: "ceo", thumb: "author-1.jpg" },
    },
    {
      rating: 5,
      quote:
        "From the moment we walked in, we were impressed by the warm and inviting atmosphere. The food was exceptional—each dish was bursting with fresh, vibrant flavors. The staff was attentive and knowledgeable, making our dining experience.",
      author: { name: "alex mika", position: "ceo", thumb: "author-2.jpg" },
    },
    {
      rating: 5,
      quote:
        "From the moment we walked in, we were impressed by the warm and inviting atmosphere. The food was exceptional—each dish was bursting with fresh, vibrant flavors. The staff was attentive and knowledgeable, making our dining experience.",
      author: { name: "david liam", position: "ceo", thumb: "author-3.jpg" },
    },
  ],
};

export const blogData = {
  blogPosts: [
    {
      image: "/assets/images/blog-17.jpg",
      title: "CRISPY STOVETOP ROOSTED RED ",
      subtitle: "POTATOES FOODS",
      description:
        "Crispy stovetop red potatoes, seasoned to perfection, golden and delicious.",
      author: "David",
      comments: 2,
    },
    {
      image: "/assets/images/blog-18.jpg",
      title: "HOW TO MAKE JIMMY SOFT BOILED EGGS ",
      subtitle: "AT HOME",
      description:
        "Make Jimmy soft-boiled eggs at home with tender whites and creamy yolks.",
      author: "David",
      comments: 2,
    },
    {
      image: "/assets/images/blog-19.jpg",
      title: "TRADITIONAL SOFT PRETZELS WITH ",
      subtitle: "SWEET BEER CHEESE",
      description:
        "Warm, traditional soft pretzels served with rich, sweet beer cheese dip.",
      author: "David",
      comments: 2,
    },
  ],
};

export const whyChooseUsData = {
  boxes: [
    {
      image: "Hygienic-Food.svg",
      title: "Hygienic Food",
      caption: "We are passionate about serving fresh, flavorful",
      animation: "animate-fadeInDown",
    },
    {
      image: "Fresh-Environment.svg",
      title: "Fresh Environment",
      caption: "We are passionate about serving fresh, flavorful",
      animation: "animate-fadeInUp",
    },
    {
      image: "Skilled-Chefs.svg",
      title: "Skilled Chefs",
      caption: "We are passionate about serving fresh, flavorful",
      animation: "animate-fadeInDown",
    },
    {
      image: "Event-Party.svg",
      title: "Event & Party",
      caption: "We are passionate about serving fresh, flavorful",
      animation: "animate-fadeInUp",
    },
  ],
};
