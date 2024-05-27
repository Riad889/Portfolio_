import React from "react";
import { Box, Typography, styled } from "@mui/material";

import react from "../assets/react.svg";
import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import js from "../assets/js.svg";
import node from "../assets/node.svg";
import socket from "../assets/socket.io.svg";
import express from "../assets/expressJs.svg";
import mongodb from "../assets/mongodb.svg";

const SkillBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginLeft: "70px",
  marginRight: "5px",
  marginTop:'5%',
  [theme.breakpoints.down("md")]:{
    flexDirection:'column',
    marginLeft:'17px'
  }
}));

const Skills = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          marginTop: "10%",
          color: "white",
          fontFamily: "Poetsen One",
          width: "100%",
          textAlign: "center",
          position: "relative",
          display: "inline-block", // Ensures the underline is only as wide as the text
          "&::after": {
            content: '""',
            marginLeft: "0",
            display: "block",
            width: "100%", // Full width of the text
            height: "2px", // Adjust thickness of the underline
            backgroundColor: "white", // Change this to desired color
            position: "absolute",
            bottom: "-5px", // Adjust the position below the text
            left: "0",
          },
        }}
      >
        Skills
      </Typography>
      <SkillBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img className="image" src={html5} alt="react logo" title="Html" />
          <Typography sx={{ color: "white" }}>Html</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {" "}
          <img className="image" src={css3} alt="react logo" />
          <Typography sx={{ color: "white" }}>Css</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img className="image" src={js} alt="react logo" />
          <Typography sx={{ color: "white" }}>Java Script</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img className="image" src={react} alt="react logo" />
          <Typography sx={{ color: "white" }}>ReactJs</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img className="image" src={node} alt="react logo" />
          <Typography sx={{ color: "white" }}>NodeJS</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img className="image" src={express} alt="react logo" />
          <Typography sx={{ color: "white" }}>Express</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img className="image" src={socket} alt="react logo" />
          <Typography sx={{ color: "white" }}>Socket.IO</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img className="image" src={mongodb} alt="react logo" />
          <Typography sx={{ color: "white" }}>MongoDB</Typography>
        </Box>
      </SkillBox>
    </>
  );
};
export default Skills;
