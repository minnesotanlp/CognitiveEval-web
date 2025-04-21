import React from 'react';
import { useParams} from 'react-router-dom';
import { Typography, Box} from '@mui/material';
import experimentData from '../data/experiments.json';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ExperimentPage = () => {
    const { id } = useParams();
    const experiment = experimentData.find((exp) => exp.id === id);

    return (
      <Box sx={{position: 'relative', textAlign: 'center', mt: 4}}>
        <Box
        sx={{
            // width: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 6,
            position: 'relative',
            paddingTop: 10,
          }}
        >
            {/* <Button variant="contained" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
                ← Go Back
            </Button> */}
            {/* <IconButton onClick={() => navigate(-1)} sx={{ ml: 4, backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
                <ArrowBackIosIcon fontSize="small" />
            </IconButton> */}
            <Typography
            variant="h4"
            sx={{ 
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'Open Sans, sans-serif',
                color: 'primary.dark',
            }}
            >
            {experiment.task}
            </Typography>
        </Box>
        {/* Result (if exists) */}
        <Box sx={{width: '80%', mx: 'auto', paddingTop: 3}}>
            <Typography
                variant="body1"
                sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '1.15rem',
                textAlign: 'justify',
                }}
                gutterBottom
            >
                {experiment.result}
            </Typography>

            {experiment.insights.map((data, idx) => (
                <Box key={idx} paddingTop={2}>
                    <Box
                    component="img"
                    src={data.src}
                    alt={data.alt}
                    sx={{
                        maxWidth: '50%',
                        width: { xs: '60%', md: '60%' },
                        height: 'auto',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                    }} />
                    <Box component="ul" sx={{ pl: 4 }}> 
                        <Box component="li" sx={{ mb: 2, maxWidth: '70%', mx: 'auto'}}>
                            <Typography
                                variant="body1"
                                sx={{
                                fontFamily: 'Open Sans, sans-serif',
                                fontSize: '1.15rem',
                                lineHeight: 1.7,
                                // color: 'text.secondary',
                                textAlign: 'justify',
                                }}
                            >
                                {data.text}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
      </Box>
    );
  };
  export default ExperimentPage;