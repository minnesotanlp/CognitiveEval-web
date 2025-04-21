// web/src/components/elements/bottomSections.js
// This component is used to render the bottom sections of the webpage, specifically the Call for Participation, Citation, and Footer Sections.
import React from 'react';
import { Typography, Container, Box} from '@mui/material';

const CognitiveEvalFramework = () => (
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
        CognitiveEval Framework Introduction
      </Typography>
      
      <Box
        component="img"
        src={'/images/cognitive_eval_pipeline.png'}
        alt={'Pipeline'}
        sx={{
          display: 'block',
          maxWidth: '100%',
          width: { xs: '100%', md: '70%' },
          height: 'auto',
          border: '1px solid #ccc',
          borderRadius: '8px',
          mx: 'auto',
        }}
      />

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          color: 'text.secondary',
          textAlign: 'justify',
          paddingTop: 4
        }}
      >
        The goal of CognitiveEval is to offer a flexible and robust framework for adapting a wide range of cognitive experimental studies, ultimately helping researchers gather converging evidence to support their conclusions in cognitive evaluation of LLMs. Guided by these design principles, we outline the core components of CognitiveEval.
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
        Prompt Permutations
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          color: 'text.secondary',
          textAlign: 'justify',
          paddingTop: '1rem',
        }}
      >
        CognitiveEval provides automatic prompt permutations to assist users in diversifying their prompts. CognitiveEval prompts have two components which are acted on separately.
        <br />
        The general instructions are paraphrased by GPT-4o, and the data format is diversified across punctuation and whitespace according to FORMATSPREAD. We generate 3 distinct paraphrases combined with 10 data formats, yielding 30 prompt variations.
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        <Box component="li" sx={{ mb: 2 }}>
            <Typography
            variant="body1"
            sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: 'text.secondary',
                textAlign: 'justify',
            }}
            >
            Instructions, which explain the task, e.g.: Read the following story and phrase, and determine if the phrase is true based on the story.
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
            Data format, which describes generally how the individual stimuli should be presented to the model, e.g.: Story: { }, Phrase: { }
            </Typography>
        </Box>
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
      >
        Experiment Dialogues
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          color: 'text.secondary',
          textAlign: 'justify',
          paddingTop: '1rem',
        }}
      >
        CognitiveEval supports interactive dialogue experiments, or presenting each stimulus in a separate dialogue. In many cases separate dialogues are preferred to order to avoid order effects. For example, in our WCST, the LLM must play a game and respond to feedback. In such cases, a chat dialogue is conducive to replicating the experiment in LLMs
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
        Metric Collection
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          color: 'text.secondary',
          textAlign: 'justify',
          paddingTop: '1rem',
        }}
      >
        CognitiveEval collects two measures: (1) response accuracy, by comparing model output with a target output, and (2) model probabilities of a target output.
        <br/>
        When computing probabilities, in the event that the target output is a single token long (e.g. “A,” or “False”) this is obtained by inputting the prompt to the model and taking the softmax of the logits from the language modeling head. 
        <br/>
        In the event that the target output is several tokens long, we compute the perplexity of the target answer.
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
        Models and Inference
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          color: 'text.secondary',
          textAlign: 'justify',
        }}
      >
        We use six open-source LLMs from three different model families,
        each with two size variations: Gemma2 with 9B and 27B parameters,
        Llama3.1 with 8B and 70B parameters, and Qwen2 with 7B and 72B parameters. 
        All models are the instruction-tuned variants. 
        <br/>
        Our pipeline also enables the use of proprietary models such as GPT-4o and reasoning-oriented models like DeepSeek-R1
      </Typography>
    </Container>
  </Box>
);




export default CognitiveEvalFramework;
