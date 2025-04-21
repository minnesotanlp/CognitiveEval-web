import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Container, Box, Button } from '@mui/material';

const CognitiveScienceExperiements = () => {

    return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        width: '100%',
        pt: 6,
        pb: 6,
      }}
    >
        <Container maxWidth="lg" sx={{ px: 2 }}>
            <Typography
            variant="h5"
            align="center"
            sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
                fontSize: '2rem',
            }}
            >
            Human Cognitive Science Experiements on LLMs
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
                Experiments
            </Typography>

            <Typography
            variant="body1"
            sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '1.15rem',
                mb: 4,
                textAlign: 'justify',
                paddingTop: '1rem',
            }}
            >
            We use CognitiveEval to adapt five classic cognitive experimental tasks for LLMs. 
            The tasks are chosen to balance variety and depth: we explore tasks related to two broad types of cognition, 
            and within those types, select different domains and experimental procedures. 
            <br/>
            <br/>
            Executive function is understood to enable goal-directed behavior, making it an interesting area of study in LLMs. 
            Memory processes have to do with either the encoding, storage, or retrieval of information and past experiences. 
            </Typography>

            <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
                component="img"
                src="/images/cognition_test_tree.png"
                alt="5 Cognitive Science Experiements"
                sx={{
                maxWidth: '850px',
                width: '100%',
                height: 'auto',
                border: '1px solid #ccc',
                borderRadius: '8px',
                }}
            />
            </Box>

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
                gutterBottom
                >
                Findings
            </Typography>
            {/* <DataInsightsGallery slides={slides} /> */}
            <Box sx={{ width: '90%', mx: 'auto', display: 'flex', justifyContent: 'center', gap: 1 }}>
              <Button component={Link} to="/experiment/wcst" variant="contained" color= 'experiment' sx={{ flex: 1 }}>Wisconsin Card Sorting</Button>
              <Button component={Link} to="/experiment/flanker" variant="contained" color= 'experiment' sx={{ flex: 1 }}>Flanker Test</Button>
              <Button component={Link} to="/experiment/digit" variant="contained" color= 'experiment' sx={{ flex: 1 }}>Backward & Forward Digit Span</Button>
              <Button component={Link} to="/experiment/drm" variant="contained" color= 'experiment' sx={{ flex: 1 }}>DRM Task</Button>
            </Box>
        </Container>
    </Box>
)};

export default CognitiveScienceExperiements;