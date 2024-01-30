import Box from '@mui/material/Box';
import UserDataComponent from '../UserDataComponent/UserDataComponent';
import Navbar from '../components/Navbar';
import ProjectsList from '../components/ProjectsList';
import { Typography } from '@mui/material';

const user = {
  name: 'Camila',
  lastName: 'Soares',
  country: 'Brasil',
  avatar: '../src/assets/userAvatar.png',
};

const MeuPortfolio = () => {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          mx: { xs: '24px', md: '32px', xl: '10%' },
          mb: '100px',
        }}
      >
        <UserDataComponent user={user} ></UserDataComponent>
        
        <Typography variant="subtitle1" sx={{ mb: "16px"}}>Meus projetos</Typography>

        <ProjectsList />
      </Box>
    </>
  );
};

export default MeuPortfolio;
