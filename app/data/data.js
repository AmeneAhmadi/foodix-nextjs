export const headerMenuData = {
  menuItems: [
    {
      title: "Home",
      submenu: [
        { title: "Home Restaurant", href: "/" },
        // { title: "Home Beef", href: "/beef" },
        // { title: "Home Burger", href: "/burger" },
        // { title: "Home Pizza", href: "/pizza" },
        // { title: "Home Sushi", href: "/sushi" },
      ],
    },
    {
      title: "Menu",
      submenu: [
        { title: "Menu List One", href: "/menu_one" },
        { title: "Menu List Two", href: "/menu_two" },
        { title: "Menu Grid", href: "/menu_grid" },
        { title: "Menu Details", href: "/product/details" },
      ],
    },
    {
      title: "Pages",
      submenu: [
        { title: "About Us", href: "/about_us" },
        { title: "Our History", href: "/our_history" },
        { title: "Our Chefs", href: "/our_chefs" },
        { title: "Our Gallery", href: "/our_gallery" },
        { title: "FAQs", href: "/faqs" },
        { title: "Error 404", href: "/error_404" },
      ],
    },
    {
      title: "Shop",
      submenu: [
        { title: "Our Shop", href: "/our_shop" },
        { title: "Product Details", href: "/product/details" },
        { title: "Cart", href: "/cart" },
        { title: "Checkout", href: "/checkout" },
      ],
    },
    {
      title: "Blog",
      submenu: [
        { title: "Blog Grid", href: "/blog_grid" },
        { title: "Blog Standard", href: "/blog_standard" },
        { title: "Blog Details", href: "/blog_details" },
      ],
    },
    {
      title: "Contact",
      href: "/contact_us",
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
      price: 850,
    },
    {
      image: "/assets/images/cart-3.jpg",
      title: "Smoked Paprika Perfection",
      quantity: 1,
      price: 950,
    },
    {
      image: "/assets/images/cart-4.jpg",
      title: "Tandoori Temptation Tender",
      quantity: 1,
      price: 200,
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

export const checkoutPaymentData = {
  checkoutPaymentItems: [
    {
      title: "Cash On Delivery",
      content:
        "Pay with cash remains a simple and reliable choice, transcending the complexities of modern finance.",
    },
    {
      title: "Direct Bank Transfer",
      content:
        "Please proceed with your payment directly into our bank account. Kindly use your Order ID as the payment reference. Your order will be processed once the payment reflects in our account.",
    },
    {
      title: "Paypal",
      content:
        "You can make your payment via PayPal. If you don't have a PayPal account, you can use your credit card to complete the transaction.",
    },
  ],
};

export const variationOptionsData = {
  variationOptions: [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ],
};

export const productRelatedItemsData = {
  relatedItems: [
    {
      imageSrc: "/assets/images/releted-1.png",
      title: "Cheese Pizza",
      subtitle: "Melting mozzarella atop a crisp crust a timeless cheese pizza",
    },
    {
      imageSrc: "/assets/images/releted-2.png",
      title: "chicken pizza",
      subtitle: "Melting mozzarella atop a crisp crust a timeless cheese pizza",
    },
    {
      imageSrc: "/assets/images/releted-3.png",
      title: "Garden veggie",
      subtitle: "Melting mozzarella atop a crisp crust a timeless cheese pizza",
    },
  ],
};

export const ourChefsData = {
  ourChefs: [
    {
      name: "John Carry",
      position: "Executive Chef",
      imageSrc: "/assets/images/team-8.jpg",
      socialLinks: [
        { facebook: "#" },
        { twitter: "#" },
        { linkedin: "#" },
        { pinterest: "#" },
      ],
    },
    {
      name: " Alexa lora",
      position: " Junior Chef",
      imageSrc: "/assets/images/team-9.jpg",
      socialLinks: [
        { facebook: "#" },
        { twitter: "#" },
        { linkedin: "#" },
        { pinterest: "#" },
      ],
    },
    {
      name: "Hony Smith",
      position: "Junior Chef",
      imageSrc: "/assets/images/team-10.jpg",
      socialLinks: [
        { facebook: "#" },
        { twitter: "#" },
        { linkedin: "#" },
        { pinterest: "#" },
      ],
    },
    {
      name: "David Liam",
      position: "Junior Chef",
      imageSrc: "/assets/images/team-11.jpg",
      socialLinks: [
        { facebook: "#" },
        { twitter: "#" },
        { linkedin: "#" },
        { pinterest: "#" },
      ],
    },
    {
      name: "Olivia Ava",
      position: "Junior Chef",
      imageSrc: "/assets/images/team-12.jpg",
      socialLinks: [
        { facebook: "#" },
        { twitter: "#" },
        { linkedin: "#" },
        { pinterest: "#" },
      ],
    },
    {
      name: "John Jonson",
      position: "Junior Chef",
      imageSrc: "/assets/images/team-13.jpg",
      socialLinks: [
        { facebook: "#" },
        { twitter: "#" },
        { linkedin: "#" },
        { pinterest: "#" },
      ],
    },
  ],
};
export const galleryPageData = {
  images: [
    "/assets/images/gallery-1.jpg",
    "/assets/images/gallery-2.jpg",
    "/assets/images/gallery-3.jpg",
    "/assets/images/gallery-4.jpg",
    "/assets/images/gallery-5.jpg",
    "/assets/images/gallery-6.jpg",
    "/assets/images/gallery-7.jpg",
    "/assets/images/gallery-8.jpg",
    "/assets/images/gallery-9.jpg",
    "/assets/images/gallery-10.jpg",
  ],
};

export const contactUsData = {
  contactInfo: [
    {
      id: 1,
      icon: "location",
      title: "Our Location",
      firstText: "4140 Parker Rd. Allentown,",
      secondText: "New Mexico 31134",
    },
    {
      id: 2,
      icon: "email",
      title: "Email Us",
      firstText: "foodixsupport@gmail.com",
      secondText: "foodixinfo@gmail.com",
    },
    {
      id: 3,
      icon: "phone",
      title: "Call Us",
      firstText: "1+555-123 456 7890",
      secondText: "+555-123 776 8875",
    },
  ],
};

export const blogDetailsCommentsData = {
  comments: [
    {
      id: 1,
      small: false,
      name: "Albert Flores",
      date: "May 25, 2023",
      imageSrc: "/assets/images/comment-1.jpg",
      comment:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse molestiae consequatur qui dolorem eum fugiat voluptas.",
    },
    {
      id: 2,
      small: true,
      name: "Michel holder",
      date: "May 25, 2023",
      imageSrc: "/assets/images/comment-2.jpg",
      comment:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse molestiae consequatur qui dolorem eum fugiat voluptas.",
    },
    {
      id: 3,
      small: false,
      name: "Michel holder",
      date: "May 25, 2023",
      imageSrc: "/assets/images/comment-2.jpg",
      comment:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi consequatur.",
    },
  ],
};
export const blogPostsData = {
  posts: [
    {
      id: 1,
      text: "Flavorful Fusion: Exploring the Art of culinary blending",
      date: " May 10, 2024",
      imageSrc: "/assets/images/post-thumb-1.jpg",
    },
    {
      id: 2,
      text: "Chef Spotlight: Behind the scenes of culinary mastery",
      date: " May 10, 2024",
      imageSrc: "/assets/images/post-thumb-2.jpg",
    },
    {
      id: 3,
      text: "Flavorful Fusion: Exploring the Art of culinary blending",
      date: " May 10, 2024",
      imageSrc: "/assets/images/post-thumb-3.jpg",
    },
    {
      id: 4,
      text: "Exploring authentic cuisine from around the world",
      date: " May 10, 2024",
      imageSrc: "/assets/images/post-thumb-4.jpg",
    },
  ],
};

export const blogGridData = {
  posts: [
    {
      subtitle: "creativity",
      date: " May 25, 2024",
      imageSrc: "/assets/images/blog-grid-1.jpg",
      title: "Gourmet Griddl Masterpiece",
      caption:
        "Indulge your taste buds in a culinary adventure with our Testy Food.",
    },
    {
      subtitle: "creativity",
      date: " May 25, 2024",
      imageSrc: "/assets/images/blog-grid-2.jpg",
      title: "Deluxe Flavor Fusion Stack",
      caption:
        "Experience the artistry of our chefs as they elevate classic recipes.",
    },
    {
      subtitle: "creativity",
      date: " May 25, 2024",
      imageSrc: "/assets/images/blog-grid-3.jpg",
      title: "Regal Royale Delight",
      caption:
        "Each carefully selected ingredient to contributes the harmonious food.",
    },
    {
      subtitle: "creativity",
      date: " May 25, 2024",
      imageSrc: "/assets/images/blog-grid-4.jpg",
      title: "Elevate Epicurean Stack",
      caption:
        "As you move to the main ranging from rich and savory light and refreshing.",
    },
    {
      subtitle: "creativity",
      date: " May 25, 2024",
      imageSrc: "/assets/images/blog-grid-5.jpg",
      title: "Towering Taste Triumph",
      caption:
        "Join us celebrating the joy of cuisine delicious where  bite tells a story.",
    },
    {
      subtitle: "creativity",
      date: " May 25, 2024",
      imageSrc: "/assets/images/blog-grid-6.jpg",
      title: "Skyline Epicurean Delight",
      caption:
        "Savor the exquisite blend of flavors in our Testy Best Food collection.",
    },
  ],
};

export const aboutUsTestimonialData = {
  testimonials: [
    {
      name: "David Liam",
      date: "A week ago",
      image: "/assets/images/author-1.jpg",
      text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas...",
      rating: 4,
    },
    {
      name: "Sophia Mia",
      date: "2 days ago",
      image: "/assets/images/author-2.jpg",
      text: "I’ve never seen a pizza place care so much about the details.",
      rating: 5,
    },
    {
      name: "Emma Jacob",
      date: "3 weeks ago",
      image: "/assets/images/author-3.jpg",
      text: "The freshness of the ingredients is obvious in every slice.",
      rating: 5,
    },
  ],
};

export const faqLeftData = {
  faqsLeft: [
    {
      question: "What is Sustainable Construction?",
      answer:
        "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding.",
    },
    {
      question: "What Are The Different Types of Construction?",
      answer:
        "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding.",
    },
    {
      question: "What’re The Stages of Construction Project?",
      answer:
        "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding.",
    },
    {
      question: "How Long Does It Take to Build?",
      answer:
        "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding.",
    },
  ],
};

export const faqRightData = {
  faqsRight: [
    {
      question: "What is Sustainable Construction?",
      answer:
        "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding.",
    },
    {
      question: "What Are The Different Types of Construction?",
      answer:
        "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding.",
    },
    {
      question: "What’re The Stages of Construction Project?",
      answer:
        "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding.",
    },
    {
      question: "How Long Does It Take to Build?",
      answer:
        "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding.",
    },
  ],
};
