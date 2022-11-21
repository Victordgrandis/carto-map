import { Box, Typography } from '@mui/material';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '80px',
        zIndex: 1,
        boxShadow: 2,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '16px',
      }}
    >
      <Typography variant="h4">Carto Assignment</Typography>
    </Box>
  );
};
