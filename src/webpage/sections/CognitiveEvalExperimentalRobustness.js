// web/src/components/elements/bottomSections.js
// This component is used to render the bottom sections of the webpage, specifically the Call for Participation, Citation, and Footer Sections.
import React from 'react';
import { Typography, Container, Box} from '@mui/material';

const CognitiveEvalExperimentalRobustness = () => (
  <Box sx={{ backgroundColor: '#ffffff', width: '100%', pt: 4, pb: 6 }}>
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
        CognitiveEval Experimental Robustness
      </Typography>
      
    </Container>
  </Box>
);




export default CognitiveEvalExperimentalRobustness;
