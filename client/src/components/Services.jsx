import React from "react";
import { Typography, Box, Grid, styled } from "@mui/material";
import webdesigner from "../assets/webdesigner.svg";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import problemSolver from "../assets/problemSolver.jpeg";

const ServiceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "5%",
  marginLeft: "70px",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px",
  },
}));

const Services = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginTop: "5%",
  },
}));

const ServiceElements = styled(Box)(({ theme }) => ({
  height: "230px",

  width: "400px",
  borderRadius: "10px",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
  transition: "1s",
  "&:hover": {
    boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.8)",
  },

  [theme.breakpoints.down("md")]: {
    height: "250px",
    marginTop: "10px",
    width: "300px",
  },
}));

const MyServices = () => {
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
        Services
      </Typography>
      <ServiceBox>
        <Services>
          <ServiceElements>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img
                src={webdesigner}
                style={{
                  height: "84px",
                  width: "84px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontFamily: "Poetsen One",
                  textAlign: "center",
                }}
              >
                Web designer
              </Typography>
            </Box>
            <Typography
              sx={{ color: "white", padding: "10px", overflow: "hidden" }}
            >
              I am a web designer who uses Figma to create visually compelling
              and functional websites. I excel at turning client ideas into
              interactive prototypes and polished final products.
            </Typography>
          </ServiceElements>
          <ServiceElements>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img
                src={frontend}
                style={{
                  height: "84px",
                  width: "84px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontFamily: "Poetsen One",
                  textAlign: "center",
                }}
              >
                Frontend
              </Typography>
            </Box>
            <Typography
              sx={{ color: "white", padding: "10px", overflow: "hidden" }}
            >
              I am a frontend developer specializing in React.js. I build
              dynamic, responsive web applications by leveraging React's
              component-based architecture.
            </Typography>
          </ServiceElements>
        </Services>
        <Services>
          <ServiceElements>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img
                src={backend}
                style={{
                  height: "84px",
                  width: "84px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontFamily: "Poetsen One",
                  textAlign: "center",
                }}
              >
                Backend
              </Typography>
            </Box>
            <Typography
              sx={{ color: "white", padding: "10px", overflow: "hidden" }}
            >
              I am a backend engineer specializing in Node.js, Express.js,
              MongoDB, and WebSockets. I design and implement scalable
              server-side applications, create RESTful APIs, and manage
              databases
            </Typography>
          </ServiceElements>
          <ServiceElements>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img
                src={problemSolver}
                style={{
                  height: "84px",
                  width: "84px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontFamily: "Poetsen One",
                  textAlign: "center",
                }}
              >
                Problem Solving
              </Typography>
            </Box>
            <Typography
              sx={{ color: "white", padding: "10px", overflow: "hidden" }}
            >
              I am a problem solver with a knack for tackling complex
              challenges. I excel at analyzing issues, devising innovative
              solutions, and implementing effective strategies.
            </Typography>
          </ServiceElements>
        </Services>
      </ServiceBox>
    </>
  );
};
export default MyServices;
