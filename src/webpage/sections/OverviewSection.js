// web/src/components/elements/OverviewSection.js
// import React, { useState } from 'react';
import React from 'react';
import { Typography, Box, Container } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const OverviewGallery = () => {
  // const images = [
  //   // { src: '/images/cognitive_eval_conceptual_pipeline.png', alt: 'Conceptual Pipeline' },
  //   // { src: '/images/cognitive_eval_pipeline.png', alt: 'Pipeline' },
  //   { src: '/images/lllm_vs_human_cognitive_assessment.png', alt: 'LLM vs Human Cognitive Assessment'}
  // ];
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const handlePrev = () => {
  //   setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  // };
  // const handleNext = () => {
  //   setCurrentIndex((prev) => (prev + 1) % images.length);
  // };

  return (
    <Box sx={{ position: 'relative', textAlign: 'center', mt: 4 }}>
      <Box
        component="img"
        src={'/images/lllm_vs_human_cognitive_assessment.png'}
        alt={'LLM vs Human Cognitive Assessment'}
        sx={{
          maxWidth: '100%',
          width: { xs: '100%', md: '70%' },
          height: 'auto',
          border: '1px solid #ccc',
          borderRadius: '8px',
          mx: 'auto',
        }}
      />
      {/* <Box sx={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)' }}>
        <IconButton onClick={handlePrev} sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box sx={{ position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)' }}>
        <IconButton onClick={handleNext} sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box> */}
    </Box>
  );
};


const OverviewSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', width: '100%', pt: 6, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            mb: 3,
            color: 'text.primary',
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          Project Objective
        </Typography>
        <Box component="ul" sx={{ pl: 4 }}>
          <Box component="li" sx={{ mb: 2 }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: 'text.secondary',
                textAlign: 'justify',
              }}
            >
              Test theories/models/frameworks developed in human studies within LLM settings - test the extent to which these models demonstrate genuine understanding, rather than merely sophisticated statistical pattern matching. Quanitfy the difference between human and LLM
            </Typography>
          </Box>
          <Box component="li">
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: 'text.secondary',
                textAlign: 'justify',
              }}
            >
              Develop CognitiveEval, a framework for systematically evaluating the artificial cognitive capabilities of LLMs, with a particular emphasis on robustness in response collection. The key features of COGNITIVEVAL include: (i) auto-matic prompt permutations, and (ii) testing that gathers both generations and model probability estimates. Our experiments demonstrate that these features lead to more robust experimental outcomes. Using CognitiveEval, we replicate five classic experiments in cognitive science, illustrating the framework’s generalizability across various experimental tasks and obtaining a cognitive profile of several state-of-the-art LLMs.
            </Typography>
          </Box>
        </Box>
        <OverviewGallery />
      </Container>
    </Box>
  );
};

export default OverviewSection;
