import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <nav>
      <div className="logo">NZ Eatery</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <Link
              to={element.link}
              key={element.id}
              spy={true}
              smooth="true"
              duration={500}
            >
              {element.title}
            </Link>
          ))}
        </div>
        <Link
          to="menu"
          spy={true}
          smooth="true"
          duration={500}
          className="menuBtn"
        >
          OUR MENU
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>
      {/* Button to navigate to Admin page */}
      <div>
        <NavLink
          to="/admin"
          spy={true}
          smooth="true"
          duration={500}
          className="adminBtn"
        >
          BOOKINGS
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
