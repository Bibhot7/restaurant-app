import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            "At NZ Eatery, we pride ourselves on delivering an exquisite
            dining experience steeped in culinary excellence. Nestled in the
            heart of Sylvia park,Mount wellington, our restaurant embodies a harmonious blend
            of flavors, culture, and passion for exceptional cuisine. Our
            dedicated chefs craft each dish with precision and creativity,
            sourcing the finest ingredients to create tantalizing flavors that
            dance on your palate. Whether you're seeking a cozy dinner for two
            or celebrating a special occasion with friends and family, our
            welcoming ambiance and attentive service ensure that every visit is
            a memorable gastronomic journey. Come savor the artistry of our
            dishes and indulge in the warmth of our hospitality at NZ Eatery
            ."
          </p>
          
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
