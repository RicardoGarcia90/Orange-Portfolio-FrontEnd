import { Dialog, Stack, Typography, Button, styled } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useContext } from 'react';
import { ReloadContext } from '../contexts/ReloadContext';

function SuccessMessage({ messageType, open, handleClose }) {
  const message = (() => {
    switch (messageType) {
      case 'add':
        return 'Projeto adicionado com sucesso!';
      case 'edit':
        return 'Edição concluída com sucesso!';
      case 'delete':
        return 'Projeto deletado com sucesso!';
        default:
          return 'Invalid entry' 
    }
  });

  const {setReload} = useContext(ReloadContext);
  const closeDialog = () => {
    setReload(true)
    handleClose()
  }

  return (
    <Dialog 
    open={open} 
    onClose={closeDialog}
    >
      <Stack 
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '255px',
        height: '178px',
        margin: '32px 28px',
        }}
        >
        <Typography variant="h5" >{message()}</Typography>
        <CheckCircleRoundedIcon sx={{width: "40px", height: "40px", color: 'green'}}/>
        <ConfirmButton variant="contained" color="secondary" onClick={closeDialog}>
            <Typography variant='button'>Voltar para projetos</Typography>
        </ConfirmButton>
      </Stack>
    </Dialog>
  );
}

export default SuccessMessage;

const ConfirmButton = styled(Button)({
    color: "#FCFDFF",
  });