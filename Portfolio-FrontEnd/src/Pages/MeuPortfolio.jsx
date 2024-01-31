import Navbar from '../components/Navbar';
import ProjectsList from '../components/ProjectsList';
import Box from '@mui/material/Box';
import UserDataComponent from '../UserDataComponent/UserDataComponent';
import { Typography } from '@mui/material';
import userMock from '../model/User';

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
        <UserDataComponent user={userMock} ></UserDataComponent>
        
        <Typography variant="subtitle1" sx={{ mb: "16px"}}>Meus projetos</Typography>

        <ProjectsList isMyProjects={true} />
      </Box>
    </>
  );
};

export default MeuPortfolio;
