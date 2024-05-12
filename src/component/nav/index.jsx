import "./index.css"; // Import CSS file

import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavComponent() {
  const routes = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Login",
      href: "/login",
    },

    {
      title: "Favorite Movies",
      href: "/favorit",
    },
    {
      title: "To do list",
      href: "/dashbord",
    },
   
  ];

  return (
    <div className="container">

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto gap-2">
          {routes.map((route) => (
            <NavLink
              key={route.href}
              to={route.href}
              className="navItem" // Apply the class directly
            >
              {route.title}
            </NavLink>
          ))}

          {/* {isAuthinticated == true ? (
            <Nav.Link href="/profile">Profile</Nav.Link>
          ) : (
            <Nav.Link href="/login">Sign In</Nav.Link>
          )} */}

          {/* {isAuthinticated == false && (
            <Nav.Link href="/login">Sign In</Nav.Link>
          )} */}

          {/* {checkIsAuthinticated() ? (
            <Nav.Link href="/login">Profile</Nav.Link>
          ) : (
            <Nav.Link href="/login">Sign In</Nav.Link>
          )} */}

          {/* <Nav.Link href="/login">{handleAuthHref(isAuthinticated)}</Nav.Link> */}

          {/* {isAuthinticated ? (
            <Nav.Link href="/login">Profile</Nav.Link>
          ) : userType == "admin" ? (
            <Nav.Link href="/login">Dashboard</Nav.Link>
          ) : null} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}