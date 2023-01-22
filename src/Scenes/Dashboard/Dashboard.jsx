import { Box } from '@mui/material';
import Header from "../../Components/Header/Header";
import React from 'react';

const Dashboard = () => {
  return (
    <Box m="20px">
       <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
       </Box>
      
    </Box>
    
  )
}

export default Dashboard
