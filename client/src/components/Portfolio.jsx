import React from "react";
import { Box, Typography } from "@mui/material";
import Projects from "./Projects";

const Portfolio = () => {
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
        Portfolio
      </Typography>
      <Projects
        index={1}
        ProjectTitle={"DishDiscovery"}
        ProjectDescription={"Loremshksgsgksghskg,jskjsgf"}
        image={
          "https://i.pinimg.com/564x/5b/6a/32/5b6a322da3c79d7368b661a07c5f95ac.jpg"
        }
      />
      <Projects
        index={2}
        ProjectTitle={"DishDiscovery"}
        ProjectDescription={"Loremshksgsgksghskg,jskjsgf"}
        image={
          "https://i.pinimg.com/564x/5b/6a/32/5b6a322da3c79d7368b661a07c5f95ac.jpg"
        }
      />
       <Projects
        index={3}
        ProjectTitle={"DishDiscovery"}
        ProjectDescription={"Loremshksgsgksghskg,jskjsgf"}
        image={
          "https://i.pinimg.com/564x/5b/6a/32/5b6a322da3c79d7368b661a07c5f95ac.jpg"
        }
      />
    </>
  );
};

export default Portfolio;
