import React from 'react'
import { Box } from '@mui/material';
import PieChart from '../../../Components/PieChart/PieChart';
import Header from "../../../Components/Header/Header";

const Pie = () => {
  return (
    <Box m="20px">
        <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
        <Box height="75vh">
            <PieChart/>
        </Box>
    </Box>
    
  )
}

export default Pie;
