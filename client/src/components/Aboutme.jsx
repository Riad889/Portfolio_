import { Button, Typography, Box, styled } from "@mui/material";
import React from "react";

const AboutMeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: "70px",
  marginTop: "5%",
  justifyContent: "space-evenly",

  width: "50%", // Ensure the container has a full width
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginTop: "5%",
  },
}));

const DescriptionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginLeft: "30px",
  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
  },
}));

const AboutMe = () => {
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
        About Me
      </Typography>
      <AboutMeBox>
        <img
          style={{
            height: "300px",
            width: "300px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          src="https://i.pinimg.com/564x/f7/0d/19/f70d19f006aa6f95630b0dc15b885f2d.jpg"
          alt="img"
        />
        <DescriptionBox>
          <Typography sx={{ whiteSpace: "normal", color: "#999EA8" }}>
            Hi, I'm{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              Abdulla Al Riad
            </span>{" "}
            ! With one years of experience in{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>MERN</span>{" "}
            (MongoDB, Express.js, React.js, Node.js) development, I specialize
            in crafting robust and scalable web applications. My expertise spans
            the entire MERN stack, encompassing React.js for intuitive user
            interfaces, Node.js for efficient server-side logic, and MongoDB for
            seamless database management. I excel in leveraging the power of
            Express.js to create APIs that drive functionality and performance.
            Collaborative by nature, I thrive in team environments, where I
            contribute my skills to deliver high-quality software solutions.
            Eager to stay abreast of emerging technologies, I continuously seek
            opportunities for growth and learning. Let's connect and explore how
            I can bring value to your project!
          </Typography>
          <Box sx={{ display: "flex", width: "100%", padding: "20px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4D81D1",
                fontSize: "20px",
                fontFamily: "Poetsen One",
                transition: ".4s",
                "&:hover": {
                  boxShadow: "0 0 20px #4D81D1", // Increasing glow on hover
                },
              }}
            >
              Hire Me
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginLeft: "20px",
                color: "white",
                fontFamily: "Poetsen One",
                fontSize: "20px",
                transition: ".4s",
                "&:hover": {
                  boxShadow: "0 0 20px #4D81D1", // Increasing glow on hover
                },
              }}
            >
              Resume
            </Button>
          </Box>
        </DescriptionBox>
      </AboutMeBox>
    </>
  );
};

export default AboutMe;
