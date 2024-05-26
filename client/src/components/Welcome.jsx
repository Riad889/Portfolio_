import { Typography ,Box} from "@mui/material";
import React from "react";
import { useEffect,useState } from "react";
// Define a keyframe animation for the letters
import { keyframes } from "@mui/system"; // Ensure you have this import
import { styled } from "@mui/material/styles"; // Ensure you have this import
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(1);
  }
`;
const AnimatedLetter = styled('span')(({ theme }) => ({
    display: 'inline-block',
    opacity: 0,
    animation: `${fadeIn} 0.5s forwards`,
  }));



const Welcome=()=>{
    const words = ["Full Stack Web Developer", "Problem Solver", "Competitive Programmer"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  
    useEffect(() => {
      const wordChangeInterval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentLetterIndex(0); // Reset letter index for the new word
      }, 4000); // Change word every 4 seconds
  
      return () => clearInterval(wordChangeInterval);
    }, [words.length]);
    return(
        <>
        <Box sx={{marginLeft:"70px",padding:"30px",marginTop:'4%'}}>
            <Typography variant="h3" sx={{color:'#888C99'}}>I'm a</Typography>
            <Typography variant="h2" sx={{color:"white",fontFamily:'Poetsen One'}}>{words[currentWordIndex].split("").map((letter, index) => (
           <AnimatedLetter
           key={`${currentWordIndex}-${index}`}
           style={{
             animationDelay: `${index * 0.1}s`, // Delay each letter's animation
           }}
         >
           {letter}
         </AnimatedLetter>
          ))}</Typography>
        </Box>
        </>
    );
}
export default Welcome;