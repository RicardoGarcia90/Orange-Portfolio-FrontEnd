import { Button, Dialog, Stack, Typography, styled } from "@mui/material";
import { useContext, useState } from "react";
import SuccessMessage from "./SuccessMessage";
import axios from "axios";
import UserContext from "../contexts/UserContext";

function DeleteConfirmation({ projectId, open, handleClose }) {
  
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const handleSuccessDialogOpen = () => setIsSuccessDialogOpen(true);
  const handleSuccessDialogClose = () => {
    setIsSuccessDialogOpen(false);
    handleClose();
  };

  const { user } = useContext(UserContext);

  const handleDelete = () => {

    console.log(projectId)

    axios.delete(`https://orangeportfolioapi.azurewebsites.net/api/v1/projects/${projectId}`, 
      {
      headers: {
        Authorization: `bearer ${user.token}`,
      }
    }).then((res) => {
      console.log(res);

      if(res.status == 201 || res.status == 200) {
        handleSuccessDialogOpen();
      } else {
        alert(`Algo deu errado! ${res.statusText}`)
      }

    }).catch((err) => {
      console.log(err)
    })

    handleSuccessDialogOpen()
  }

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
            onClick={handleDelete}
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
