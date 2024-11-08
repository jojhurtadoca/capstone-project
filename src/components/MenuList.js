import React from "react";
import MenuCard from "./MenuCard";
import ButtonComponent from "./ButtonComponent";

const MenuListData = [
  {
    id: 1,
    name: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$ 12.99",
    image: "/assets/images/greeksalad.png",
  },
  {
    id: 2,
    name: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$ 5.99",
    image: "/assets/images/bruschetta.png",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$ 5.00",
    image: "/assets/images/lemondessert.jpg",
  },
];

const MenuList = () => {
  return (
    <section className="padding-desktop">
      <div class="menu-list-title-and-button">
        <h2>This weeks specials!</h2>
        <div className="button-online-menu">
          <ButtonComponent label={"Online Menu"} />
        </div>
      </div>
      <div className="menu-list-section">
        {MenuListData.map((menu) => (
          <MenuCard menu={menu} />
        ))}
      </div>
    </section>
  );
};

export default MenuList;
