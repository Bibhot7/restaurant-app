import React from "react";
import { data } from "../restApi.json";
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR CREATION</h1>
          <p>
            Step into a culinary voyage at our restaurant, where every dish
            tells a story of meticulous craftsmanship and exquisite flavors. Our
            diverse menu is a tapestry of gastronomic delights, meticulously
            curated to delight discerning palates. From sizzling appetizers that
            tease the senses to sumptuous mains that embrace tradition with
            innovative twists, each plate is a symphony of premium ingredients
            and culinary expertise. Indulge in our chef's artistry, whether it's
            the vibrant colors of fresh salads, the aromatic allure of
            handcrafted soups, or the succulent tenderness of our signature
            meats. Complemented by an array of delightful desserts and
            handcrafted beverages, every visit promises an enchanting sojourn
            through culinary excellence.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
