/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from '@mui/material';
import '../assets/userAvatar.png';

function UserDataComponent({ user }) {
  return (
    <Stack
      sx={{
        flexFlow: 'row wrap',
        bgcolor: 'white',
        gap: '42px',
        justifyContent: 'center',
      }}
    >
      <img
        src={user.avatar}
        alt="User image"
        width="122"
        style={{
          borderRadius: '50%',
        }}
      />

      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            gap: '16px',
          }}
        >
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="h5">{user.lastName}</Typography>
        </Stack>

        <Typography variant="subtitle1">{user.country}</Typography>

        <Button
          variant="contained"
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
