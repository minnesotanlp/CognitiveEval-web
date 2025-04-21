import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Link as MuiLink, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
const Header = () => {
  // Array of author objects
  const authors = [
    {
      name: 'Karin De Langis',
      homepage: 'https://karinjd.github.io/',
      photo: '/images/karin.png',
      affiliation: 'Computer Science & Engineering, UMN',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
      name: 'Jong Inn Park',
      homepage: 'https://jong-inn.github.io/',
      photo: '/images/jong.png',
      affiliation: 'Computer Science & Engineering, UMN',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
      name: 'Bin Hu',
      homepage: 'https://example.com/bin',
      photo: '/images/bin.jpg',
      affiliation: 'Computer Science & Engineering, UMN',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
      name: 'Khanh Chi Le',
      homepage: 'https://example.com/khanh',
      photo: '/images/khanh.png',
      affiliation: 'Computer Science & Engineering, UMN',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
      name: 'Dongyeop Kang',
      homepage: 'https://dykang.github.io/',
      photo: '/images/DK.jpg',
      affiliation: 'Computer Science & Engineering, UMN',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
        name: 'Andreas Scharamm',
        homepage: 'https://example.com/andreas',
        photo: '/images/andreas.jpg',
        affiliation: 'Linguistics, Hamline University',
        affiliationLink: '',
    },
    {
        name: 'Andrew Elfenbein',
        homepage: 'https://example.com/andrew',
        photo: '/images/andreas.jpg',
        affiliation: 'Cognitive Psychology, UMN',
        affiliationLink: '',
    },
    {
        name: 'Mike Mensink',
        homepage: 'https://example.com/mike',
        photo: '/images/mike.jpg',
        affiliation: 'Psychology, UW - Stout',
        affiliationLink: '',
    },
  ];

  // Split authors into two rows
  const half = Math.ceil(authors.length / 2);
  const firstRowAuthors = authors.slice(0, half);
  const secondRowAuthors = authors.slice(half);

  return (
    <>
      {/* ========================== 1) Header Section (White) ========================== */}
      <Box sx={{ backgroundColor: '#ffffff', pt: 6, pb: 4 }}>
        <Container maxWidth="md">
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.8rem', md: '4rem' },
                mb: 1,
                color: 'text.primary',
                letterSpacing: '-0.5px',
                textAlign: 'center',
              }}
            >
              CognitiveEval
            </Typography>
            {/* ================= Authors Section with Photos, Names, and Affiliations ================= */}
            <Box sx={{ mt: 4 }}>
              {/* First row */}
              <Grid container spacing={2} justifyContent="center">
                {firstRowAuthors.map((author) => (
                  <Grid key={author.name} item xs={6} sm={2}>
                    <Box sx={{ textAlign: 'center', flexWrap: 'wrap'}}>
                      <Avatar
                        alt={author.name}
                        src={author.photo}
                        sx={{ width: 100, height: 100, margin: '0 auto' }}
                      />
                      <MuiLink
                        href={author.homepage}
                        underline="hover"
                        sx={{
                          display: 'block',
                          mt: 1,
                          fontWeight: 'bold',
                          color: 'primary.main',
                          fontFamily: 'Open Sans, sans-serif',
                          whiteSpace: 'nowrap',
                          
                        }}
                      >
                        {author.name}
                      </MuiLink>
                      <MuiLink
                        href={author.affiliationLink}
                        underline="hover"
                        sx={{
                          display: 'block',
                          fontSize: '0.85rem',
                          color: 'text.secondary',
                          fontFamily: 'Open Sans, sans-serif',
                        }}
                      >
                        {author.affiliation}
                      </MuiLink>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              {/* Second row */}
              <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                {secondRowAuthors.map((author) => (
                  <Grid key={author.name} item xs={6} sm={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Avatar
                        alt={author.name}
                        src={author.photo}
                        sx={{ width: 100, height: 100, margin: '0 auto' }}
                      />
                      <MuiLink
                        href={author.homepage}
                        underline="hover"
                        sx={{
                          display: 'block',
                          mt: 1,
                          fontWeight: 'bold',
                          color: 'primary.main',
                          fontFamily: 'Open Sans, sans-serif',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {author.name}
                      </MuiLink>
                      <MuiLink
                        href={author.affiliationLink}
                        underline="hover"
                        sx={{
                          display: 'block',
                          fontSize: '0.85rem',
                          color: 'text.secondary',
                          fontFamily: 'Open Sans, sans-serif',
                        }}
                      >
                        {author.affiliation}
                      </MuiLink>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              {/* ================= Logos Section ================= */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4, alignItems: 'center' }}>
                <Box component="a" href="https://nlplab.example.com" target="_blank" rel="noopener noreferrer">
                  <Box component="img" src="/images/nlp_lab_logo.png" alt="NLP Lab Logo" sx={{ width: 120, height: 'auto' }} />
                </Box>
                {/* <Box component="a" href="https://lawschool.example.com" target="_blank" rel="noopener noreferrer">
                  <Box component="img" src="/images/oh_logo.png" alt="Law School Logo" sx={{ width: 200, height: 'auto' }} />
                </Box> */}
              </Box>
              {/* ================= Paper/ Code/ Data ================= */}
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                variant="contained" 
                href="https://example.com"
                target="_blank"
                endIcon={<DescriptionIcon />}>
                Paper
                </Button>
                <Button 
                variant="contained" 
                href="https://example.com"
                target="_blank"
                endIcon={<CodeIcon />}>
                Code
                </Button>
              </Box>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                variant="outlined" 
                href="https://cogbench-prd.ngrok.dev"
                target="_blank">
                Data Collection Tool
                </Button>
                <Button 
                variant="outlined" 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdAyv3ELW09sRa1L_xQrDXS9q1aeWtntdjAFpeH4SXJoe6FVQ/viewform"
                target="_blank">
                Collaboration Interest Form
                </Button>
                <Button 
                variant="outlined" 
                href="/pdfs/instructions.pdf"
                target="_blank">
                Instructions for Contributors
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
