// PROGRESS CIRCLE
import {Box, useTheme} from '@mui/material';
import { tokens} from '../../theme';

import React from 'react'
import { borderRadius } from '@mui/system';

const ProgressCircle = ({progress = "0.75", size="40"}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // Angle: how much progress we have
    const angle = progress * 360;
  
    return (
        
        
        <Box
            sx={{
                background: `radial-gradient(${`${theme.palette.mode==="dark"?"#101624":"#f2f0f0"}`} 55%, transparent 56%),
                    conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                    ${colors.greenAccent[500]}
                `,
                borderRadius: "50%",
                // background: "white",
                width: `${size}px`,
                height: `${size}px`
            }}
        
        ></Box>
  )
}

export default ProgressCircle;
