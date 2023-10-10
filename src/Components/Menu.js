
import "./menu.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import TopNav from "./TopNav";
import { MenuContext } from "../context/MenuContext";
import MenuList from "./MenuList";
import { Box, Button, Card, Rating, Typography, styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-regular-svg-icons";
import { faLemon as faLemonSolid } from "@fortawesome/free-solid-svg-icons";
import bgimg2 from "../assets/images/bing image creator/_91d74413-57d7-41c3-99a3-adc4c9db9858.jpeg"
const Menu = () => {
  const menu = useContext(MenuContext);
  const [rating, setRating] = useState(4.5);
  const LemonRating = styled(Rating)({
    display: "inline-flex",
    "& .MuiRating-iconFilled": {
      color: "var(--md-sys-color-primary)",
      // paddingRight:"12px"
    },
    "& .MuiRating-iconHover": {
      color: "var(--md-sys-color-primary)",
      // paddingRight:"12px"
    },
    "& .MuiRating-iconEmpty": {
      color: "var(--md-sys-color-primary)",
      // paddingRight:"12px"
    },
  });

  const { theme } = useContext(ThemeContext);

  const menuu = [
    {
      name: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      image: require("../assets/images/greek salad.jpg"),
      category: "Salad",
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
      image: require("../assets/images/menu/Best-Arugula-Salad.jpg"),
    },
    {
      name: "Caesar Salad",
      description:
        "Classic Caesar salad with romaine lettuce, Parmesan cheese, croutons, and a creamy Caesar dressing.",
      price: 20,
      category: "Salad",
      image: require("../assets/images/menu/Caesar-Salad-Recipe-3.jpg"),
    },
    {
      name: "Chicken Souvlaki",
      description: "Grilled chicken skewers served with rice and vegetables.",
      price: 22,
      category: "Entree",
      image: require("../assets/images/menu/greek-chicken-souvlaki-recipe-photo-tablefortwoblog-7-936x1200.jpg.webp"),
    },
    {
      name: "Lamb Chops",
      description:
        "Grilled lamb chops served with a mint yogurt sauce and roasted potatoes.",
      price: 24,
      category: "Entree",
      image: require("../assets/images/menu/Lamb-Chops-ONE-1.jpg"),
    },
    {
      name: "Pasta Primavera",
      description:
        "Fresh pasta with seasonal vegetables and a creamy tomato sauce.",
      price: 26,
      category: "Entree",
      image: require("../assets/images/menu/pasta-primavera-1-768x1152.jpg"),
    },
    {
      name: "Rigatoni Bolognese",
      description: "Rigatoni pasta with a classic Bolognese sauce.",
      price: 28,
      category: "Entree",
      image: require("../assets/images/menu/rigatoni-bolognese-4.jpg.webp"),
    },
    {
      name: "Tiramisu",
      description:
        "Classic Italian dessert with ladyfingers dipped in espresso and layered with a creamy mascarpone filling.",
      price: 10,
      category: "Dessert",
      image: require("../assets/images/menu/Tiramisu-6.jpg"),
    },
    {
      name: "Baklava",
      description:
        "Traditional Greek dessert with flaky phyllo dough filled with nuts and honey.",
      price: 12,
      category: "Dessert",
      image: require("../assets/images/menu/105a4e88dca44f4a81dbaf6ccb7b83bc.jpg"),
    },
    {
      name: "Lemon Cake",
      description: "Homemade lemon cake with a lemon glaze.",
      price: 14,
      category: "Dessert",
      image: require("../assets/images/menu/lemon dessert.jpg"),
    },
  ];
  const MenuHeroImg = styled("img")`
  display: flex;
  margin-left: auto;
  height: 550px;
  width: 50%;
  object-fit: cover;
  border-radius: 16px;
  filter: ${theme==="dark"?'brightness(0.75)':'none'};
  @media screen and (max-width: 839px) {
        width: 100%;
        height: 400px;
      }

  `

  return (
    <>
      <div
        
        className=" menu-hero"
      >
      <div className="menu-title">
        <h1>Menu</h1>
        <p>traditional recipes served with a modern twist</p>

      </div>
        {/* <div className="menu-categories">
          <Link to={"/menu/appetizers"} className="category-btn">
            Appetizers
            <p>Mezze that will tantalize your taste buds</p>
          </Link>
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
        </div> */}
      <MenuHeroImg src = {bgimg2}/>

      </div>
      <TopNav names={["Appetizer", "Salad", "Entree", "Dessert"]} />
      <div className="menu-container">
        <Routes>
          <Route
            path=""
            element={<MenuList menu={menu} category={"All"} />}
          ></Route>
          <Route
            path="Salad"
            element={<MenuList menu={menu} category={"Salad"} />}
          ></Route>
          <Route
            path="Appetizer"
            element={<MenuList menu={menu} category={"Appetizer"} />}
          ></Route>
          <Route
            path="Entree"
            element={<MenuList menu={menu} category={"Entree"} />}
          ></Route>
          <Route
            path="Dessert"
            element={<MenuList menu={menu} category={"Dessert"} />}
          ></Route>
        </Routes>

        <div className="menu-card-container">
          {/* <div className="menu-card p-4">
            <img alt="" src={menu[7] ? menu[7].image : null}></img>
            <h2 className="text-4xl">{menu[7] ? menu[7].name : null}</h2>
            <span>{menu[7] ? menu[7].description : null}</span>
            <Button>Add to cart</Button>
          </div> */}

          <Card
            sx={{
              padding: "32px",
              width: "100%",
              background: "var(--md-sys-color-surface-container-high)",
              color: "var(--md-sys-color-on-surface-container)",
              borderRadius: "1rem",
              gap: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "500" }}>
              {menuu[7].name}
            </Typography>
            <img className="menu-card-img" alt="" src={menuu[7].image}></img>
            <Box sx={{display:"flex",
          justifyContent: "space-between"}}>
              <LemonRating
                icon={
                  <FontAwesomeIcon
                    icon={faLemonSolid}
                    size="lg"
                    style={{ margin: "0 8px" }}
                  ></FontAwesomeIcon>
                }
                emptyIcon={
                  <FontAwesomeIcon
                    icon={faLemon}
                    size="lg"
                    style={{ margin: "0 8px" }}
                  ></FontAwesomeIcon>
                }
                defaultValue={4.5}
                precision={0.5}
                value={rating}
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              ></LemonRating>
              <Typography
                sx={{
                  display: "inline-block",
                }}
                component={"span"}
              >
                {`${rating} / 5 lemmons` }
              </Typography>
            </Box>

            <Typography variant="body1" component={"p"}>
              {menuu[7].description}
            </Typography>

            <Button variant="contained">add to cart</Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Menu;
