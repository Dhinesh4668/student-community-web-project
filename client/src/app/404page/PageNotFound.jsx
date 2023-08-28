import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PageNotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Typography variant="h4" color="textSecondary">
        404 - Page Not Found
      </Typography>
    </Box>
  );
};

export default PageNotFound;
