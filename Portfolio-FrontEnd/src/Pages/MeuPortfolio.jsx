import Navbar from '../components/Navbar';
import ProjectsList from '../components/ProjectsList';
import Box from '@mui/material/Box';
import UserDataComponent from '../UserDataComponent/UserDataComponent';

const user = {
  name: 'Camila',
  lastName: 'Soares',
  country: 'Brasil',
  avatar: '../assets/userAvatar.png',
};

const Home = () => {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          mx: { xs: '24px', md: '32px', xl: '10%' },
          mb: '100px',
        }}
      >
        <UserDataComponent user={user}></UserDataComponent>

        <ProjectsList isMyProjects={true} />
      </Box>
    </>
  );
};

export default Home;
