import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ProjectBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "10px",
  width: "70%",
  marginLeft: "10%",
  justifyContent: "space-evenly",
  marginTop: "5%",
  // flexDirection: index % 2 === 0 ? 'row-reverse' : 'row', // Conditionally set flexDirection
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const Projects = ({ index, ProjectTitle, ProjectDescription, image }) => {
  return (
    <>
      <ProjectBox>
        {index % 2 === 0 ? ( // Apply this style if index is even
          <>
            <img
              style={{
                height: "300px",
                width: "300px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              src={image}
              alt="img"
            />
            <Box sx={{ padding: "20px" }}>
              <Typography
                variant="h2"
                sx={{ color: "#58C5E4", fontFamily: "Poetsen One" }}
              >
                Project {index}
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "white", marginTop: "20px" }}
              >
                {ProjectTitle}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  whiteSpace: "pre-line",
                  marginTop: "20px",
                }}
              >
                {ProjectDescription}
              </Typography>
              <Button
                variant="contained"
                sx={{ marginTop: "10px" }}
                startIcon={<ArrowRightAltIcon />}
              >
                {" "}
                Read More
              </Button>
            </Box>
          </>
        ) : (
          // Apply this style if index is odd
          <>
            <Box sx={{ padding: "20px" }}>
              <Typography
                variant="h2"
                sx={{ color: "#58C5E4", fontFamily: "Poetsen One" }}
              >
                Project {index}
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "white", marginTop: "20px" }}
              >
                {ProjectTitle}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  whiteSpace: "pre-line",
                  marginTop: "20px",
                }}
              >
                {ProjectDescription}
              </Typography>
              <Button
                variant="contained"
                sx={{ marginTop: "10px" }}
                startIcon={<ArrowRightAltIcon />}
              >
                {" "}
                Read More
              </Button>
            </Box>
            <img
              style={{
                height: "300px",
                width: "300px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              src={image}
              alt="img"
            />
          </>
        )}
      </ProjectBox>
    </>
  );
};

export default Projects;
