import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
// import Header from "../../../theme";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../../theme';
import Header from "../../../Components/Header/Header";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Quesktions Page"/>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a condimentum elit. Quisque vel eros eu urna imperdiet hendrerit ut non nisl.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Another Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        In enim ex, cursus sed condimentum sit amet, faucibus non odio. Pellentesque nec lectus tortor. Donec mi dolor, hendrerit id magna at, tincidunt mollis mauris.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
         Third Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Nunc elementum lorem id dui cursus, vitae tempus tortor tincidunt. Nulla facilisi. Phasellus ut laoreet est.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Fourth Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Pellentesque auctor ipsum tristique, tincidunt neque et, congue massa. Morbi et nisi sem. In pulvinar nunc ut venenatis euismod.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a condimentum elit. Quisque vel eros eu urna imperdiet hendrerit ut non nisl.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a condimentum elit. Quisque vel eros eu urna imperdiet hendrerit ut non nisl.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a condimentum elit. Quisque vel eros eu urna imperdiet hendrerit ut non nisl.
        </Typography>
      </AccordionDetails>
    </Accordion>
  
  </Box>
}

export default Faq
