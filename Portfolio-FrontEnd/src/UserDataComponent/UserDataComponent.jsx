/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from '@mui/material';
import AddEditProject from '../AddEditProject/AddEditProject';
import { useState } from 'react';

function UserDataComponent({ user }) {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <Stack
      sx={{
        flexFlow: 'row wrap',
        bgcolor: 'white',
        gap: '42px',
        justifyContent: 'center',
        margin: "112px auto 56px auto",
      }}
    >
      <img
        src={user.avatar}
        alt="User image"
        width="122"
        style={{
          borderRadius: '50%',
          height: "122px",
          width: "122px",
          border: '1px solid',
        }}
      />

      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: "122px"
        }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            gap: '16px',
          }}
        >
          <Typography variant="h5">{user.name} {user.lastName}</Typography>
        </Stack>

        <Typography variant="subtitle1">{user.country}</Typography>
       
        <AddEditProject userData={user} open={isDialogOpen} handleClose={handleDialogClose} />

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