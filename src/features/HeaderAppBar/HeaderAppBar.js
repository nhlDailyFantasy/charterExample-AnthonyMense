import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
export default function HeaderAppBar() {
  return (
    <AppBar data-testid="appHeader">
        <Toolbar style={{display: 'flex', minWidth: '800px', minHeight: '50px', height: '50px'}}>
            <Typography data-testid="appHeaderName" variant="h6" component="div" style={{minWidth: '25%'}}>
                Anthony Mense
            </Typography>
            <Typography data-testid="appHeaderTitle" variant="h6" component="div" style={{minWidth: '50%'}}>
                Charter Rewards Points Example
            </Typography>
            <Typography data-testid="appHeaderDate" variant="h6" component="div" style={{minWidth: '25%'}}>
                5/19/2023
            </Typography>
        </Toolbar>
    </AppBar>
  );
}