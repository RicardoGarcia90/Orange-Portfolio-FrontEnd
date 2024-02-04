import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import UserDataComponent from '../UserDataComponent/UserDataComponent';
import Navbar from '../components/Navbar';
import ProjectsList from '../components/ProjectsList';

import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { ReloadContext } from '../contexts/ReloadContext';

const MeuPortfolio = () => {
  const { user, setUser } = useContext(UserContext);
  const { setReload } = useContext(ReloadContext);

  // const renderUserData = () => {
  //   if (!user) return null; // Retorna null se user não estiver definido

  //   return (
  //     <ul>
  //       {Object.entries(user).map(([key, value]) => (
  //         <li key={key}>
  //           <strong>{key}:</strong> {value}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  useEffect(() => {
    setReload(true)
    const localUser = JSON.parse(localStorage.getItem('orange-user'));

    if (localUser) {
      setUser({
        token: localUser.token,
        name: localUser.user.name,
        lastName: localUser.user.lastName,
        avatar: localUser.user.avatar,
        nation: localUser.user.nation,
      });
    }
  }, [setUser]);

  return (
    <>
      <Navbar />

      {/* {renderUserData()} */}

      <Box
        sx={{
          mx: { xs: '24px', md: '32px', xl: '10%' },
          mb: '100px',
        }}
      >
        <UserDataComponent />

        <Typography variant="subtitle1" sx={{ mb: '16px' }}>
          Meus projetos
        </Typography>

        <ProjectsList isMyProjects={true} />
      </Box>
    </>
  );
};

export default MeuPortfolio;
