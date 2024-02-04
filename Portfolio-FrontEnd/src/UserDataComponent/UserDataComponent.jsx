/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from '@mui/material';
import AddEditProject from '../AddEditProject/AddEditProject';
import { useState } from 'react';

import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import userMock from '../model/User';

function UserDataComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  const { user } = useContext(UserContext);

  // const user = userMock

  return (
    <Stack
      sx={{
        flexFlow: 'row wrap',
        bgcolor: 'white',
        gap: '42px',
        justifyContent: 'center',
        margin: '112px auto 56px auto',
      }}
    >
      <img
        src={user.avatar}
        alt="User image"
        width="122"
        style={{
          borderRadius: '50%',
          height: '122px',
          width: '122px',
        }}
      />

      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '122px',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            gap: '16px',
          }}
        >
          <Typography variant="h5">
            {user.name} {user.lastName}
          </Typography>
        </Stack>

        <Typography variant="subtitle1">{user.nation}</Typography>

        <AddEditProject
          userData={user}
          open={isDialogOpen}
          handleClose={handleDialogClose}
        />

        <Button
          variant="contained"
          onClick={handleDialogOpen}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
            color: 'rgba(0, 0, 0, 0.38)',
          }}
        >
          <Typography variant="button">Adicionar projeto</Typography>
        </Button>
      </Stack>
    </Stack>
  );
}

export default UserDataComponent;
