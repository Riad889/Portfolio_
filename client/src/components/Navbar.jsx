import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { keyframes } from "@mui/system";

// Define keyframe animations
const popup = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const NavBarATitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavBarTitle = styled(Typography)(({ theme }) => ({
  color: "#52B5D9",
  marginLeft: "70px",
  fontSize: "23px",
  fontFamily:'Poetsen One',
  fontWeight: "bold",
  cursor: "pointer",
  position: "relative",
  display: "inline-block",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    backgroundColor: "white",
    bottom: "-2px",
    left: 0,
    transform: "scaleX(0)",
    transformOrigin: "bottom left",
    transition: "transform 0.3s ease-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
  "&:hover": {
    color: "white",
  },
}));

const SliderIconMenu = styled(MenuIcon)(({ theme }) => ({
  display: "none",
  cursor: 'pointer',
  [theme.breakpoints.down("md")]: {
    display: "flex",
    color: "white",
  },
}));

const MenuPopup = styled("div")(({ theme }) => ({
    
  position: "absolute",
  top: "40px",
  left: "10px",
  backgroundColor: "white",
  border: "1px solid black",
  padding: "10px",
  animation: `${popup} 0.3s ease-out`,
}));

const MenuList = styled("ul")(({ theme }) => ({
  listStyle: "none",
  padding: 0,
  margin: 0,
}));

const MenuItem = styled("li")(({ theme }) => ({
  padding: "5px 0",
  cursor: "pointer",
  fontFamily:'Poetsen One',
  transition: "background-color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    transform: "scale(1.05)",
  },
}));

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          alignItems: "center",
      
        }}
      >
        <SliderIconMenu onClick={toggleMenu} />
        {isMenuOpen && (
          <MenuPopup ref={menuRef}>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>About Me</MenuItem>
              <MenuItem>Portfolio</MenuItem>
              <MenuItem>Service</MenuItem>
              <MenuItem>
                <Button variant="contained">Contact</Button>
              </MenuItem>
            </MenuList>
          </MenuPopup>
        )}
        <NavBarTitle>Abdulla Al Riad</NavBarTitle>
        <NavBarATitleBox>
          <NavBarTitle>Home</NavBarTitle>
          <NavBarTitle>About Me</NavBarTitle>
          <NavBarTitle>Portfolio</NavBarTitle>
          <NavBarTitle>Service</NavBarTitle>
          <Button
            sx={{
              marginLeft: "70px",
              textTransform: "none",
              fontSize: "17px",
              fontWeight: "bold",
              fontFamily:'Poetsen One'
            }}
            variant="contained"
          >
            Contact
          </Button>
        </NavBarATitleBox>
      </Box>
    </>
  );
};

export default Navbar;
