const useMenu = () => {
  return [
    {
      name: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      image: require("../assets/images/menu/greek salad.webp"),
      price: "$12.99",
    },
    {
      name: "Brushetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations.",
      image: require("../assets/images/menu/54165-balsamic-bruschetta-DDMFS-4x3-e2b55b5ca39b4c1783e524a2461634ea.webp"),
      price: "$7.99",
      category: "Appetizer",
    },

    {
      name: "Calamari Fritti",
      description: "Crispy fried calamari served with a lemon aioli sauce.",
      price: 12,
      category: "Appetizer",
      image: require("../assets/images/menu/calamari.jpeg"),
    },
    {
      name: "Hummus",
      description:
        "Homemade hummus served with warm pita bread and fresh vegetables.",
      price: 14,
      category: "Appetizer",
      image: require("../assets/images/menu/israeli-style-extra-smooth-hummus-recipe-hero-03_1-c5024cd79b3c4867899e96833dd2c251.webp"),
    },

    {
      name: "Arugula Salad",
      description:
        "Fresh arugula salad with shaved Parmesan cheese, pine nuts, and a balsamic vinaigrette dressing.",
      price: 18,
      category: "Salad",
      image: require("../assets/images/menu/Best-Arugula-Salad.webp"),
    },
    {
      name: "Caesar Salad",
      description:
        "Classic Caesar salad with romaine lettuce, Parmesan cheese, croutons, and a creamy Caesar dressing.",
      price: 20,
      category: "Salad",
      image: require("../assets/images/menu/Caesar-Salad-Recipe-3.webp"),
    },
    {
      name: "Chicken Souvlaki",
      description: "Grilled chicken skewers served with rice and vegetables.",
      price: 22,
      category: "Entree",
      image: require("../assets/images/menu/greek-chicken-souvlaki-recipe-photo-tablefortwoblog-7-936x1200.webp.webp"),
    },
    {
      name: "Lamb Chops",
      description:
        "Grilled lamb chops served with a mint yogurt sauce and roasted potatoes.",
      price: 24,
      category: "Entree",
      image: require("../assets/images/menu/Lamb-Chops-ONE-1.webp"),
    },
    {
      name: "Pasta Primavera",
      description:
        "Fresh pasta with seasonal vegetables and a creamy tomato sauce.",
      price: 26,
      category: "Entree",
      image: require("../assets/images/menu/pasta-primavera-1-768x1152.webp"),
    },
    {
      name: "Rigatoni Bolognese",
      description: "Rigatoni pasta with a classic Bolognese sauce.",
      price: 28,
      category: "Entree",
      image: require("../assets/images/menu/rigatoni-bolognese-4.webp.webp"),
    },
    {
      name: "Tiramisu",
      description:
        "Classic Italian dessert with ladyfingers dipped in espresso and layered with a creamy mascarpone filling.",
      price: 10,
      category: "Dessert",
      image: require("../assets/images/menu/Tiramisu-6.webp"),
    },
    {
      name: "Baklava",
      description:
        "Traditional Greek dessert with flaky phyllo dough filled with nuts and honey.",
      price: 12,
      category: "Dessert",
      image: require("../assets/images/menu/105a4e88dca44f4a81dbaf6ccb7b83bc.webp"),
    },
    {
      name: "Lemon Cake",
      description: "Homemade lemon cake with a lemon glaze.",
      price: 14,
      category: "Dessert",
      image: require("../assets/images/menu/lemon dessert.webp"),
    },
  ];
};

export default useMenu;
