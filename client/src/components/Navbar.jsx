import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const NavBarATitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
  }));
const NavBarTitle = styled(Typography)(({ theme }) => ({
    color: "#52B5D9",
    marginLeft: "70px",
    fontSize:'23px',
    fontWeight:'bold',
    cursor: "pointer",
    position: "relative",
    display: "inline-block", // Ensure the pseudo-element is positioned relative to the text
    '&::after': {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px", // Adjust thickness of the underline
      backgroundColor: "white", // Color of the underline
      bottom: "-2px", // Adjust distance from the text
      left: 0,
      transform: "scaleX(0)",
      transformOrigin: "bottom left",
      transition: "transform 0.3s ease-out",
    },
    '&:hover::after': {
      transform: "scaleX(1)",
    },
    '&:hover': {
      color: "white",
    },
}));

const SliderIconMenu=styled(MenuIcon)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'flex',
        color:'white'
    }
    
}))
const Navbar = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" ,padding:'20px',alignItems:'center',position:'sticky'}}>
        <SliderIconMenu/>
        <NavBarTitle>Abdulla Al Riad</NavBarTitle>
        <NavBarATitleBox>
          <NavBarTitle>Home</NavBarTitle>
          <NavBarTitle>About Me</NavBarTitle>
          <NavBarTitle>Portfolio</NavBarTitle>
          <NavBarTitle>Service</NavBarTitle>
          <Button sx={{marginLeft:'70px',textTransform:'none',fontSize:'17px',fontWeight:'bold'}} variant="contained">Contact</Button>
        </NavBarATitleBox>
      </Box>
    </>
  );
};
export default Navbar;
