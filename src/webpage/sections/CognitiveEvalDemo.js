// web/src/components/elements/PlatformSection.js
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const CognitiveEvalDemo = () => {
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
          CognitiveEval Tutorial
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: 'text.secondary',
            mb: 3,
            textAlign: 'justify',
          }}
        >
          CognitiveEval experiments can be set up using a web interface or through json configuration files.
        </Typography>
        <Typography
        variant="body1"
        sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: 'primary.main',
            textAlign: 'justify',
            fontWeight: 'bold',
            paddingTop: '1rem',
        }}
        >
            Web Interface
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.1rem',
            textAlign: 'center',
            mb: 2,
            color: 'text.secondary',
            paddingTop: '1rem',
          }}
        >
          Below is the demo video for the LLM-adapted version of Stroop experiment (1985).
          <br/>
          <br/>
          In human version of Stroop experiment, participants are asked to name the color of the ink in which a word is written, ignoring the word's meaning. In the incongruent condition (e.g., the word "RED" written in green ink), response times are slower and errors are more frequent than in the congruent condition (e.g., "RED" in red ink). The Stroop effect is widely used in psychology to study attention, automaticity, and cognitive flexibility.
        </Typography>
        <Box
          sx={{
            position: 'relative',
            pb: '56.25%',
            pt: 2,
            height: 0,
            overflow: 'hidden',
            mb: 4,
          }}
        >
          <video
            controls
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '8px',
            }}
          >
            <source src="/videos/demo_video_150crop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.15rem',
            lineHeight: 1.6,
            color: 'text.secondary',
            mb: 2,
            textAlign: 'justify',
          }}
        >
            View this video for a demo of the data collection web interface. We will provide the login credentials once you fill out our interest form!
        </Typography>

        <Typography
        variant="body1"
        sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: 'primary.main',
            textAlign: 'justify',
            fontWeight: 'bold',
            paddingTop: '1rem',
        }}
        >
            JSON Configuration Files
        </Typography>

      </Container>
    </Box>
  );
};

export default CognitiveEvalDemo;
