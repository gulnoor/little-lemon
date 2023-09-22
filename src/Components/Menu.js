import Button from "./Button/Button";
import bgimg from "../assets/images/bg/93597.jpg";
import "./menu.css";
import { useContext } from "react";
import { themeContext } from "../App";

const Menu = () => {
  const { theme } = useContext(themeContext);
  const menu = [
    {
      name: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      image: require("../assets/images/greek salad.jpg"),
      price: "$12.99",
    },
    {
      name: "Brushetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      image: "",
      price: "$7.99",
    },
    {
      name: "Grilled Fish",
      price: "$20.00",
    },
    {
      name: "Pasta",
      price: "$18.99",
    },
    {
      name: "Lemon Dessert",
      price: "$6.99",
    },
    {
      name: "Bruschetta",
      description:
        "Freshly baked bread topped with garlic, tomatoes, basil, and olive oil.",
      price: 10,
      category: "Appetizer",
      image: "https://i.imgur.com/Bruschetta.jpg",
    },
    {
      name: "Calamari Fritti",
      description: "Crispy fried calamari served with a lemon aioli sauce.",
      price: 12,
      category: "Appetizer",
      image: "https://i.imgur.com/CalamariFritti.jpg",
    },
    {
      name: "Hummus",
      description:
        "Homemade hummus served with warm pita bread and fresh vegetables.",
      price: 14,
      category: "Appetizer",
      image: "https://i.imgur.com/Hummus.jpg",
    },

    {
      name: "Arugula Salad",
      description:
        "Fresh arugula salad with shaved Parmesan cheese, pine nuts, and a balsamic vinaigrette dressing.",
      price: 18,
      category: "Salad",
      image: "https://i.imgur.com/ArugulaSalad.jpg",
    },
    {
      name: "Caesar Salad",
      description:
        "Classic Caesar salad with romaine lettuce, Parmesan cheese, croutons, and a creamy Caesar dressing.",
      price: 20,
      category: "Salad",
      image: "https://i.imgur.com/CaesarSalad.jpg",
    },
    {
      name: "Chicken Souvlaki",
      description: "Grilled chicken skewers served with rice and vegetables.",
      price: 22,
      category: "Entree",
      image: "https://i.imgur.com/ChickenSouvlaki.jpg",
    },
    {
      name: "Lamb Chops",
      description:
        "Grilled lamb chops served with a mint yogurt sauce and roasted potatoes.",
      price: 24,
      category: "Entree",
      image: "https://i.imgur.com/LambChops.jpg",
    },
    {
      name: "Pasta Primavera",
      description:
        "Fresh pasta with seasonal vegetables and a creamy tomato sauce.",
      price: 26,
      category: "Entree",
      image: "https://i.imgur.com/PastaPrimavera.jpg",
    },
    {
      name: "Rigatoni Bolognese",
      description: "Rigatoni pasta with a classic Bolognese sauce.",
      price: 28,
      category: "Entree",
      image: "https://i.imgur.com/RigatoniBolognese.jpg",
    },
    {
      name: "Tiramisu",
      description:
        "Classic Italian dessert with ladyfingers dipped in espresso and layered with a creamy mascarpone filling.",
      price: 10,
      category: "Dessert",
      image: "https://i.imgur.com/Tiramisu.jpg",
    },
    {
      name: "Baklava",
      description:
        "Traditional Greek dessert with flaky phyllo dough filled with nuts and honey.",
      price: 12,
      category: "Dessert",
      image: "https://i.imgur.com/Baklava.jpg",
    },
    {
      name: "Lemon Cake",
      description: "Homemade lemon cake with a lemon glaze.",
      price: 14,
      category: "Dessert",
      image: "https://i.imgur.com/LemonCake.jpg",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage:
            theme === "dark"
              ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgimg}) `
              : `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url(${bgimg})`,
        }}
        className=" menu-hero"
      >
        <h1>Menu</h1>
        <p>traditional recipes served with a modern twist</p>
        <div className="menu-categories">
          <div className="category-btn">
            Appetizers
            <p>Mezze that will tantalize your taste buds</p>
          </div>
          <div className="category-btn">
            Salad
            <p>Fresh, flavorful salads made with seasonal ingredients</p>
          </div>
          <div className="category-btn">
            Entree
            <p>Classic Mediterranean dishes with a modern twist</p>
          </div>
          <div className="category-btn">
            Dessert
            <p>Sweeten your meal with a traditional Mediterranean dessert</p>
          </div>
        </div>
      </div>
      <div className="menu-container">
        <ol className="menu-list">
          {menu.map((item) => {
            return (
              <li key={item.name}>
                <div className="menu-item">
                  <img src={item.image}></img>
                  <div className="item-content">
                    <h2 size={"sm"}>{item.name}</h2>
                    <p>{item.description}</p>
                    <Button>Add to cart</Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="menu-card-container">
          <div className="menu-card">
            <img src={menu[0].image}></img>
            <h2>{menu[0].name}</h2>
            <span>{menu[0].description}</span>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
