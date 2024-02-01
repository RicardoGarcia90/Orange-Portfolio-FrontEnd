import { Button, Dialog, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";
import SuccessMessage from "./SuccessMessage";

function DeleteConfirmation({ project, open, handleClose }) {
  
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const handleSuccessDialogOpen = () => setIsSuccessDialogOpen(true);
  const handleSuccessDialogClose = () => {
    setIsSuccessDialogOpen(false);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "255px",
          height: "178px",
          margin: "32px 28px",
        }}
      >
        <Typography variant="h5">Deseja Excluir?</Typography>
        <Typography variant="body1">
          Se você prosseguir irá excluir o projeto do seu portfólio
        </Typography>

        <Stack sx={{ flexDirection: "row", gap: "16px" }}>
          <ConfirmButton
            variant="contained"
            color="secondary"
            onClick={handleSuccessDialogOpen}
          >
            <Typography variant="button">Excluir</Typography>
          </ConfirmButton>
          <CancelButton variant="contained" onClick={handleClose}>
            <Typography variant="button">Cancelar</Typography>
          </CancelButton>
        </Stack>

        <SuccessMessage messageType='delete' open={isSuccessDialogOpen} handleClose={handleSuccessDialogClose}/>

      </Stack>
    </Dialog>
  );
}

export default DeleteConfirmation;

const ConfirmButton = styled(Button)({
  color: "#FCFDFF",
});

const CancelButton = styled(Button)({
  backgroundColor: "rgba(0, 0, 0, 0.12)",
  color: "rgba(0, 0, 0, 0.38)",
});
