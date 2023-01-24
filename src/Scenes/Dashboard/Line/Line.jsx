import React from 'react'
import { Box } from '@mui/material';
import LineChart from '../../../Components/LineChart/LineChart';
import Header from "../../../Components/Header/Header";


const Line = () => {
  return (
    <Box m="20px">
        <Header title="Line Chart" subtitle="Simple Bar Chart"/>
        <Box height="75vh">
            <LineChart/>
        </Box>
    </Box>
  )
}

export default Line;
